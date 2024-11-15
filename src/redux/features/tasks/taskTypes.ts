export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    priority: 'Low' | 'Medium' | 'High';
    tags: string[];
  }
  
  export interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
  }
  