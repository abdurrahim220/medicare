import React from 'react'
import Banner from './banner'
import ProductComponent from './ProductComponent'
import EspeciallyForYouSection from './EspeciallyForYouSection';

export default function HomeLayout() {
    const collections = [
        {
            
            images: {
                desktop: "/banner-1.webp",
            },
        },
        {
            images: {
                desktop: "/banner-2.webp",
            },
        },
        {
            images: {
                desktop: "/banner-3.webp",
            },
        },
        {
            images: {
                desktop: "/banner-4.webp",
            },
        }
    ];
  return (
    <div>
        <Banner collections={collections}/>
        <EspeciallyForYouSection/>
        <ProductComponent/>
    </div>
  )
}
