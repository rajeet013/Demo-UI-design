import { Menu, X } from "lucide-react";

export default function Hamburger({ isOpen, toggle }) { // Use 'toggle' here
  return (
    <div className="md:hidden">
      <button onClick={toggle} className="p-2 hover:cursor-pointer">
        {isOpen ? <X size={24} /> : <Menu size={24}/>}
      </button>
    </div>
  );
}