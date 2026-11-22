import DietaryTag from "@/components/dietaryTag";
import { dietaryTagColors } from "@/lib/dietaryColors";

type FoodCardProps = {
  name: string;
  imageSrc: string;
  calories: number;
  servings: number;
  tags: string[];
};

export default function FoodCard({ name, imageSrc, calories, servings, tags }: FoodCardProps) {
  return (
    <div className="flex gap-6 w-[600px] rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Image */}
      <img src={imageSrc} className="h-[150px] w-[150px] rounded-xl bg-[#F3E9EA] object-cover" />

      {/* Info */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-2 text-lg text-gray-500">
          {calories} cal &middot; {servings} serving
        </p>
        <div className="mt-auto flex gap-2">
          {tags.map((tag) => (
            <DietaryTag key={tag} label={tag} {...dietaryTagColors(tag)} />
          ))}
        </div>
      </div>

      {/* Heart */}
      <div className="flex h-12 w-12 items-center justify-center self-start rounded-full border border-gray-200">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#A4243B" strokeWidth={2.2}>
          <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.5 8.2 3.4 4.5 7 4.5c2.1 0 3.6 1.2 5 3 1.4-1.8 2.9-3 5-3 3.6 0 5.5 3.7 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" />
        </svg>
      </div>
    </div>
  );
}