type MealButtonProps = {
  label: string;
  isActive: boolean;
};

export default function MealButton({
  label,
  isActive,
}: MealButtonProps) {
  return (
    <div className='inline-block m-2'>
      <button className = {`${isActive ? 'border border-[#9B2335] bg-[#9B2335] text-white' : 'border border-gray-300 bg-white text-black' } rounded-full px-8 py-3 min-w-52 font-serif text-lg whitespace-nowrap`}>{label}</button>
      {/* Implement Button with conditional rendering */}
    </div>
  );
}