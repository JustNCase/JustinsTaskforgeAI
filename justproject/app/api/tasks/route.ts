import { NextRequest, NextResponse } from 'next/server';
import { taskEngine } from '@/lib/task-engine';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const category = searchParams.get('category');

    let tasks = await taskEngine.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (category) {
      tasks = tasks.filter(task => task.category === category);
    }

    return NextResponse.json(tasks);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const task = await taskEngine.createTask(body);
    return NextResponse.json(task, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const taskId = params.id;
    const task = await taskEngine.updateTask(taskId, body);
    
    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(task);
  } catch {
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const taskId = params.id;
    const deleted = await taskEngine.deleteTask(taskId);
    
    if (!deleted) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Handle task creation with optional subtasks
    const task = await taskEngine.createTask(body);
    
    // If subtasks are included in the request, add them to the task
    if (body.subtasks && Array.isArray(body.subtasks)) {
      const updatedTask = await taskEngine.updateTask(task.id, {
        subtasks: body.subtasks.map((subtask: Partial<Subtask>) => ({
          ...subtask,
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
      });
      return NextResponse.json(updatedTask, { status: 201 });
    }
    
    return NextResponse.json(task, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}
