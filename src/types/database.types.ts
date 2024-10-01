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
      credits: {
        Row: {
          created_at: string
          id: string
          total_credits: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          total_credits?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          total_credits?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "credits_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      headshots: {
        Row: {
          credits_used: number
          generated_end_time: string
          generation_start_time: string
          id: string
          is_public: boolean
          template_id: string
          type: string
          user_id: string
        }
        Insert: {
          credits_used: number
          generated_end_time?: string
          generation_start_time?: string
          id?: string
          is_public?: boolean
          template_id: string
          type?: string
          user_id: string
        }
        Update: {
          credits_used?: number
          generated_end_time?: string
          generation_start_time?: string
          id?: string
          is_public?: boolean
          template_id?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "headshots_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "headshots_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      headshots_generated_variants: {
        Row: {
          created_at: string
          headshot_id: string
          id: string
          image_url: string | null
          quality: string | null
        }
        Insert: {
          created_at?: string
          headshot_id: string
          id?: string
          image_url?: string | null
          quality?: string | null
        }
        Update: {
          created_at?: string
          headshot_id?: string
          id?: string
          image_url?: string | null
          quality?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "headshots_generated_variants_headshot_id_fkey"
            columns: ["headshot_id"]
            isOneToOne: false
            referencedRelation: "headshots"
            referencedColumns: ["id"]
          },
        ]
      }
      headshots_uploaded_images: {
        Row: {
          created_at: string
          headshot_id: string
          id: string
          image_url: string | null
        }
        Insert: {
          created_at?: string
          headshot_id: string
          id?: string
          image_url?: string | null
        }
        Update: {
          created_at?: string
          headshot_id?: string
          id?: string
          image_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "headshots_uploaded_images_headshot_id_fkey"
            columns: ["headshot_id"]
            isOneToOne: false
            referencedRelation: "headshots"
            referencedColumns: ["id"]
          },
        ]
      }
      templates: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_preview_url: string
          name: string
          updated_at: string
          usage_count: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_preview_url: string
          name: string
          updated_at?: string
          usage_count?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_preview_url?: string
          name?: string
          updated_at?: string
          usage_count?: number
        }
        Relationships: []
      }
      users_favourite_templates: {
        Row: {
          created_at: string
          id: string
          template_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          template_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          template_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_favourite_templates_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_favourite_templates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users_transactions: {
        Row: {
          created_at: string
          credits: number
          id: string
          recipient_user_id: string | null
          transaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          credits: number
          id?: string
          recipient_user_id?: string | null
          transaction_type?: string
          user_id: string
        }
        Update: {
          created_at?: string
          credits?: number
          id?: string
          recipient_user_id?: string | null
          transaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_transactions_recipient_user_id_fkey"
            columns: ["recipient_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
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
