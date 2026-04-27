import {
  KeyRoundIcon,
  Laptop,
  Lock,
  LucideIcon,
  NotepadText,
  Shield,
} from "lucide-react";

export const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/login",
    title: "Login",
  },
];

export interface Feature {
  title: string;
  txt: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: "Feature One",
    txt: "Short description here",
    icon: Shield,
  },
  {
    title: "Feature Two",
    txt: "Short description here",
    icon: Lock,
  },
  {
    title: "Feature Three",
    txt: "Short description here",
    icon: Lock,
  },
  {
    title: "Feature Four",
    txt: "Short description here",
    icon: KeyRoundIcon,
  },
  {
    title: "Feature Five",
    txt: "Short description here",
    icon: Laptop,
  },
  {
    title: "Feature Six",
    txt: "Short description here",
    icon: NotepadText,
  },
];

export const SecurityItems = [
  {
    title: "Reliable Data Protection",
    icon: Lock,
  },
  {
    title: "Improved Compliance",
    icon: Shield,
  },
  {
    title: "Permission Control",
    icon: KeyRoundIcon,
  },
];
