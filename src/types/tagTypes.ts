export interface Tag {
    id: string;
    name: string;
  }
  
  export interface TagState {
    tags: Tag[];
    loading: boolean;
    error: string | null;
  }