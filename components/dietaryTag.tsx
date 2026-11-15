type DietaryTagProps = {
  label: string;
  color: string;
  backgroundColor: string;
};

export default function DietaryTag({
  label,
  color,
  backgroundColor,
}: DietaryTagProps) {
  return (
    <div className ="inline-block m-1">
      <button className = "rounded-full px-4 py-1 font-serif font-bold text-base whitespace-nowwrap"
      style={{color: color, backgroundColor: backgroundColor}}>{label}</button>
      {/* Implement tag */}
    </div>
  );
}