"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BarLoader } from "react-spinners";
interface Props {
  imageLink: string;
  invert?: boolean;
}

export default function WorkImage({ imageLink, invert = false }: Props) {
  const [showLoader, setLoader] = useState(true);
  return (
    <>
      {showLoader && (
        <div className="w-full flex items-center justify-center">
          <BarLoader className="dark:invert" />
        </div>
      )}

      <Image
        src={imageLink}
        width={720}
        height={200}
        alt="step 1"
        className={`w-full h-auto ${
          invert ? "dark:invert" : ""
        }  max-h-0 transition-transform  rounded-md duration-500 aspect-square object-cover `}
        onLoadingComplete={(image) => {
          setLoader(false);
          image.classList.remove("max-h-0");
        }}
      />
    </>
  );
}
