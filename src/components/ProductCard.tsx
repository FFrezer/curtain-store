// components/ProductCard.tsx
'use client'
import Image from "next/image";
import { Prisma } from "@prisma/client";
import { useCart } from "@/context/CartContext";

type ProductWithImages = Prisma.ProductGetPayload<{
 where: { featured: true }, 
  include: {
    images: true,
    variants: true,
  };
}>;

export default function ProductCard({ product }: { product: ProductWithImages }) 
{
  return (
    <div className="w-full max-w-md mx-auto">
  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
    <Image
      src={product.image || product.images?.[0]?.url || "/placeholder.jpg"}
      alt={product.name}
      fill
      sizes="(max-width:768px) 100vw,
             (max-width:1024px) 50vw,
             33vw"
      className="object-cover"
      priority
    />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      </div>
    </div>
  );
}
