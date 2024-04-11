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
          <div className="max-w-1/2 h-[calc(100vh)]">
            <Image src={imageUrl} width={400} height={100} alt="Overlay" className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOverlay;