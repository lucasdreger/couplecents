export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null
          id: string
          name: string
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          type?: string
        }
        Relationships: []
      }
      credit_card_bills: {
        Row: {
          amount: number
          house_id: string | null
          id: string
          month: number
          updated_at: string | null
          year: number
        }
        Insert: {
          amount: number
          house_id?: string | null
          id?: string
          month: number
          updated_at?: string | null
          year: number
        }
        Update: {
          amount?: number
          house_id?: string | null
          id?: string
          month?: number
          updated_at?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "credit_card_bills_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      default_incomes: {
        Row: {
          house_id: string | null
          id: string
          income_amount: number
          other_income: number | null
          updated_at: string | null
        }
        Insert: {
          house_id?: string | null
          id?: string
          income_amount: number
          other_income?: number | null
          updated_at?: string | null
        }
        Update: {
          house_id?: string | null
          id?: string
          income_amount?: number
          other_income?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "default_incomes_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      fixed_expenses: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string
          estimated_amount: number
          house_id: string | null
          id: string
          owner: string | null
          status_required: boolean | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          description: string
          estimated_amount: number
          house_id?: string | null
          id?: string
          owner?: string | null
          status_required?: boolean | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          description?: string
          estimated_amount?: number
          house_id?: string | null
          id?: string
          owner?: string | null
          status_required?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "fixed_expenses_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fixed_expenses_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      households: {
        Row: {
          created_at: string | null
          id: string
          name: string
          share_code: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          share_code?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          share_code?: string | null
        }
        Relationships: []
      }
      houses: {
        Row: {
          created_at: string | null
          id: string
          name: string
          share_code: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          share_code?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          share_code?: string | null
        }
        Relationships: []
      }
      invitations: {
        Row: {
          created_at: string | null
          house_id: string | null
          id: string
          invited_email: string
          status: string | null
          token: string | null
        }
        Insert: {
          created_at?: string | null
          house_id?: string | null
          id?: string
          invited_email: string
          status?: string | null
          token?: string | null
        }
        Update: {
          created_at?: string | null
          house_id?: string | null
          id?: string
          invited_email?: string
          status?: string | null
          token?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invitations_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_fixed_expenses: {
        Row: {
          fixed_expense_id: string | null
          id: string
          month: number
          status_completed: boolean | null
          updated_at: string | null
          year: number
        }
        Insert: {
          fixed_expense_id?: string | null
          id?: string
          month: number
          status_completed?: boolean | null
          updated_at?: string | null
          year: number
        }
        Update: {
          fixed_expense_id?: string | null
          id?: string
          month?: number
          status_completed?: boolean | null
          updated_at?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "monthly_fixed_expenses_fixed_expense_id_fkey"
            columns: ["fixed_expense_id"]
            isOneToOne: false
            referencedRelation: "fixed_expenses"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_incomes: {
        Row: {
          house_id: string | null
          id: string
          income_amount: number
          month: number
          other_income: number | null
          updated_at: string | null
          year: number
        }
        Insert: {
          house_id?: string | null
          id?: string
          income_amount: number
          month: number
          other_income?: number | null
          updated_at?: string | null
          year: number
        }
        Update: {
          house_id?: string | null
          id?: string
          income_amount?: number
          month?: number
          other_income?: number | null
          updated_at?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "monthly_incomes_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      reserves: {
        Row: {
          amount: number
          created_at: string | null
          house_id: string | null
          id: string
          last_updated: string | null
          reserve_type: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          house_id?: string | null
          id?: string
          last_updated?: string | null
          reserve_type?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          house_id?: string | null
          id?: string
          last_updated?: string | null
          reserve_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reserves_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          house_id: string | null
          id: string
          password: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          house_id?: string | null
          id?: string
          password?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          house_id?: string | null
          id?: string
          password?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      variable_expenses: {
        Row: {
          amount: number
          category_id: string | null
          created_at: string | null
          date: string
          description: string
          house_id: string | null
          id: string
        }
        Insert: {
          amount: number
          category_id?: string | null
          created_at?: string | null
          date: string
          description: string
          house_id?: string | null
          id?: string
        }
        Update: {
          amount?: number
          category_id?: string | null
          created_at?: string | null
          date?: string
          description?: string
          house_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "variable_expenses_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "variable_expenses_house_id_fkey"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
