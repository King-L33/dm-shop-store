# DM Shop 0.4 - Customer Storefront

Multi-vendor marketplace customer storefront for the South African e-commerce market.

## Overview

DM Shop Store provides the customer-facing experience for:
- Multi-vendor product browsing
- Custom store URLs (dmshop.co.za/[user-id]/[store-name])
- Shopping cart and checkout
- South African payment methods
- Paxi/Pudo shipping options
- Mobile-optimized experience

## Features

### Customer Experience
- **Multi-Vendor Browsing**: Discover products from multiple sellers
- **Custom Store URLs**: Each seller has their own branded storefront
- **Advanced Search**: Filter by category, price, location, seller
- **Shopping Cart**: Multi-vendor cart with seller grouping
- **Secure Checkout**: Paystack payment processing

### South African Market Features
- **ZAR Currency**: All prices in South African Rand (R)
- **Local Payment Methods**: Card, EFT, mobile payments via Paystack
- **Shipping Options**: Paxi drop-off points and Pudo lockers
- **Provincial Delivery**: Delivery estimates by SA province
- **Mobile-First**: Optimized for South African mobile usage patterns

### Technology Stack
- **Framework**: Next.js 14 with TypeScript
- **Database**: Supabase (PostgreSQL) integration
- **Authentication**: Clerk for customer accounts
- **UI Components**: Radix UI + Tailwind CSS
- **State Management**: Redux Toolkit + Redux Persist
- **Payment Processing**: Paystack (South African market)
- **Internationalization**: Next-intl for multi-language support

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

The customer storefront will be available at `http://localhost:3000`

## Environment Variables

```bash
# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Paystack Payment Processing
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key

# API Integration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# Feature Flags
NEXT_PUBLIC_ENABLE_MULTI_LANGUAGE=true
NEXT_PUBLIC_ENABLE_PWA=true
```

## Key Features

### Custom Store URLs
Each seller gets a custom URL structure:
- `dmshop.co.za/[user-id]/[store-name]`
- SEO-optimized individual store pages
- Branded seller experience

### Multi-Vendor Cart
- Products grouped by seller
- Individual shipping calculations per seller
- Transparent commission display (7% free tier)
- Service fee display (R15 per transaction)

### South African Checkout
- Address validation for SA postal codes
- Province selection dropdown
- Shipping provider selection (Paxi vs Pudo)
- VAT calculation (15% where applicable)

## Development

- **Port**: 3000 (customer-facing storefront)
- **API Integration**: Connects to admin dashboard on port 3001
- **Database**: Read-only access to Supabase via RLS policies
- **Authentication**: Customer accounts with Clerk

## Deployment

Ready for deployment on Vercel with:
- Automatic GitHub integration
- Supabase environment variables
- Clerk authentication setup
- Vercel Analytics integration

## License

Private - DM Shop 0.4 Project

