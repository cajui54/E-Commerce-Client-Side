import Link from 'next/link';
import React from 'react';

import { icons, iconsTypes } from '../_constants/options-navbar';
import { getCategoryProduct } from '../_data-access/category-product/get-category-product';

const NavbarCategory = async () => {
  const categoryProducts = await getCategoryProduct();
  return (
    <div className="mx-auto flex h-[100px] w-4/5 items-center justify-center gap-5 overflow-auto">
      {categoryProducts
        .filter((category) => category.slug !== 'home')
        .map((category) => {
          const slug = category.slug as keyof iconsTypes;
          const Icon = icons[slug];

          return (
            <Link
              key={category.id}
              href={`/pages/category-products/${category.slug}`}
              className="text-center text-neutral-600 transition-all duration-300 ease-in-out hover:scale-125 hover:text-emerald-400"
            >
              <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-neutral-100 drop-shadow-sm drop-shadow-gray-300">
                <Icon />
              </div>
              <span className="text-xs">{category.name}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default NavbarCategory;
