import MealButton from "@/components/mealButton";
import DietaryTag from "@/components/dietaryTag";

export default function Home() {
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

      
    </main>
  );
}