import ProductCard from '@/components/shareCompo/productCard'
import Link from 'next/link'
import React from 'react'

function ProductComponent() {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h3>
               <span>Unilever :</span> Deals you can&apos;t miss
            </h3>
            <Link href={"/"}
            >
            View All
            </Link>
        </div>
        <div className='flex items-center justify-between gap-2'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default ProductComponent