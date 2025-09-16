// API Fallback data for development when backend is not available

export const fallbackProducts = [
  {
    id: "1",
    name: "Samsung Galaxy S24",
    price: 15999,
    image: "/assets/products/samsung-s24.jpg",
    category: "Smartphones",
    description: "Latest Samsung flagship smartphone with advanced camera features",
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: "2", 
    name: "MacBook Pro 14-inch",
    price: 35999,
    image: "/assets/products/macbook-pro.jpg",
    category: "Computer & Laptop",
    description: "Powerful laptop for professionals with M3 chip",
    inStock: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    price: 6999,
    image: "/assets/products/sony-headphones.jpg", 
    category: "Headphones",
    description: "Premium noise-canceling wireless headphones",
    inStock: true,
    rating: 4.7,
    reviews: 256
  },
  {
    id: "4",
    name: "iPhone 15 Pro",
    price: 21999,
    image: "/assets/products/iphone-15-pro.jpg",
    category: "Smartphones", 
    description: "Apple's latest iPhone with titanium design",
    inStock: false,
    rating: 4.6,
    reviews: 342
  }
];

export const fallbackCategories = [
  {
    id: "1",
    name: "Computer & Laptop",
    slug: "computer-laptop",
    image: "/assets/categories/computers.jpg",
    productCount: 156,
    subCategory: [
      { id: "1-1", name: "Laptops", slug: "laptops" },
      { id: "1-2", name: "Desktop PCs", slug: "desktop-pcs" },
      { id: "1-3", name: "Gaming PCs", slug: "gaming-pcs" }
    ]
  },
  {
    id: "2", 
    name: "Smartphones",
    slug: "smartphones",
    image: "/assets/categories/smartphones.jpg",
    productCount: 89,
    subCategory: [
      { id: "2-1", name: "Android", slug: "android" },
      { id: "2-2", name: "iPhone", slug: "iphone" },
      { id: "2-3", name: "Accessories", slug: "phone-accessories" }
    ]
  },
  {
    id: "3",
    name: "Headphones",
    slug: "headphones", 
    image: "/assets/categories/headphones.jpg",
    productCount: 67,
    subCategory: [
      { id: "3-1", name: "Wireless", slug: "wireless-headphones" },
      { id: "3-2", name: "Gaming", slug: "gaming-headphones" }
    ]
  },
  {
    id: "4",
    name: "Accessories",
    slug: "accessories",
    image: "/assets/categories/accessories.jpg", 
    productCount: 234,
    subCategory: []
  },
  {
    id: "5",
    name: "Camera & Photo",
    slug: "camera-photo",
    image: "/assets/categories/cameras.jpg",
    productCount: 45,
    subCategory: [
      { id: "5-1", name: "DSLR", slug: "dslr-cameras" },
      { id: "5-2", name: "Mirrorless", slug: "mirrorless-cameras" }
    ]
  },
  {
    id: "6",
    name: "TV & Homes",
    slug: "tv-homes",
    image: "/assets/categories/tv-home.jpg",
    productCount: 78,
    subCategory: [
      { id: "6-1", name: "Smart TVs", slug: "smart-tvs" },
      { id: "6-2", name: "Home Appliances", slug: "home-appliances" }
    ]
  }
];

export const fallbackPages = [
  {
    id: "1",
    title: "About Us",
    slug: "about-us",
    content: "Learn more about DM Shop and our mission"
  },
  {
    id: "2",
    title: "Contact",
    slug: "contact", 
    content: "Get in touch with our customer support team"
  },
  {
    id: "3",
    title: "Privacy Policy",
    slug: "privacy-policy",
    content: "Our commitment to protecting your privacy"
  },
  {
    id: "4",
    title: "Terms of Service", 
    slug: "terms-of-service",
    content: "Terms and conditions for using DM Shop"
  }
];

export const fallbackCampaigns = [
  {
    id: "1",
    title: "Black Friday Sale",
    description: "Up to 59% OFF on selected items",
    image: "/assets/campaigns/black-friday.jpg",
    type: "homepage-slideshow-first-zone",
    active: true,
    slideItem: [
      {
        id: "1-1",
        product: {
          id: "p1",
          name: "Samsung Galaxy S24",
          images: [
            { id: "img1", url: "/assets/products/samsung-s24.jpg" }
          ],
          price: 15999
        }
      }
    ]
  },
  {
    id: "2",
    title: "New Arrivals",
    description: "Check out the latest products",
    image: "/assets/campaigns/new-arrivals.jpg", 
    type: "homepage-slideshow-second-zone",
    active: true,
    slideItem: [
      {
        id: "2-1",
        product: {
          id: "p2",
          name: "MacBook Pro 14-inch",
          images: [
            { id: "img2", url: "/assets/products/macbook-pro.jpg" }
          ],
          price: 35999
        }
      }
    ]
  },
  {
    id: "3",
    title: "Best Deals",
    description: "Don't miss these amazing offers",
    image: "/assets/campaigns/best-deals.jpg",
    type: "homepage-product-best-deals-section", 
    active: true,
    slideItem: [
      {
        id: "3-1",
        product: {
          id: "p3",
          name: "Sony WH-1000XM5",
          images: [
            { id: "img3", url: "/assets/products/sony-headphones.jpg" }
          ],
          price: 6999
        }
      }
    ]
  }
];

// Helper function to check if API is available
export const isApiAvailable = () => {
  return process.env.NEXT_PUBLIC_API_URL && 
         process.env.NEXT_PUBLIC_API_URL !== "https://placeholder-api.example.com";
};

// Helper function to get fallback data based on type
export const getFallbackData = (type: string) => {
  switch (type) {
    case 'products':
      return fallbackProducts;
    case 'categories':
      return fallbackCategories;
    case 'pages':
      return fallbackPages;
    case 'campaigns':
      return fallbackCampaigns;
    default:
      return [];
  }
};

