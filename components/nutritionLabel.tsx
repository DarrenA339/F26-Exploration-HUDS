import type { NutritionFacts } from "@/lib/types";
import {
  formatCalories,
  formatGrams,
  formatMilligrams,
  percentDV,
  scaleNutrition,
  type DailyValueNutrient,
} from "@/lib/nutrition";

type NutritionLabelProps = {
  /** Per-serving numbers, straight off a FoodItem. */
  nutrition: NutritionFacts;
  /** Human-readable serving, e.g. "1/4 cup (45g)". */
  servingSize: string;
  /** Multiplies every amount. Defaults to 1 (a standard per-serving label). */
  servings?: number;
};

type RowProps = {
  label: string;
  /** Pre-formatted amount with its unit, e.g. "13g". Omit for header-only rows. */
  amount?: string;
  /** Percent Daily Value. Omit when a nutrient has no established DV. */
  dv?: number;
  /** 0 = flush left (Total Fat), 1 = nested (Saturated Fat), 2 = double-nested. */
  indent?: 0 | 1 | 2;
  /** FDA bolds the parent nutrients and leaves the nested ones regular weight. */
  bold?: boolean;
  /** Trans fat is the one italicized word on the panel. */
  italicPrefix?: string;
};

const INDENT_CLASSES = ["pl-0", "pl-4", "pl-8"] as const;

function Row({
  label,
  amount,
  dv,
  indent = 0,
  bold = false,
  italicPrefix,
}: RowProps) {
  return (
    <div
      className={`flex justify-between border-t border-gray-400 py-0.5 ${INDENT_CLASSES[indent]}`}
    >
      <span>
        {italicPrefix ? <i>{italicPrefix} </i> : null}
        <span className={bold ? "font-bold" : undefined}>{label}</span>
        {amount ? ` ${amount}` : null}
      </span>
      {dv !== undefined ? <span className="font-bold">{dv}%</span> : null}
    </div>
  );
}

/**
 * An FDA-style Nutrition Facts panel rendered from data.
 *
 * Replaces the static riceNutrition.png: pass any FoodItem's `nutrition` and
 * the panel builds itself, including every % Daily Value.
 */
export default function NutritionLabel({
  nutrition,
  servingSize,
  servings = 1,
}: NutritionLabelProps) {
  const facts = scaleNutrition(nutrition, servings);

  // Tiny helper so each row below reads as one line.
  const dv = (nutrient: DailyValueNutrient) => percentDV(nutrient, facts[nutrient]);

  return (
    <section
      aria-label="Nutrition Facts"
      className="w-full max-w-xs bg-white text-black border-2 border-black px-2 py-1 text-sm leading-tight"
    >
      <h2 className="font-extrabold text-3xl tracking-tight">Nutrition Facts</h2>

      <div className="flex justify-between border-t border-black pt-0.5">
        <span className="font-bold">Serving size</span>
        <span className="font-bold">{servingSize}</span>
      </div>
      {servings !== 1 ? (
        <div className="text-xs text-gray-600">
          Showing {servings} servings
        </div>
      ) : null}

      <div className="h-2.5 bg-black my-1" />

      <div className="font-bold text-xs">Amount per serving</div>
      <div className="flex justify-between items-baseline border-b-4 border-black pb-0.5">
        <span className="font-extrabold text-3xl tracking-tight">Calories</span>
        <span className="font-extrabold text-4xl tracking-tight">
          {formatCalories(facts.calories)}
        </span>
      </div>

      <div className="text-right font-bold text-xs py-0.5">% Daily Value*</div>

      <Row label="Total Fat" amount={`${formatGrams(facts.totalFat)}g`} dv={dv("totalFat")} bold />
      <Row
        label="Saturated Fat"
        amount={`${formatGrams(facts.saturatedFat)}g`}
        dv={dv("saturatedFat")}
        indent={1}
      />
      <Row label="Fat" italicPrefix="Trans" amount={`${formatGrams(facts.transFat)}g`} indent={1} />
      <Row
        label="Cholesterol"
        amount={`${formatMilligrams(facts.cholesterol)}mg`}
        dv={dv("cholesterol")}
        bold
      />
      <Row label="Sodium" amount={`${formatMilligrams(facts.sodium)}mg`} dv={dv("sodium")} bold />
      <Row
        label="Total Carbohydrate"
        amount={`${formatGrams(facts.totalCarbohydrate)}g`}
        dv={dv("totalCarbohydrate")}
        bold
      />
      <Row
        label="Dietary Fiber"
        amount={`${formatGrams(facts.dietaryFiber)}g`}
        dv={dv("dietaryFiber")}
        indent={1}
      />
      <Row label="Total Sugars" amount={`${formatGrams(facts.totalSugars)}g`} indent={1} />
      <Row
        label={`Includes ${formatGrams(facts.addedSugars)}g Added Sugars`}
        dv={dv("addedSugars")}
        indent={2}
      />
      <Row label="Protein" amount={`${formatGrams(facts.protein)}g`} bold />

      <div className="h-2.5 bg-black my-1" />

      <Row label="Vitamin D" amount={`${formatMilligrams(facts.vitaminD)}mcg`} dv={dv("vitaminD")} />
      <Row label="Calcium" amount={`${formatMilligrams(facts.calcium)}mg`} dv={dv("calcium")} />
      <Row label="Iron" amount={`${formatMilligrams(facts.iron)}mg`} dv={dv("iron")} />
      <Row label="Potassium" amount={`${formatMilligrams(facts.potassium)}mg`} dv={dv("potassium")} />

      <div className="h-1 bg-black mt-1 mb-1.5" />

      <p className="text-[10px] leading-snug">
        * The % Daily Value tells you how much a nutrient in a serving of food
        contributes to a daily diet. 2000 calories a day is used for general
        nutrition advice.
      </p>
    </section>
  );
}
