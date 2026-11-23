"use client";

import Image from "next/image";
import type { HouseInfo } from "@/data/houses";
import { useState } from "react";


type HouseDropdownProps = {
  house: HouseInfo;
};

export default function HouseDropdown({
  house
}: HouseDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      {/* TOP: House crest */}
      <div>
        {/* Display house image here */}
        <Image
          src={house.imageSrc}
          alt={`${house.name} crest`}
          width={100}
          height={100}
        />
      </div>

      {/* BOTTOM: House name and dropdown arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1"
      >
        <p className="font-semibold">{house.name}</p>
        <span className="text-xs text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="bg-gray-200 rounded-md p-4 text-center">
          <h3 className="font-bold underline text-lg">{house.name} House Menu Offerings</h3>
          <h4 className="font-bold text-lg mt-4">Hours of Operation:</h4>
          {house.hours.map((row) => (
            <p key={row.label}>
              <span className="font-bold">{row.label}:</span> {row.text}
            </p>
          ))}
          <h4 className="font-bold text-lg mt-4">Location:</h4>
          {house.location.map((row) => (
            <p key={row.label}>
              <span className="font-bold">{row.label}:</span> {row.text}
            </p>
          ))}
          {house.restrictions && (
            <>
              <h4 className="font-bold text-lg mt-4">Interhouse Restrictions:</h4>
              {house.restrictions.map((row) => (
                <p key={row.text}>
                  {row.label ? (
                    <>
                      <span className="font-bold">{row.label}:</span> {row.text}
                    </>
                  ) : (
                    <>• {row.text}</>
                  )}
                </p>
              ))}
            </>
          )}
         <h4 className="font-bold text-lg mt-4">Contact Us:</h4>
          <p><span className="font-bold">Email:</span> {house.email}</p>
          <p><span className="font-bold">Call:</span> {house.phone}</p>
        </div>

      )}

    </div>
  );
}