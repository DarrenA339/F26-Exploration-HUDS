import Image from "next/image";

type FoodCardProps = {
  name: string;
  imageSrc: string;
  calories: number;
  servings: number;
  tags: string[];
};

export default function FoodCard({
  name,
  imageSrc,
  calories,
  servings,
  tags,
}: FoodCardProps) {
  return (
    <div>
      {/* LEFT: Food image */}

      {/* MIDDLE: Food information */}
      <div>
         {/* Name */}

         {/* Calories and Serving */}

        {/* Dietary tags */}
        <div>
          {/* Use .map() to display each tag */}
        </div>

      </div>

      {/* RIGHT: Favorite button */}
    </div>
  );
}