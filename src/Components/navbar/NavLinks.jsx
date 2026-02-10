export default function NavLinks() {
  const links = [{ name: "Home" }, { name: "About" }, { name: "Dashboard" }];

  return (
    <ul className="flex gap-8  p-2 ">
      {links.map((link) => (
        <li
          className="text-xl
            cursor-pointer 
            transition-all duration-150

          
            hover:scale-[1.06]"
          key={link.name}
        >
          {link.name}
        </li>
      ))}
    </ul>
  );
}
