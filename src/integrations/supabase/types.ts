export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      business_photos: {
        Row: {
          business_id: string
          caption: string | null
          created_at: string
          id: string
          is_primary: boolean
          uploaded_by: string | null
          url: string
        }
        Insert: {
          business_id: string
          caption?: string | null
          created_at?: string
          id?: string
          is_primary?: boolean
          uploaded_by?: string | null
          url: string
        }
        Update: {
          business_id?: string
          caption?: string | null
          created_at?: string
          id?: string
          is_primary?: boolean
          uploaded_by?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_photos_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          address: string
          category: string
          category_slug: string
          city: string
          created_at: string
          description: string
          featured: boolean
          hours: Json | null
          id: string
          image: string | null
          languages: string[] | null
          lat: number
          lng: number
          menu_items: Json | null
          name: string
          owner_id: string | null
          payment_methods: string[] | null
          phone: string | null
          price_level: number
          rating: number
          reviews_count: number
          services: string[] | null
          slug: string
          status: Database["public"]["Enums"]["business_status"]
          tags: string[] | null
          updated_at: string
          verified: boolean
          website: string | null
        }
        Insert: {
          address: string
          category: string
          category_slug: string
          city: string
          created_at?: string
          description: string
          featured?: boolean
          hours?: Json | null
          id?: string
          image?: string | null
          languages?: string[] | null
          lat: number
          lng: number
          menu_items?: Json | null
          name: string
          owner_id?: string | null
          payment_methods?: string[] | null
          phone?: string | null
          price_level?: number
          rating?: number
          reviews_count?: number
          services?: string[] | null
          slug: string
          status?: Database["public"]["Enums"]["business_status"]
          tags?: string[] | null
          updated_at?: string
          verified?: boolean
          website?: string | null
        }
        Update: {
          address?: string
          category?: string
          category_slug?: string
          city?: string
          created_at?: string
          description?: string
          featured?: boolean
          hours?: Json | null
          id?: string
          image?: string | null
          languages?: string[] | null
          lat?: number
          lng?: number
          menu_items?: Json | null
          name?: string
          owner_id?: string | null
          payment_methods?: string[] | null
          phone?: string | null
          price_level?: number
          rating?: number
          reviews_count?: number
          services?: string[] | null
          slug?: string
          status?: Database["public"]["Enums"]["business_status"]
          tags?: string[] | null
          updated_at?: string
          verified?: boolean
          website?: string | null
        }
        Relationships: []
      }
      collection_items: {
        Row: {
          business_id: string
          collection_id: string
          id: string
          note: string | null
          sort_order: number
        }
        Insert: {
          business_id: string
          collection_id: string
          id?: string
          note?: string | null
          sort_order?: number
        }
        Update: {
          business_id?: string
          collection_id?: string
          id?: string
          note?: string | null
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "collection_items_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_items_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      collections: {
        Row: {
          cover_image: string | null
          created_at: string
          curated_by: string | null
          description: string | null
          id: string
          is_featured: boolean
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          cover_image?: string | null
          created_at?: string
          curated_by?: string | null
          description?: string | null
          id?: string
          is_featured?: boolean
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          cover_image?: string | null
          created_at?: string
          curated_by?: string | null
          description?: string | null
          id?: string
          is_featured?: boolean
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          business_id: string
          created_at: string
          helpful_count: number
          id: string
          rating: number
          text: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          business_id: string
          created_at?: string
          helpful_count?: number
          id?: string
          rating: number
          text?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          helpful_count?: number
          id?: string
          rating?: number
          text?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
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
      business_status: "pending" | "approved" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      business_status: ["pending", "approved", "rejected"],
    },
  },
} as const
