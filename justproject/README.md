# TaskForge AI MVP

A comprehensive AI-powered task management system with intelligent prioritization and automation.

## Overview

TaskForge AI helps you manage tasks efficiently using AI-powered prioritization, automated workflows, and smart insights to maximize productivity and time savings.

## Features

### 📊 Dashboard
- Real-time task overview with AI priority scores
- Time saved analytics
- Daily completion tracking
- Quick access to new tasks

### 📋 Task Management
- Create, update, and track tasks across multiple categories
- Intelligent priority scoring based on urgency, impact, and effort
- Automated status updates
- Time tracking and savings calculation

### 🧠 AI Priority Engine
- Calculates priority scores using formula: `(urgency * 0.4) + (impact * 0.5) - (effort * 0.1)`
- Automatically determines priority levels (HIGH, MEDIUM, LOW)
- Sorts tasks by highest priority first

### 🗂️ Task List
- Mark tasks as complete
- Delete tasks
- Live updates
- Expand/collapse task details

## Technology Stack

- **Framework**: Next.js 16.2.7 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React hooks
- **Icons**: Emoji-based UI (no icon library dependency)

## Project Structure

```
app/
├─ dashboard/          # Main dashboard with analytics
├─ tasks/             # Task management interface
├─ api/tasks/         # Task API endpoints
├─ globals.css        # Tailwind CSS styles
├─ layout.tsx         # Root layout component
├─ page.tsx           # Home page (legacy)

components/
├─ DashboardCard.tsx  # Stat card component
├─ TaskList.tsx       # Interactive task list
├─ PriorityScore.tsx   # Priority visualization

lib/
├─ task-engine.ts     # Core task management with AI scoring
├─ types.ts          # TypeScript type definitions
├─ supabase.ts        # Supabase integration (optional)

README.md             # Project documentation
```

## Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Lint Code
```bash
npm run lint
```

## API Endpoints

The application provides the following API endpoints:

- `GET /api/tasks` - Fetch all tasks (with optional status/category filters)
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/:id` - Update an existing task
- `DELETE /api/tasks/:id` - Delete a task

## AI Priority Scoring

The AI priority score is calculated based on three key metrics:

- **Urgency** (1-10): How time-sensitive the task is
- **Impact** (1-10): The potential value or consequences
- **Effort** (1-10): Resources required to complete

Formula: `priorityScore = (urgency * 0.4) + (impact * 0.5) - (effort * 0.1)`

Priority levels:
- **HIGH**: score ≥ 7
- **MEDIUM**: 4 ≤ score < 7
- **LOW**: score < 4

## Dashboard Metrics

The dashboard displays key performance indicators:

- **Total Tasks**: Overall task count
- **Completed Tasks**: Number of completed tasks
- **AI Priority Score**: Intelligent priority assessment (0-10)
- **Time Saved**: Cumulative minutes saved from completed tasks

## Task Management

### Creating Tasks
1. Click "Create Task" button
2. Fill in title, description, and scoring parameters
3. Adjust urgency, impact, and effort sliders
4. Select category and due date
5. Click "Create Task"

### Managing Tasks
1. View tasks in the Task List
2. Use status dropdown to update task status
3. Use priority dropdown to adjust priority
4. Expand task details for more options
5. Click delete button to remove tasks

### AI Features
- Automatic priority calculation based on scoring
- Smart sorting by priority level
- Time savings tracking
- Category organization

## License

MIT
