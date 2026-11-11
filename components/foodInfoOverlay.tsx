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

  return (
    <div className="bg-gray-200 p-2 w-200 h-200">
      {/* Dark background overlay */}

      {/* Main modal container */}
      <div className="">
        {/* Header: Food name, meal, serving size, close button */}
        <div className="flex justify-between">
            {/* Contains food name and close button */}
            <h1>{name}</h1>
            <button className="w-30 bg-gray-400 hover:bg-gray-700">x</button>
        </div>
        <div>
            {/* Contains the meal and serving size (beneath food name) */}
            <h4 className="text-gray-800">{meal} &middot; {servingSize}</h4>
        </div>

        {/* Dietary labels */}
        <div>
          {/* Map through dietaryLabels. use basic text for now and add the component when teammate creates it*/}
          <p>{dietaryLabels.join(", ")}</p>
        </div>

        {/* Two-column content layout */}
        <div className="flex justify-between">
          {/* LEFT COLUMN */}
          <div className="mr-5">
            {/* Food image */}
            <img src={imageSrc}></img>

            {/* Ingredients section */}
            <h3>Ingredients</h3>
            <p>{ingredients.join(", ")}</p>

            {/* Contains / Allergens section */}
            <h3>Contains</h3>
            <p>{allergens.join(", ")}</p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Nutrition Facts panel can be image for now*/}
            <img src={nutritionSrc}></img>
          </div>
        </div>

        {/* Footer */}
        <hr className="my-2"></hr>
        <div className="flex justify-between">
          {/* Serving quantity selector */}
          <div className="flex">
            <button className="w-10 bg-gray-400 hover:bg-gray-700">-</button>
            <p>1</p>
            <button className="w-10 bg-gray-400 hover:bg-gray-700">+</button>
            <p>serving(s)</p>
          </div>

          <div className="flex gap-8">
            {/* View Calorie Tracker button */}
            <button className="bg-gray-400 hover:bg-gray-700">View Calorie Tracker</button>

            {/* Add to Calorie Tracker button */}
            <button className="bg-gray-400 hover:bg-gray-700">Add to Calorie Tracker</button>
          </div>
        </div>
      </div>
    </div>
  );
}