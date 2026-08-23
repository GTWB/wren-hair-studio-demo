// Central content for Wren Hair Studio (demo site — no real business).
// Keeping copy here makes it easy to reuse across pages consistently.

export const salon = {
  name: "Wren Hair Studio",
  short: "Wren",
  tagline: "Cut and colour, considered.",
  area: "Clapham, London",
  addressLine1: "14 Abbeville Road",
  addressLine2: "Clapham, London SW4 9NG",
  phone: "020 7946 0851",
  phoneHref: "tel:+442079460851",
  email: "hello@wrenhairstudio.co.uk",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  hours: [
    { day: "Tuesday – Friday", time: "9:30am – 7:00pm" },
    { day: "Saturday", time: "9:00am – 5:30pm" },
    { day: "Sunday – Monday", time: "Closed" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Booking", href: "/booking/" },
  { label: "Contact", href: "/contact/" },
];

export const serviceCategories = [
  {
    key: "cut",
    label: "Cut & Finish",
    swatch: "#a9713c",
    intro:
      "Precision cutting built around how your hair actually falls, not a one-size template.",
    services: [
      {
        name: "Signature Cut",
        desc: "Consultation, wash, precision cut and finish with a senior stylist.",
        price: "£68",
      },
      {
        name: "Cut with Director",
        desc: "The same signature service with our creative director, Marcus.",
        price: "£92",
      },
      {
        name: "Restyle Consultation",
        desc: "A dedicated 20-minute sit-down to plan a bigger change, no cutting on the day.",
        price: "£15",
      },
      {
        name: "Dry Trim",
        desc: "A quick shape-up between cuts — no wash, no finish.",
        price: "£28",
      },
      {
        name: "Men's Cut",
        desc: "Scissor or clipper cut, wash and style included.",
        price: "£45",
      },
    ],
  },
  {
    key: "colour",
    label: "Colour",
    swatch: "#a6532e",
    intro:
      "Colour is mixed on the day for your hair, not pulled from a pre-set chart.",
    services: [
      {
        name: "Root Tint",
        desc: "Single all-over colour to the root line, blended through with a gloss.",
        price: "from £72",
      },
      {
        name: "Full Head Colour",
        desc: "All-over colour from root to end — ideal for a full tonal change.",
        price: "from £96",
      },
      {
        name: "Balayage",
        desc: "Hand-painted, low-maintenance lift with a soft, natural grow-out.",
        price: "from £145",
      },
      {
        name: "Foil Highlights (Full)",
        desc: "Traditional foiled highlights for maximum brightness and contrast.",
        price: "from £128",
      },
      {
        name: "Foil Highlights (Half)",
        desc: "Foils through the top and crown only — a lighter lift.",
        price: "from £88",
      },
      {
        name: "Fashion Colour / Correction",
        desc: "Bold or corrective work quoted after a free in-person consultation.",
        price: "on consultation",
      },
    ],
  },
  {
    key: "treatment",
    label: "Treatments",
    swatch: "#3b2c22",
    intro:
      "Add-ons that repair, calm or finish a service — also bookable on their own.",
    services: [
      {
        name: "Bond Repair Treatment",
        desc: "Strengthening treatment for coloured or chemically treated hair.",
        price: "£35",
      },
      {
        name: "Deep Conditioning Ritual",
        desc: "15-minute scalp massage and mask, steamed through.",
        price: "£28",
      },
      {
        name: "Blow-dry & Style",
        desc: "Wash, blow-dry and finish — no cut or colour.",
        price: "£38",
      },
      {
        name: "Special Occasion Styling",
        desc: "Up-style or event finish, consultation recommended beforehand.",
        price: "from £58",
      },
    ],
  },
];

export const team = [
  {
    name: "Marcus Adeyemi",
    role: "Creative Director & Founder",
    bio: "Trained in Soho before opening Wren in 2017, Marcus still cuts three days a week. He's known for restyles that grow out well — cuts built to be low-maintenance between visits.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=750&q=80",
    alt: "Marcus, a male hairdresser, smiling in a portrait shot",
  },
  {
    name: "Sofia Marchetti",
    role: "Senior Colourist",
    bio: "Sofia leads on colour — from subtle root work to full balayage transformations. She trained in Milan and mixes every formula by eye rather than a fixed recipe.",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=600&h=750&q=80",
    alt: "Sofia, a colourist with red hair, smiling in a portrait shot",
  },
  {
    name: "Priya Chandra",
    role: "Stylist",
    bio: "Priya joined Wren in 2021 after five years in East London. Clients book her for precise cutting and for calm, unrushed consultations before any big change.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=750&q=80",
    alt: "Priya, a female hairdresser with dark hair tied back, smiling in a portrait shot",
  },
];

export const testimonials = [
  {
    quote:
      "Marcus somehow talked me out of the chop I thought I wanted and gave me a cut that's actually easy to manage. Two years on and I still haven't gone anywhere else.",
    author: "Hannah R.",
    context: "Clapham resident, client since 2023",
  },
  {
    quote:
      "Sofia matched my colour to a photo I'd been too nervous to show anyone else. It grew out beautifully — no harsh line after eight weeks.",
    author: "Diane O.",
    context: "Balayage client",
  },
  {
    quote:
      "Booked a same-week appointment, in and out in under an hour with a proper wash and finish. Small studio, but it never feels rushed.",
    author: "Tom K.",
    context: "Signature Cut client",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "Row of empty styling chairs at Wren Hair Studio",
    swatch: "#8b8a80",
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "Close-up of a precise wet finish during a men's cut",
    swatch: "#3b2c22",
  },
  {
    src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "Detail of a leather styling chair at the studio",
    swatch: "#6b5a34",
  },
  {
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "Finishing curls into freshly coloured hair",
    swatch: "#a9713c",
  },
  {
    src: "https://images.unsplash.com/photo-1522336284037-91f7da073525?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "Combs and grips laid out at a styling station",
    swatch: "#8b8a80",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "Styling brushes and tools at the colour bar",
    swatch: "#3b2c22",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "A stylist finishing a men's cut with a blow-dryer",
    swatch: "#6b5a34",
  },
  {
    src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "Finished copper balayage colour result, close-up",
    swatch: "#a6532e",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&h=1100&q=80",
    alt: "Close-up of a blow-dry in progress",
    swatch: "#a9713c",
  },
];
