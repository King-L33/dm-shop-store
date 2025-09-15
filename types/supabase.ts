// Supabase-compatible types that match the database schema
// These types align with the Supabase schema defined in the Database type

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          full_name: string | null
          avatar_url: string | null
          website: string | null
          role: string
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          role?: string
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          role?: string
        }
      }
      products: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          slug: string
          description: string
          price: number
          discount: number
          status: string
          inventory: string
          weight: number
          sku: string
          unit: string
          featured: boolean
          views: number
          user_id: string
          store_id: string
          category_id: string
          brand_id: string
          seo_title: string | null
          seo_description: string | null
          seo_slug: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          slug: string
          description: string
          price: number
          discount?: number
          status?: string
          inventory?: string
          weight?: number
          sku: string
          unit?: string
          featured?: boolean
          views?: number
          user_id: string
          store_id: string
          category_id: string
          brand_id: string
          seo_title?: string | null
          seo_description?: string | null
          seo_slug?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          slug?: string
          description?: string
          price?: number
          discount?: number
          status?: string
          inventory?: string
          weight?: number
          sku?: string
          unit?: string
          featured?: boolean
          views?: number
          user_id?: string
          store_id?: string
          category_id?: string
          brand_id?: string
          seo_title?: string | null
          seo_description?: string | null
          seo_slug?: string | null
        }
      }
      categories: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          slug: string
          description: string
          image: string | null
          status: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          slug: string
          description: string
          image?: string | null
          status?: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          slug?: string
          description?: string
          image?: string | null
          status?: string
          user_id?: string
        }
      }
      brands: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          slug: string
          description: string
          image: string | null
          status: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          slug: string
          description: string
          image?: string | null
          status?: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          slug?: string
          description?: string
          image?: string | null
          status?: string
          user_id?: string
        }
      }
      reviews: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          product_id: string
          user_id: string
          rating: number
          review: string
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          product_id: string
          user_id: string
          rating: number
          review: string
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          product_id?: string
          user_id?: string
          rating?: number
          review?: string
          status?: string
        }
      }
      orders: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          customer_id: string
          store_id: string
          subtotal: number
          total: number
          status: string
          shipping_id: string | null
          payment_method_id: string | null
          address_id: string | null
          delivered: boolean
          earning: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          customer_id: string
          store_id: string
          subtotal: number
          total: number
          status?: string
          shipping_id?: string | null
          payment_method_id?: string | null
          address_id?: string | null
          delivered?: boolean
          earning?: number
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          customer_id?: string
          store_id?: string
          subtotal?: number
          total?: number
          status?: string
          shipping_id?: string | null
          payment_method_id?: string | null
          address_id?: string | null
          delivered?: boolean
          earning?: number
        }
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
  }
}

// Type helpers for easier use
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Product = Database['public']['Tables']['products']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Brand = Database['public']['Tables']['brands']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']
export type Order = Database['public']['Tables']['orders']['Row']

export type ProductInsert = Database['public']['Tables']['products']['Insert']
export type ProductUpdate = Database['public']['Tables']['products']['Update']