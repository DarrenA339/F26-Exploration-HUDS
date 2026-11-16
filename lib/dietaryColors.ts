import type { DietaryLabel } from "./types";

/** The two colors every <DietaryTag /> needs. */
export type TagColors = { color: string; backgroundColor: string };

/**
 * The palette for <DietaryTag />, keyed by dietary label.
 *
 * Because this is a Record over the DietaryLabel union, TypeScript will error
 * if a new label is added to `lib/types.ts` without a color for it here.
 *
 * Usage:
 *   <DietaryTag label={label} {...dietaryTagColors(label)} />
 */
export const DIETARY_TAG_COLORS: Record<DietaryLabel, TagColors> = {
  Vegan: { color: "#166534", backgroundColor: "#E8F5EC" },
  Vegetarian: { color: "#166534", backgroundColor: "#E8F5EC" },
  "Gluten Free": { color: "#996000", backgroundColor: "#FFF3DF" },
  Halal: { color: "#2B4F86", backgroundColor: "#E8EFF9" },
  Kosher: { color: "#5B3A89", backgroundColor: "#F0EAF8" },
};

/**
 * Allergens all share one crimson chip — they're a warning, not a category,
 * so they intentionally don't get a per-allergen color.
 *
 * Usage:
 *   <DietaryTag label={allergen} {...ALLERGEN_TAG_COLORS} />
 */
export const ALLERGEN_TAG_COLORS: TagColors = {
  color: "#A51C30",
  backgroundColor: "#FEE2E2",
};

/** Fallback for any label that isn't in the map (e.g. data from a future API). */
export const DEFAULT_TAG_COLORS: TagColors = {
  color: "#374151",
  backgroundColor: "#F3F4F6",
};

const COLORS_BY_LOWERCASE_LABEL: Record<string, TagColors> = Object.fromEntries(
  Object.entries(DIETARY_TAG_COLORS).map(([label, colors]) => [
    label.toLowerCase(),
    colors,
  ])
);

/**
 * Colors for a dietary label, falling back to a neutral gray chip.
 * Matching ignores case, so "Gluten Free" and "gluten free" both work.
 */
export function dietaryTagColors(label: string): TagColors {
  return COLORS_BY_LOWERCASE_LABEL[label.toLowerCase()] ?? DEFAULT_TAG_COLORS;
}
