import Image from "next/image";
import React from "react";

function BusinessDescription({ businessDeet }) {
  return (
    businessDeet.name && (
      <div>
        <h2 className="font-bold text-[25px]">Description</h2>
        <p className="mt-4">{businessDeet.about}</p>
        <h2 className="font-bold text-[25px] mt-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4">
          {businessDeet.images.map((image, index) => (
            <Image
              src={image.url}
              key={index}
              alt="image"
              width={700}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    )
  );
}

export default BusinessDescription;
