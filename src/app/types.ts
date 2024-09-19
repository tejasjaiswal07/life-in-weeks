export interface Week {
    id: number;
    number: number;
    startDate: Date;
    passed: boolean;
  }
  
  export interface Habit {
    id: number;
    name: string;
    streak: number;
  }
  
  export interface BucketListItem {
    id: number;
    description: string;
    completed: boolean;
  }