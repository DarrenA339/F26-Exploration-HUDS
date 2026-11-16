import FoodInfoOverlay from "@/components/foodInfoOverlay";
import { getAllFoods } from "@/data/foods";

/**
 * Scratch page for eyeballing the overlay against the sample menu.
 * Visit /food-test.
 */
export default function FoodTest() {
  const foods = getAllFoods();

  return (
    <main className="bg-gray-100">
      {foods.map((food) => (
        <FoodInfoOverlay
          key={food.id}
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
    </main>
  );
}
