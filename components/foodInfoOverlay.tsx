"use client";

import {useState} from "react";
import Image from "next/image";

type FoodInfoOverlayProps = {
  name: string;
  meal: string;
  servingSize: string;
  imageSrc: string;
  dietaryLabels: string[];
  ingredients: string[];
  allergens: string[];
  nutritionSrc: string;
};

export default function FoodInfoOverlay({
  name,
  meal,
  servingSize,
  imageSrc,
  dietaryLabels,
  ingredients,
  allergens,
  nutritionSrc,
}: FoodInfoOverlayProps) {
    const [servings, setServings] = useState(1);
  return (
    <div className="m-5 bg-white border rounded-lg p-8">
      {/* Dark background overlay */}

      {/* Main modal container */}
      <div className="">
        {/* Header: Food name, meal, serving size, close button */}
        <div className="flex justify-between">
            {/* Contains food name and close button */}
            <h1 className="font-bold text-3xl">{name}</h1>
            <button className="size-10 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition duration-150 ease-in-out">x</button>
        </div>
        <div>
            {/* Contains the meal and serving size (beneath food name) */}
            <h4 className="text-gray-800 text-xl">{meal} &middot; {servingSize}</h4>
        </div>

        {/* Dietary labels */}
        <div className="flex flex-wrap gap-2 my-3">
          {/* Map through dietaryLabels. use basic text for now and add the component when teammate creates it*/}
          {dietaryLabels.map((label) => (
            <span key={label} className="px-3 py-1 text-sm font-medium border rounded-full">{label}</span>
          ))}
        </div>

        {/* Two-column content layout */}
        <div className="flex justify-between">
          {/* LEFT COLUMN */}
          <div className="mr-5">
            {/* Food image */}
            <img className="border-2 rounded-lg mb-4" src={imageSrc}></img>

            {/* Ingredients section */}
            <h3 className="font-bold text-xl">Ingredients</h3>
            <p className="mb-4">{ingredients.join(", ")}</p>

            {/* Contains / Allergens section */}
            
            <h3 className="font-bold text-xl mb-1">Contains</h3>
            <div className="flex flex-wrap gap-2">
                {allergens.map((allergen) => (
                    <span key={allergen} className="bg-red-100 font-bold text-[#a51c30] rounded-full px-3">
                        {allergen}
                    </span>
                ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Nutrition Facts panel can be image for now*/}
            <img className="border-2" src={nutritionSrc}></img>
          </div>
        </div>

        {/* Footer */}
        <hr className="border-gray-300 my-5"></hr>
        <div className="flex justify-between">
          {/* Serving quantity selector */}
          <div className="flex items-center font-bold border-2 border-gray-300 rounded-full px-2 py-1 gap-4">
            <button onClick={() => setServings((servings) => servings <= 1 ? servings : servings - 1)} className="size-8 rounded-full bg-gray-200 hover:bg-gray-400 cursor-pointer transition duration-150 ease-in-out">-</button>
            <p>{servings}</p>
            <button onClick={() => setServings((servings) => servings + 1)} className="size-8 rounded-full bg-gray-200 hover:bg-gray-400 cursor-pointer transition duration-150 ease-in-out">+</button>
            <p>{servings === 1 ? "serving" : "servings"}</p>
          </div>

          <div className="flex gap-8">
            {/* View Calorie Tracker button */}
            <button className="px-5 border-2 border-[#a51c30] rounded-full font-bold text-[#a51c30] bg-white hover:cursor-pointer hover:bg-[#a51c30] hover:text-white active:opacity-60 transition duration-150 ease-in-out">View Calorie Tracker</button>

            {/* Add to Calorie Tracker button */}
            <button className="px-5 rounded-full bg-[#a51c30] text-white font-bold hover:opacity-75 cursor-pointer active:opacity-60 transition duration-150 ease-in-out">Add to Calorie Tracker</button>
          </div>
        </div>
      </div>
    </div>
  );
}