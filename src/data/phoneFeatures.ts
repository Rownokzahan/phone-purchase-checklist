import type { FeatureCategoryType } from "../types";

export const phoneFeatures: FeatureCategoryType[] = [
  {
    id: "variant",
    title: "Variant",
    items: [
      {
        id: "variant-1",
        label:
          "Global / Indian",
      },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    items: [
      {
        id: "performance-1",
        label:
          "Modern midrange or better processor (Snapdragon 6xx/7xx/8xx, MediaTek Dimensity 700+)",
      },
      { id: "performance-2", label: "6–8 GB RAM or more" },
      { id: "performance-3", label: "128 GB storage or higher" },
    ],
  },
  {
    id: "display",
    title: "Display",
    items: [
      { id: "display-1", label: "AMOLED / OLED" },
      { id: "display-2", label: "Full HD+ or higher" },
      { id: "display-3", label: "90–144 Hz refresh rate" },
    ],
  },
  {
    id: "battery",
    title: "Battery",
    items: [
      { id: "battery-1", label: "≥5000 mAh" },
      { id: "battery-2", label: "Fast charging ≥25 W" },
      { id: "battery-3", label: "Safe, non-swollen battery" },
    ],
  },
  {
    id: "cameras",
    title: "Cameras",
    items: [
      { id: "cameras-1", label: "Main camera with OIS/EIS" },
      { id: "cameras-2", label: "Good low-light performance" },
      { id: "cameras-3", label: "Optional: ultra-wide/telephoto" },
      { id: "cameras-4", label: "Adequate front camera" },
    ],
  },
  {
    id: "build",
    title: "Build & Durability",
    items: [
      {
        id: "build-1",
        label: "Metal, Gorilla Glass, or reinforced plastic frame",
      },
      { id: "build-2", label: "IP rating for water/dust resistance" },
      { id: "build-3", label: "Solid physical buttons" },
      { id: "build-4", label: "Better if does not have curved display" },
    ],
  },
  {
    id: "connectivity",
    title: "Connectivity",
    items: [
      { id: "connectivity-1", label: "5G support" },
      { id: "connectivity-2", label: "NFC if needed" },
      { id: "connectivity-3", label: "Wi-Fi 6/6E preferred" },
      { id: "connectivity-4", label: "Dual SIM if needed" },
    ],
  },
  {
    id: "software",
    title: "Software & Support",
    items: [
      { id: "software-1", label: "Latest OS version or upgradable" },
      { id: "software-2", label: "Security updates for 2–3 years" },
    ],
  },
  {
    id: "accessories",
    title: "Accessories & Protection",
    items: [
      { id: "accessories-1", label: "Durable case (shockproof)" },
      { id: "accessories-2", label: "Tempered glass screen protector" },
      { id: "accessories-3", label: "Original charger & cable" },
    ],
  },
  {
    id: "budget",
    title: "Budget & Availability",
    items: [
      { id: "budget-1", label: "Within ~BDT 25–30k" },
      { id: "budget-2", label: "Local availability & warranty" },
    ],
  },
];
