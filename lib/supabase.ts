import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types for DMShop PostgreSQL schema
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
      stores: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          name: string
          description: string
          logo: string | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          name: string
          description: string
          logo?: string | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          name?: string
          description?: string
          logo?: string | null
          status?: string
        }
      }
      categories: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          description: string | null
          slug: string
          image: string | null
          user_id: string | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          description?: string | null
          slug: string
          image?: string | null
          user_id?: string | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          description?: string | null
          slug?: string
          image?: string | null
          user_id?: string | null
          status?: string
        }
      }
      brands: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          description: string | null
          slug: string
          image: string | null
          user_id: string | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          description?: string | null
          slug: string
          image?: string | null
          user_id?: string | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          description?: string | null
          slug?: string
          image?: string | null
          user_id?: string | null
          status?: string
        }
      }
      products: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          featured: boolean
          name: string
          slug: string
          description: string
          additional: string | null
          specification: string | null
          store_id: string
          category_id: string | null
          brand_id: string | null
          price: number
          discount: number
          status: string
          inventory: string
          weight: number
          unit: string
          sku: string | null
          user_id: string | null
          views: number
          seo_title: string | null
          seo_description: string | null
          seo_slug: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          featured?: boolean
          name: string
          slug: string
          description: string
          additional?: string | null
          specification?: string | null
          store_id: string
          category_id?: string | null
          brand_id?: string | null
          price?: number
          discount?: number
          status?: string
          inventory?: string
          weight?: number
          unit?: string
          sku?: string | null
          user_id?: string | null
          views?: number
          seo_title?: string | null
          seo_description?: string | null
          seo_slug?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          featured?: boolean
          name?: string
          slug?: string
          description?: string
          additional?: string | null
          specification?: string | null
          store_id?: string
          category_id?: string | null
          brand_id?: string | null
          price?: number
          discount?: number
          status?: string
          inventory?: string
          weight?: number
          unit?: string
          sku?: string | null
          user_id?: string | null
          views?: number
          seo_title?: string | null
          seo_description?: string | null
          seo_slug?: string | null
        }
      }
      reviews: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          product_id: string
          store_id: string
          user_id: string
          rating: number
          review: string
          likes: string[]
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          product_id: string
          store_id: string
          user_id: string
          rating: number
          review: string
          likes?: string[]
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          product_id?: string
          store_id?: string
          user_id?: string
          rating?: number
          review?: string
          likes?: string[]
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