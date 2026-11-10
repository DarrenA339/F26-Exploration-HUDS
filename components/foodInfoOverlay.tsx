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
    <div>
      {/* Dark background overlay */}

      {/* Main modal container */}
      <div>
        {/* Header: Food name, meal, serving size, close button */}

        {/* Dietary labels */}
        <div>
          {/* Map through dietaryLabels use basic text for now and add the component when teammate creates it*/}
        </div>

        {/* Two-column content layout */}
        <div>
          {/* LEFT COLUMN */}
          <div>
            {/* Food image */}

            {/* Ingredients section */}

            {/* Contains / Allergens section */}
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Nutrition Facts panel can be image for now*/}
          </div>
        </div>

        {/* Footer */}
        <div>
          {/* Serving quantity selector */}

          {/* View Calorie Tracker button */}

          {/* Add to Calorie Tracker button */}
        </div>
      </div>
    </div>
  );
}