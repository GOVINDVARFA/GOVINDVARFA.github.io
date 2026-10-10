export const profile = {
  name: "Govind Varfa",
  role: "Full-stack Developer",
  email: "govindvarfa.gv@gmail.com",
  company: "51DigitalMedia",
};
export type Category =
  "All work" | "SaaS platforms" | "Web applications" | "AI products";
export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All work">;
  description: string;
  tags: string[];
  features: string[];
  challenge: string;
};
export const projects: Project[] = [
  {
    id: "awaaz",
    title: "AI Awaaz",
    category: "AI products",
    description:
      "An AI audio platform bringing text-to-speech, voice cloning, and a voice marketplace into one creative workspace.",
    tags: ["React", "TypeScript", "Laravel", "AI APIs"],
    features: [
      "Text-to-speech and speech-to-text workflows",
      "Voice cloning, voice design, and a personal voice library",
      "Voice marketplace, billing, and administration",
      "API access for integrating voice tools",
    ],
    challenge:
      "Bring several AI audio capabilities into a consistent product experience, with separate creative tools, account management, and administration.",
  },
  {
    id: "petro",
    title: "PetroSathi",
    category: "SaaS platforms",
    description:
      "A petrol pump management platform connecting fuel operations, employee shifts, daily sales, and financial reporting.",
    tags: ["React", "Redux", "Laravel", "SQL"],
    features: [
      "Employee shift opening, closing, and sales history",
      "Fuel, tank, machine, and nozzle management",
      "Daily sales reports and deposit approvals",
      "Separate employee and administrator dashboards",
    ],
    challenge:
      "Make everyday petrol pump operations easier to follow, connecting employee activity with the reporting and approval tools managers need.",
  },
  {
    id: "local",
    title: "Find My Local",
    category: "Web applications",
    description:
      "A local business discovery platform with searchable listings, categories, customer reviews, and business profile management.",
    tags: ["React", "Redux", "Laravel", "REST APIs"],
    features: [
      "Business discovery through listing categories and location",
      "Business listing creation and profile management",
      "Customer reviews and listing enquiries",
      "Subscription and listing allowance workflows",
    ],
    challenge:
      "Connect visitors looking for local services with businesses that need a manageable, discoverable online presence.",
  },
  {
    id: "nfc",
    title: "NFC Digital Cards",
    category: "SaaS platforms",
    description:
      "A digital identity platform for shareable business profiles, physical NFC cards, QR codes, and configurable profile modules.",
    tags: ["React", "Laravel", "QR / NFC", "i18n"],
    features: [
      "Public profiles accessible through NFC and QR codes",
      "A profile editor with reusable content modules",
      "Physical card binding and account management",
      "Multilingual interfaces and profile visit tracking",
    ],
    challenge:
      "Connect a physical business card to a flexible digital profile that people can update, personalize, and share across languages.",
  },
  {
    id: "repair",
    title: "Repair Management",
    category: "SaaS platforms",
    description:
      "A device repair application with guided brand and model selection, customer accounts, and invoice workflows.",
    tags: ["React", "Laravel", "Tailwind CSS", "SQL"],
    features: [
      "Guided product, brand, model, and repair selection",
      "Customer registration and account management",
      "Repair detail and checkout workflows",
      "Downloadable invoices and packaging slips",
    ],
    challenge:
      "Turn a complex repair catalogue into a clear sequence of choices, while connecting the customer journey to service operations.",
  },
  {
    id: "newsletter",
    title: "Newsletter Studio",
    category: "Web applications",
    description:
      "A theatre newsletter workspace with reusable templates, brand settings, media tools, and newsletter previews.",
    tags: ["PHP", "Laravel", "JavaScript", "HTML / CSS"],
    features: [
      "Create, edit, and manage reusable newsletter templates",
      "Theatre-specific branding and content",
      "Media assets and social icon generation",
      "Newsletter previews and movie content selection",
    ],
    challenge:
      "Help teams assemble consistent, branded theatre newsletters with reusable layouts and a dedicated content workflow.",
  },
];
export const skillGroups = [
  {
    icon: "code",
    title: "Interfaces that feel right.",
    description:
      "Responsive layouts, reusable components, and the details that make a product easy to use.",
    items: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: "database",
    title: "Logic behind the experience.",
    description:
      "APIs, application logic, and structured data that connect the whole product.",
    items: ["Node.js", "PHP", "Laravel", "SQL", "REST APIs"],
  },
  {
    icon: "spark",
    title: "A little AI. A lot of possibility.",
    description:
      "AI agents and coding assistants as part of a hands-on development workflow.",
    items: ["AI agents", "Cursor", "Codex", "ChatGPT"],
  },
];
