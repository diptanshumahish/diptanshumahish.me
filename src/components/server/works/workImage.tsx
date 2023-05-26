"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BarLoader } from "react-spinners";
interface Props {
  imageLink: string;
}

export default function WorkImage({ imageLink }: Props) {
  const [showLoader, setLoader] = useState(true);
  return (
    <>
      {showLoader && (
        <div className="w-full flex items-center justify-center">
          <BarLoader className="text-backgroundDark" />
        </div>
      )}

      <Image
        src={imageLink}
        width={720}
        height={200}
        alt="step 1"
        className="w-full h-auto dark:invert max-h-0 transition-transform duration-500 "
        onLoadingComplete={(image) => {
          setLoader(false);
          image.classList.remove("max-h-0");
        }}
      />
    </>
  );
}
