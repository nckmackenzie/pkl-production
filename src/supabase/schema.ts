export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      departments: {
        Row: {
          created_at: string;
          departmentName: string;
          id: string;
          productionFlow: number | null;
        };
        Insert: {
          created_at?: string;
          departmentName: string;
          id?: string;
          productionFlow?: number | null;
        };
        Update: {
          created_at?: string;
          departmentName?: string;
          id?: string;
          productionFlow?: number | null;
        };
        Relationships: [];
      };
      jobcard_hours: {
        Row: {
          carving: number | null;
          cnc: number | null;
          finishing: number | null;
          id: number;
          jobCardId: string;
          joinery: number | null;
          machinery: number | null;
          polishing: number | null;
          sanding: number | null;
          upholstery: number | null;
          yard: number | null;
        };
        Insert: {
          carving?: number | null;
          cnc?: number | null;
          finishing?: number | null;
          id?: number;
          jobCardId: string;
          joinery?: number | null;
          machinery?: number | null;
          polishing?: number | null;
          sanding?: number | null;
          upholstery?: number | null;
          yard?: number | null;
        };
        Update: {
          carving?: number | null;
          cnc?: number | null;
          finishing?: number | null;
          id?: number;
          jobCardId?: string;
          joinery?: number | null;
          machinery?: number | null;
          polishing?: number | null;
          sanding?: number | null;
          upholstery?: number | null;
          yard?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'jobcard_hours_jobCardId_fkey';
            columns: ['jobCardId'];
            isOneToOne: false;
            referencedRelation: 'jobcards';
            referencedColumns: ['id'];
          }
        ];
      };
      jobcards: {
        Row: {
          client: string;
          closed: boolean | null;
          closedDate: string | null;
          created_at: string;
          expectedEndDate: string | null;
          id: string;
          jobcardNo: string;
          raisedDate: string;
          salesPerson: string;
          subject: string;
          value: number | null;
        };
        Insert: {
          client: string;
          closed?: boolean | null;
          closedDate?: string | null;
          created_at?: string;
          expectedEndDate?: string | null;
          id?: string;
          jobcardNo: string;
          raisedDate: string;
          salesPerson: string;
          subject: string;
          value?: number | null;
        };
        Update: {
          client?: string;
          closed?: boolean | null;
          closedDate?: string | null;
          created_at?: string;
          expectedEndDate?: string | null;
          id?: string;
          jobcardNo?: string;
          raisedDate?: string;
          salesPerson?: string;
          subject?: string;
          value?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
