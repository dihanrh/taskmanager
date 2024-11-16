import { Tag } from "./tagTypes";

export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    createdAt: string;
    priority: 'Low' | 'Medium' | 'High';
    tags: Tag[];
  }
  
  export interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
  }
  