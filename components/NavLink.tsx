import Link from "next/link";

interface NavLinkProp {
  item: {
    href: string;
    title: string;
  };
}

const NavLink = ({ item }: NavLinkProp) => {
  return (
    <Link
      href={item.href}
      className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl"
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
