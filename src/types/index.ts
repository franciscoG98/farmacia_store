export interface Product {
  id: string;
  attributes: {
    name: string;
    description: string;
    price: number;
    stock: number;
    prescription: boolean;
    sku: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// @fix: 
export interface Media {
  id: string;
  url: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  // formats?: any;
  // jpeg, jpg, png, etc
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  previewUrl?: string | null;
  provider?: string;
  // provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}


export interface Category {
  id: string;
  attributes: {
    name: string;
    description: string;
    image?: Media | Media[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Tipos específicos del ecommerce
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface CustomerOrder {
  id: string;
  attributes: {
    sku: string;
    status: 'pending' | 'approved' | 'rejected' | 'completed';
    total: number;
    prescription: boolean;
    healthInsurance: string | null;
    affiliateNumber: string | null;
    comments: string | null;
    customerEmail: string;
    customerPhone: string;
    // @fix: media type????
    prescriptionFile?: Media;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface PrescriptionData {
  healthInsurance: string;
  // affiliateNumber: string;
  prescriptionFile: File;
  comments?: string;
}