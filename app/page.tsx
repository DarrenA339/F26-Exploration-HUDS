import FoodInfoOverlay from "@/components/foodInfoOverlay";

// Scratch page for developing the overlay. Visit http://localhost:3000/overlay-test
// Not part of the real app -- delete it (or keep it) once the overlay is done.
export default function OverlayTestPage() {
  return (
    <main>
      <FoodInfoOverlay
        name="Ginger Jasmine Rice"
        meal="Lunch"
        servingSize="1 cup"
        imageSrc="/images/rice.png"
        dietaryLabels={["Vegan", "Gluten free"]}
        ingredients={["Jasmine rice", "Ginger", "Sesame oil", "Salt"]}
        allergens={["Sesame"]}
        nutritionSrc="/images/riceNutrition.png"
      />
    </main>
  );
}
