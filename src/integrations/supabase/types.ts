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
          cover_image: string | null
          created_at: string
          description: string
          email: string | null
          employees_count: number | null
          established_year: number | null
          featured: boolean
          hours: Json | null
          id: string
          image: string | null
          is_demo: boolean
          languages: string[] | null
          lat: number
          lng: number
          logo: string | null
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
          social_links: Json
          status: Database["public"]["Enums"]["business_status"]
          subcategory_slug: string | null
          tags: string[] | null
          updated_at: string
          verified: boolean
          website: string | null
          whatsapp: string | null
        }
        Insert: {
          address: string
          category: string
          category_slug: string
          city: string
          cover_image?: string | null
          created_at?: string
          description: string
          email?: string | null
          employees_count?: number | null
          established_year?: number | null
          featured?: boolean
          hours?: Json | null
          id?: string
          image?: string | null
          is_demo?: boolean
          languages?: string[] | null
          lat: number
          lng: number
          logo?: string | null
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
          social_links?: Json
          status?: Database["public"]["Enums"]["business_status"]
          subcategory_slug?: string | null
          tags?: string[] | null
          updated_at?: string
          verified?: boolean
          website?: string | null
          whatsapp?: string | null
        }
        Update: {
          address?: string
          category?: string
          category_slug?: string
          city?: string
          cover_image?: string | null
          created_at?: string
          description?: string
          email?: string | null
          employees_count?: number | null
          established_year?: number | null
          featured?: boolean
          hours?: Json | null
          id?: string
          image?: string | null
          is_demo?: boolean
          languages?: string[] | null
          lat?: number
          lng?: number
          logo?: string | null
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
          social_links?: Json
          status?: Database["public"]["Enums"]["business_status"]
          subcategory_slug?: string | null
          tags?: string[] | null
          updated_at?: string
          verified?: boolean
          website?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          icon: string | null
          id: string
          name: string
          slug: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id?: string
          name: string
          slug: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: string
          name?: string
          slug?: string
          sort_order?: number
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
      job_posts: {
        Row: {
          apply_contact: string | null
          business_id: string
          closes_at: string | null
          created_at: string
          currency: string
          description: string
          employment_type: Database["public"]["Enums"]["job_type"]
          id: string
          is_open: boolean
          location: string | null
          salary_max: number | null
          salary_min: number | null
          title: string
          updated_at: string
        }
        Insert: {
          apply_contact?: string | null
          business_id: string
          closes_at?: string | null
          created_at?: string
          currency?: string
          description: string
          employment_type?: Database["public"]["Enums"]["job_type"]
          id?: string
          is_open?: boolean
          location?: string | null
          salary_max?: number | null
          salary_min?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          apply_contact?: string | null
          business_id?: string
          closes_at?: string | null
          created_at?: string
          currency?: string
          description?: string
          employment_type?: Database["public"]["Enums"]["job_type"]
          id?: string
          is_open?: boolean
          location?: string | null
          salary_max?: number | null
          salary_min?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_posts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          body: string
          business_id: string
          created_at: string
          customer_id: string
          id: string
          product_id: string | null
          quote_request_id: string | null
          read_at: string | null
          sender_role: string
        }
        Insert: {
          body: string
          business_id: string
          created_at?: string
          customer_id: string
          id?: string
          product_id?: string | null
          quote_request_id?: string | null
          read_at?: string | null
          sender_role?: string
        }
        Update: {
          body?: string
          business_id?: string
          created_at?: string
          customer_id?: string
          id?: string
          product_id?: string | null
          quote_request_id?: string | null
          read_at?: string | null
          sender_role?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_quote_request_id_fkey"
            columns: ["quote_request_id"]
            isOneToOne: false
            referencedRelation: "quote_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      offers: {
        Row: {
          business_id: string
          created_at: string
          description: string | null
          discount_percent: number | null
          discount_price: number | null
          ends_at: string | null
          id: string
          image: string | null
          is_active: boolean
          original_price: number | null
          starts_at: string
          terms: string | null
          title: string
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          description?: string | null
          discount_percent?: number | null
          discount_price?: number | null
          ends_at?: string | null
          id?: string
          image?: string | null
          is_active?: boolean
          original_price?: number | null
          starts_at?: string
          terms?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          description?: string | null
          discount_percent?: number | null
          discount_price?: number | null
          ends_at?: string | null
          id?: string
          image?: string | null
          is_active?: boolean
          original_price?: number | null
          starts_at?: string
          terms?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "offers_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand: string | null
          business_id: string
          category: string | null
          condition: string
          created_at: string
          currency: string
          description: string | null
          id: string
          image: string | null
          images: string[]
          is_available: boolean
          model: string | null
          name: string
          price: number
          price_on_request: boolean
          sort_order: number
          specifications: Json
          updated_at: string
          warranty: string | null
        }
        Insert: {
          brand?: string | null
          business_id: string
          category?: string | null
          condition?: string
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          image?: string | null
          images?: string[]
          is_available?: boolean
          model?: string | null
          name: string
          price?: number
          price_on_request?: boolean
          sort_order?: number
          specifications?: Json
          updated_at?: string
          warranty?: string | null
        }
        Update: {
          brand?: string | null
          business_id?: string
          category?: string | null
          condition?: string
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          image?: string | null
          images?: string[]
          is_available?: boolean
          model?: string | null
          name?: string
          price?: number
          price_on_request?: boolean
          sort_order?: number
          specifications?: Json
          updated_at?: string
          warranty?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          budget: number | null
          business_id: string
          contact_method: string
          contact_name: string
          contact_value: string
          created_at: string
          currency: string
          customer_id: string | null
          description: string | null
          id: string
          location: string | null
          product_id: string | null
          quantity: number | null
          service_id: string | null
          status: Database["public"]["Enums"]["quote_status"]
          subject: string
          updated_at: string
        }
        Insert: {
          budget?: number | null
          business_id: string
          contact_method?: string
          contact_name: string
          contact_value: string
          created_at?: string
          currency?: string
          customer_id?: string | null
          description?: string | null
          id?: string
          location?: string | null
          product_id?: string | null
          quantity?: number | null
          service_id?: string | null
          status?: Database["public"]["Enums"]["quote_status"]
          subject: string
          updated_at?: string
        }
        Update: {
          budget?: number | null
          business_id?: string
          contact_method?: string
          contact_name?: string
          contact_value?: string
          created_at?: string
          currency?: string
          customer_id?: string | null
          description?: string | null
          id?: string
          location?: string | null
          product_id?: string | null
          quantity?: number | null
          service_id?: string | null
          status?: Database["public"]["Enums"]["quote_status"]
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "quote_requests_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quote_requests_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quote_requests_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
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
      services: {
        Row: {
          business_id: string
          created_at: string
          currency: string
          description: string | null
          duration: string | null
          id: string
          images: string[]
          is_active: boolean
          location: string | null
          name: string
          price_max: number | null
          price_min: number | null
          sort_order: number
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          currency?: string
          description?: string | null
          duration?: string | null
          id?: string
          images?: string[]
          is_active?: boolean
          location?: string | null
          name: string
          price_max?: number | null
          price_min?: number | null
          sort_order?: number
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          currency?: string
          description?: string | null
          duration?: string | null
          id?: string
          images?: string[]
          is_active?: boolean
          location?: string | null
          name?: string
          price_max?: number | null
          price_min?: number | null
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      subcategories: {
        Row: {
          category_id: string
          id: string
          name: string
          slug: string
          sort_order: number
        }
        Insert: {
          category_id: string
          id?: string
          name: string
          slug: string
          sort_order?: number
        }
        Update: {
          category_id?: string
          id?: string
          name?: string
          slug?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      verification_requests: {
        Row: {
          business_id: string
          created_at: string
          document_url: string | null
          id: string
          legal_name: string
          notes: string | null
          registration_number: string | null
          review_notes: string | null
          reviewed_at: string | null
          status: Database["public"]["Enums"]["verification_status"]
          submitted_by: string | null
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          document_url?: string | null
          id?: string
          legal_name: string
          notes?: string | null
          registration_number?: string | null
          review_notes?: string | null
          reviewed_at?: string | null
          status?: Database["public"]["Enums"]["verification_status"]
          submitted_by?: string | null
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          document_url?: string | null
          id?: string
          legal_name?: string
          notes?: string | null
          registration_number?: string | null
          review_notes?: string | null
          reviewed_at?: string | null
          status?: Database["public"]["Enums"]["verification_status"]
          submitted_by?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "verification_requests_business_id_fkey"
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
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      owns_business: { Args: { _business_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      business_status: "pending" | "approved" | "rejected"
      job_type:
        | "full_time"
        | "part_time"
        | "contract"
        | "internship"
        | "temporary"
      quote_status: "new" | "in_progress" | "answered" | "closed"
      verification_status: "pending" | "approved" | "rejected"
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
      app_role: ["admin", "moderator", "user"],
      business_status: ["pending", "approved", "rejected"],
      job_type: [
        "full_time",
        "part_time",
        "contract",
        "internship",
        "temporary",
      ],
      quote_status: ["new", "in_progress", "answered", "closed"],
      verification_status: ["pending", "approved", "rejected"],
    },
  },
} as const
