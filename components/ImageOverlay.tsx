'use client'

import React, { useState } from 'react';
import Image from "next/image";

interface ImageOverlayProps {
  imageUrl: string;
  key: number;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Image src={imageUrl} width={400} height={400} alt="Click to view" onClick={toggleOverlay} />
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center" onClick={toggleOverlay}>
          <div className="max-w-[calc(100vw)] lg:h-[calc(100vh)] md:h-[calc(100vh)] sm:h-[calc(80vh)]">
            <Image src={imageUrl} width={400} height={400} alt="Overlay" className="w-full lg:h-full md:h-full sm:h-auto"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOverlay;