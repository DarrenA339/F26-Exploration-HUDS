import Link from "next/link";
import MealButton from "@/components/mealButton";
import DietaryTag from "@/components/dietaryTag";
import FoodInfoOverlay from "@/components/foodInfoOverlay";
import FoodCard from "@/components/foodCard";
import Header from "@/components/header";
import { getAllFoods } from "@/data/foods"

export default function Home() {
    // this is an array of all of our foods with their info
    const foods = getAllFoods();
  return (
    <>
    <main>
        <Link href="/main-menu">
            <button className="border rounded-lg bg-green-100 text-black w-50 h-10 hover:cursor-pointer">Go to Menu</button>
        </Link>
        
    </main>
    </>
  );
}