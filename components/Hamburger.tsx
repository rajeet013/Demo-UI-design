import { Menu } from "lucide-react";

export default function Hamburger() {
  return (
    <div className="md:hidden">
      <button>
        <Menu />
      </button>
    </div>
  );
}
