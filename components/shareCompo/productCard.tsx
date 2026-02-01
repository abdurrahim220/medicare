import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

function ProductCard() {
  return (
    <Card className="min-w-[220px] rounded-xl shadow-sm">
      <CardContent className="p-3 space-y-3">

        {/* Discount badge */}
        <div className="relative">
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            2% OFF
          </span>

          <Image
            src="/product.png" // replace later
            alt="product"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Time badge */}
        <div className="text-xs text-gray-600 bg-gray-100 inline-flex px-2 py-1 rounded">
          🚀 12–24 Hours
        </div>

        {/* Title */}
        <h4 className="text-sm font-medium line-clamp-2">
          Buy 3 Lux Body Wash Black Orchid Scent
        </h4>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-500 text-xs">(2)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-400 text-sm">৳660</span>
          <span className="font-semibold text-lg">৳647</span>
        </div>

        {/* Action */}
        <button className="w-full border border-teal-600 text-teal-600 rounded-md py-1 font-medium hover:bg-teal-50">
          ADD
        </button>

      </CardContent>
    </Card>
  )
}

export default ProductCard
