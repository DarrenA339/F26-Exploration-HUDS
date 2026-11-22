import HouseDropdown from "@/components/houseDropdown";
import { houses } from "@/data/houses";

export default function Home() {
  return (
    <main className="p-8">
      <HouseDropdown house={houses[0]} />
    </main>
  );
}