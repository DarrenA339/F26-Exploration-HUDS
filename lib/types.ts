/**
 * Shared domain types for the HUDS prototype.
 *
 * These describe the shape of the data only. Sample values live in
 * `data/foods.ts` today; when a real menu API or database shows up, only that
 * file needs to change — everything else keeps importing these types.
 */

/** The meal/menu sections, matching the labels on the <MealButton /> row. */
export type Meal =
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Salad Bar"
  | "Desserts & Daily Offerings";

export const MEALS: Meal[] = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Salad Bar",
  "Desserts & Daily Offerings",
];

/** Dietary callouts. Keep in sync with the color maps in the UI components. */
export type DietaryLabel =
  | "Vegan"
  | "Vegetarian"
  | "Gluten Free"
  | "Halal"
  | "Kosher";

/** The FDA "big 9" allergens, as HUDS lists them. */
export type Allergen =
  | "Milk"
  | "Eggs"
  | "Fish"
  | "Shellfish"
  | "Tree Nuts"
  | "Peanuts"
  | "Wheat"
  | "Soy"
  | "Sesame";

/**
 * One nutrition-facts panel's worth of numbers, **per single serving**.
 *
 * Units are fixed so the renderer never has to guess:
 *   - grams (g):      totalFat, saturatedFat, transFat, totalCarbohydrate,
 *                     dietaryFiber, totalSugars, addedSugars, protein
 *   - milligrams (mg): cholesterol, sodium, calcium, iron, potassium
 *   - micrograms (mcg): vitaminD
 */
export type NutritionFacts = {
  calories: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  totalCarbohydrate: number;
  dietaryFiber: number;
  totalSugars: number;
  addedSugars: number;
  protein: number;
  vitaminD: number;
  calcium: number;
  iron: number;
  potassium: number;
};

/** A single menu item. */
export type FoodItem = {
  /** Stable kebab-case slug. Safe to use as a React key or a URL segment. */
  id: string;
  name: string;
  /** An item can appear at more than one meal (rice shows up at lunch AND dinner). */
  meals: Meal[];
  /** Human-readable serving, e.g. "1/4 cup (45g)". Shown in the header and on the label. */
  servingSize: string;
  imageSrc: string;
  dietaryLabels: DietaryLabel[];
  ingredients: string[];
  allergens: Allergen[];
  nutrition: NutritionFacts;
};
