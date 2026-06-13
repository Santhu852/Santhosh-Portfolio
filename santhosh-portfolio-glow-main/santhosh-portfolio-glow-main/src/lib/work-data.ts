import workL1 from "@/assets/work-l1.jpg";
import workL2 from "@/assets/work-l2.jpg";
import workL3 from "@/assets/work-l3.jpg";
import workL4 from "@/assets/work-l4.jpg";
import workL5 from "@/assets/work-l5.jpg";
import workL6 from "@/assets/work-l6.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import reel5 from "@/assets/reel-5.jpg";
import reel6 from "@/assets/reel-6.jpg";

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  thumb: string;
};

export const longForm: Project[] = [
  { id: "lumen", title: "Lumen — Brand Film", client: "Lumen Co.", category: "Commercial", year: "2025", thumb: workL1 },
  { id: "vault", title: "The Vault Sessions", client: "Independent", category: "Documentary", year: "2024", thumb: workL2 },
  { id: "atlas", title: "Atlas Pro Launch", client: "Atlas Tech", category: "Product Launch", year: "2025", thumb: workL3 },
  { id: "echoes", title: "Echoes — Music Video", client: "Vega Records", category: "Music Video", year: "2024", thumb: workL4 },
  { id: "coastline", title: "Coastline Diaries", client: "Wanderlust Films", category: "Travel Film", year: "2023", thumb: workL5 },
  { id: "kinetic", title: "Kinetic — Sports Cut", client: "Sprintwear", category: "Sports", year: "2025", thumb: workL6 },
];

export const reels: Project[] = [
  { id: "neon", title: "Neon Beauty", client: "Velvet Studio", category: "Reel", year: "2025", thumb: reel1 },
  { id: "macro", title: "Macro Cravings", client: "Tasted", category: "Reel", year: "2024", thumb: reel2 },
  { id: "tokyo", title: "Tokyo Nights", client: "Drift Mag", category: "Reel", year: "2024", thumb: reel3 },
  { id: "kinetic-type", title: "Liquid Type", client: "Personal", category: "Motion", year: "2025", thumb: reel4 },
  { id: "sole", title: "Sole / 360", client: "Stride", category: "Product Reel", year: "2025", thumb: reel5 },
  { id: "motion-dance", title: "In Motion", client: "Arc Dance", category: "Reel", year: "2024", thumb: reel6 },
];
