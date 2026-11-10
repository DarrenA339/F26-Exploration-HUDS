import Image from "next/image";

type HouseDropdownProps = {
  houseName: string;
  imageSrc: string;
};

export default function HouseDropdown({
  houseName,
  imageSrc,
}: HouseDropdownProps) {
  return (
    <div>
      {/* TOP: House crest */}
      <div>
        {/* Display house image here */}
      </div>

      {/* BOTTOM: House name and dropdown arrow */}
    </div>
  );
}