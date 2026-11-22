import Image from "next/image";
import CalTrackerButton from "@/components/calTrackerButton";


export default function Header() {
  return (
    <header className="flex items-center justify-between border h-20">
      {/* LEFT: Harvard logo */}
      <p>harvard</p>
      <div>
        {/* Add Harvard logo using next/image */}
        <p>logo</p>
      </div>

      {/* RIGHT: Navigation controls */}
      <div>
        {/* Implement Login button */}
        <button className="border w-20 h-10">login</button>

        {/* Implement Dining hall dropdown */}
        <button className="border w-20 h-10">dhalls</button>

        {/* Implement Date dropdown */}
        <button className="border w-20 h-10">date</button>

        {/* Implement Calorie tracker button */}
        <button className="border w-50 h-10">enter calorie tracker</button>

      </div>
    </header>
  );
}