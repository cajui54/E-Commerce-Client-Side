'use client';
import Image from 'next/image';
import React from 'react';

interface SlideImageProps {
  images: string[];
  name: string;
}
const SlideImage = ({ images, name }: SlideImageProps) => {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);
  return (
    <div className="w-full lg:flex lg:w-3/5">
      <div className="mx-auto mt-11 flex h-[300px] w-11/12 items-center justify-center">
        <Image
          src={selectedImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[300px] w-[250px] cursor-zoom-in drop-shadow-lg drop-shadow-neutral-800 transition-all duration-600 ease-initial hover:scale-110"
        />
      </div>
      <div className="mx-auto mt-4 flex w-11/12 gap-2.5 gap-y-4 lg:flex-col">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className={`h-[100px] w-[80px] cursor-pointer drop-shadow-lg drop-shadow-neutral-800 transition-all duration-600 ease-initial hover:scale-110 ${
              selectedImage === image ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideImage;
