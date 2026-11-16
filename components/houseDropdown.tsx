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
    <div className="flex flex-col items-center gap-2">
      {/* TOP: House crest */}
      <div>
        {/* Display house image here */}
        <Image
          src={imageSrc}
          alt={`${houseName} crest`}
          width={100}
          height={100}
        />
      </div>

      {/* BOTTOM: House name and dropdown arrow */}
      <div className="flex items-center gap-1">
        <p className="font-semibold">{houseName}</p>
        <span className="text-xs text-gray-500">▼</span>
      </div>
    </div>
  );
}