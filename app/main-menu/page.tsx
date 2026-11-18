import Link from "next/link";
import MealButton from "@/components/mealButton";
import DietaryTag from "@/components/dietaryTag";
import FoodInfoOverlay from "@/components/foodInfoOverlay";
import FoodCard from "@/components/foodCard";
import Header from "@/components/header";
import { getAllFoods } from "@/data/foods"
import Preamble from "@/components/preamble";

export default function Home() {
    // this is an array of all of our foods with their info
    const foods = getAllFoods();
  return (
    <>
    <Header></Header>
    <main>
        <div className="mt-8 mb-10">
            <Preamble
            title = "Undergraduate Dining Menu"
            overview = "2026-2027 Menu for On-Campus Residents"
            paragraph="Find out what's planned for this week's menu including vegetarian and vegan options, as well as full ingredient listings and allergens. Select what meal time you want to know more information about and see the daily offerings!"
            />
        </div>

      <div className = 'flex flex-wrap justify-center'>
        <MealButton label="Breakfast" isActive={false} />
        <MealButton label="Lunch" isActive={false} />
        <MealButton label="Dinner" isActive={false} />
        <MealButton label="Salad Bar" isActive={true} />
        <MealButton
          label="Desserts & Daily Offerings"
          isActive={false}
        />
      </div>


      <div>
        {/* {foods.map((food) => (
            <FoodInfoOverlay key={food.id}
            name={food.name}
            meal={food.meals.join(", ")}
            servingSize={food.servingSize}
            imageSrc={food.imageSrc}
            dietaryLabels={food.dietaryLabels}
            ingredients={food.ingredients}
            allergens={food.allergens}
            nutrition={food.nutrition}
      />
        ))} */}
      </div>


    </main>
    </>
  );
}