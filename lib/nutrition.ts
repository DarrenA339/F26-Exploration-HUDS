import type { NutritionFacts } from "./types";

/**
 * FDA Daily Values for adults, based on a 2,000 calorie diet
 * (21 CFR 101.9(c)(8)(iv), the 2016 label update).
 *
 * Units match `NutritionFacts`: g, mg, or mcg.
 */
export const DAILY_VALUES = {
  totalFat: 78,
  saturatedFat: 20,
  cholesterol: 300,
  sodium: 2300,
  totalCarbohydrate: 275,
  dietaryFiber: 28,
  addedSugars: 50,
  protein: 50,
  vitaminD: 20,
  calcium: 1300,
  iron: 18,
  potassium: 4700,
} as const satisfies Partial<Record<keyof NutritionFacts, number>>;

export type DailyValueNutrient = keyof typeof DAILY_VALUES;

/** Percent of the Daily Value for one nutrient, rounded to a whole percent. */
export function percentDV(nutrient: DailyValueNutrient, amount: number): number {
  return Math.round((amount / DAILY_VALUES[nutrient]) * 100);
}

/**
 * Multiply every number in a panel by `servings`.
 *
 * Lets the overlay's serving stepper drive the label without the label
 * knowing anything about that state.
 */
export function scaleNutrition(
  nutrition: NutritionFacts,
  servings: number
): NutritionFacts {
  if (servings === 1) return nutrition;

  const scaled = {} as NutritionFacts;
  for (const key of Object.keys(nutrition) as (keyof NutritionFacts)[]) {
    scaled[key] = nutrition[key] * servings;
  }
  return scaled;
}

/**
 * FDA rounding for gram amounts: under 0.5g reads as 0, under 5g rounds to the
 * nearest half gram, everything else to the nearest whole gram.
 */
export function formatGrams(amount: number): string {
  if (amount < 0.5) return "0";
  if (amount < 5) return String(Math.round(amount * 2) / 2);
  return String(Math.round(amount));
}

/** Milligram and microgram amounts round to a whole number. */
export function formatMilligrams(amount: number): string {
  return String(Math.round(amount));
}

/** Calories round to the nearest 5, matching how printed labels read. */
export function formatCalories(amount: number): string {
  return String(Math.round(amount / 5) * 5);
}

/** Convenience for food cards: total calories for a given number of servings. */
export function caloriesFor(nutrition: NutritionFacts, servings = 1): number {
  return Math.round((nutrition.calories * servings) / 5) * 5;
}
