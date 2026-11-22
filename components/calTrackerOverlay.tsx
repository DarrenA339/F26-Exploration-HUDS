type CalTrackerOverlayProps = {
  name: string;
  imageSrc: string;
  calories: number;
  servings: number;
  tags: string[];
};

const meals = [
  { name: "Breakfast", total: 300, items: [{ name: "[Food name]", serving: "[Serving size]", cal: 0 }, { name: "[Food name]", serving: "[Serving size]", cal: 0 }] },
  { name: "Lunch", total: 150, items: [{ name: "[Food name]", serving: "[Serving size]", cal: 0 }] },
  { name: "Dinner", total: 0, items: [] },
];

const macros = [
  { name: "Protein", amount: "[00g]", pct: 55 },
  { name: "Carbs", amount: "[000g]", pct: 70 },
  { name: "Fat", amount: "[00g]", pct: 40 },
];

export default function CalorieTracker({ onClose }: { onClose?: () => void }) {
  return (
    <div className="w-[800px] rounded-3xl bg-white px-12 py-10">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold">Calorie Tracker</h2>
          <p className="mt-1 text-gray-500">[Location Name]</p>
        </div>
        <button onClick={onClose} className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-600 cursor-pointer hover:bg-gray-200">×</button>
      </div>

      {/* Date picker */}
      <div className="mt-8 flex items-center justify-between rounded-full border border-gray-300 p-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-gray-300">‹</div>
        <p className="font-bold">Today · Sun, Nov 8</p>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">›</div>
      </div>

      {/* Summary panel */}
      <div className="mt-8 rounded-2xl bg-[#F2EBEB] p-8">
        <p className="flex items-baseline gap-3">
          <span className="text-5xl font-bold text-[#9B2C35]">0</span>
          <span className="text-xl text-gray-500">/ [2,000] cal</span>
        </p>
        <div className="mt-6 h-4 rounded-full bg-white">
          <div className="h-4 w-[62%] rounded-full bg-[#9B2C35]" />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {macros.map((m) => (
            <div key={m.name}>
              <div className="flex justify-between text-sm">
                <span className="font-bold">{m.name}</span>
                <span className="text-gray-500">{m.amount}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white">
                <div className="h-2 rounded-full bg-[#9B2C35]" style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meals */}
      {meals.map((meal) => (
        <div key={meal.name} className="mt-10">
          <div className="flex justify-between border-b border-gray-200 pb-3">
            <h3 className="text-xl font-bold">{meal.name}</h3>
            <span className="text-gray-500">[{meal.total} cal]</span>
          </div>

          {meal.items.length === 0 ? (
            <div className="mt-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-4 text-gray-500">
              Nothing logged yet. Tap “Add to Calorie Tracker” on any dish.
            </div>
          ) : (
            meal.items.map((item, i) => (
              <div key={i} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
                <div className="flex-1">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.serving}</p>
                </div>
                {/* Quantity stepper */}
                <div className="flex items-center gap-4 rounded-full border border-gray-300 p-1.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">−</div>
                  <span>1</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">+</div>
                </div>
                <span className="ml-7 w-20 font-bold">[000] cal</span>
                <span className="ml-3 text-xl text-gray-400">×</span>
              </div>
            ))
          )}
        </div>
      ))}

      {/* Footer */}
      <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-8">
        <span className="font-bold text-[#9B2C35]">Clear day</span>
        <div className="rounded-full bg-[#9B2C35] px-9 py-4 font-bold text-white">Done</div>
      </div>
    </div>
  );
}