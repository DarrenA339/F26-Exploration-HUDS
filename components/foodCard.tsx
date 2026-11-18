import Image from "next/image";
import DietaryTag from "@/components/dietaryTag";
import {dietaryTagColors} from "@/lib/dietaryColors";

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
    <div className="flex border rounded-xl p-5 min-w-100 w-fit min-h-40">
      {/* LEFT: Food image */}
      <img src={imageSrc} className="w-20 h-20 object-contain mr-5"/>
      {/* MIDDLE: Food information */}
      <div>
         {/* Name */}
         <h3 className="flex-1 text-xl font-bold">{name}</h3>
         {/* Calories and Serving */}
         <h3 className="text-l">{calories} cal &middot; {servings} {servings == 1 ? "serving" : "servings"}</h3>
        {/* Dietary tags */}
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <DietaryTag key={tag} label={tag} {...dietaryTagColors(tag)} />
          ))}
        </div>

      </div>

      {/* RIGHT: Favorite button */}
      <button className="self-start border bg-[#FFB6C1] w-8 h-8 rounded-3xl cursor-pointer active:opacity-70">:)</button>
    </div>
  );
}