import type { TagColors } from "@/lib/dietaryColors";

type DietaryTagProps = TagColors & {
  label: string;
};

/**
 * A single pill-shaped tag. Used for dietary labels (Vegan, Halal, ...) and
 * for allergens — the only difference is the color pair passed in, which
 * lives in `lib/dietaryColors.ts`.
 *
 * Purely informational, so it renders a <span>, not a <button>.
 */
export default function DietaryTag({
  label,
  color,
  backgroundColor,
}: DietaryTagProps) {
  return (
    <span
      className="inline-block m-1 rounded-full px-4 py-1 font-serif font-bold text-base whitespace-nowrap"
      style={{ color, backgroundColor }}
    >
      {label}
    </span>
  );
}
