// one line of info
// label is  sometimes optional, but text is required

export type InfoRow = {
    label?: string;
    text: string;
};

export type HouseInfo = {
    name: string;
    imageSrc: string;
    hours: InfoRow[];
    location: InfoRow[];
    restrictions?: InfoRow[]; // Hillel & Fly-By don't have this
    goodToKnow: InfoRow[];  // Fly-By only has this
    email: string;
    phone: string;
};

export const houses: HouseInfo[] = [
  {
      name: "Adams",
      imageSrc: "/images/houses/adams.jpg",
      hours: [
          { label: "Continental Breakfast", text: "Mon–Sun, 7:30–10:30 a.m." },
          { label: "Lunch", text: "Mon–Fri, 11:30 a.m.–2:00 p.m." },
          { label: "Brunch", text: "Sat & Sun, 11:30 a.m.–2:00 p.m." },
          { label: "Dinner", text: "Daily, 5:00–7:30 p.m." },
          { label: "Brain Break", text: "Sun–Thu, starting at 9:00 p.m." },
      ],
      location: [
          { label: "Location", text: "Adams Dining Hall" },
          { label: "Address", text: "26 Plympton Street" },
      ],
      restrictions: [
          { text: "No interhouse (incl. Cronkhite) during House special events" },
          { label: "Breakfast & Brunch", text: "No restrictions; no first-years" },
          { label: "Lunch", text: "Pfoho students anytime (no guests); +1 with Adams resident; no first-years" },
          { label: "Dinner", text: "Open except Thursday (Adams only); no first-years" },
      ],
      email: "Ds_adams@calists.harvard.edu",
      phone: "617-495-5546",
      goodToKnow: []
  },
];