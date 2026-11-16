import MealButton from "@/components/mealButton";
import DietaryTag from "@/components/dietaryTag";
import FoodInfoOverlay from "@/components/foodInfoOverlay";
import { getAllFoods } from "@/data/foods"

export default function Home() {
    // this is an array of all of our foods with their info
    const foods = getAllFoods();
  return (
    <main >
      <div className = 'flex'>
        <MealButton label="Breakfast" isActive={false} />
        <MealButton label="Lunch" isActive={false} />
        <MealButton label="Dinner" isActive={false} />
        <MealButton label="Salad Bar" isActive={true} />
        <MealButton
          label="Desserts & Daily Offerings"
          isActive={false}
        />
      </div>

      <div className = 'flex'>
        <DietaryTag
          label="Vegan"
          color="#166534"
          backgroundColor="#E8F5EC"
        />

        <DietaryTag
          label="Gluten free"
          color="#996000"
          backgroundColor="#FFF3DF"
      />
      </div>

      <div>
        {foods.map((food) => (
            <FoodInfoOverlay key={food.id}
            name={food.name}
            meal={food.meals.join(" · ")}
            servingSize={food.servingSize}
            imageSrc={food.imageSrc}
            dietaryLabels={food.dietaryLabels}
            ingredients={food.ingredients}
            allergens={food.allergens}
            nutrition={food.nutrition}
      />
        ))}
      </div>

      
    </main>
  );
}