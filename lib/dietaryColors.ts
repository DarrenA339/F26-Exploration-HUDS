import type { DietaryLabel } from "./types";

/**
 * The palette for <DietaryTag />, keyed by dietary label.
 *
 * Because this is a Record over the DietaryLabel union, TypeScript will error
 * if a new label is added to `lib/types.ts` without a color for it here.
 *
 * Usage:
 *   <DietaryTag label={label} {...DIETARY_TAG_COLORS[label]} />
 */
export const DIETARY_TAG_COLORS: Record<
  DietaryLabel,
  { color: string; backgroundColor: string }
> = {
  Vegan: { color: "#166534", backgroundColor: "#E8F5EC" },
  Vegetarian: { color: "#166534", backgroundColor: "#E8F5EC" },
  "Gluten Free": { color: "#996000", backgroundColor: "#FFF3DF" },
  Halal: { color: "#2B4F86", backgroundColor: "#E8EFF9" },
  Kosher: { color: "#5B3A89", backgroundColor: "#F0EAF8" },
};

/** Fallback for any label that isn't in the map (e.g. data from a future API). */
export const DEFAULT_TAG_COLORS = {
  color: "#374151",
  backgroundColor: "#F3F4F6",
};
