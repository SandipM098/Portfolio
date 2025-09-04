import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const Header = () => {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Service", id: "service" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="bg-red-500 border border-red-500 rounded-tr-lg rounded-bl-lg w-8 h-8 text-center">
          <span className="text-xl font-bold">S</span>
        </div>
        <p className="text-2xl font-semibold">
          Mag<span className="text-red-600">AR</span>
        </p>
      </div>
      <div>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <span
                className="hover:text-red-500 transition-colors cursor-pointer"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <ThemeToggle />
        <Button Name={"Hire Me"} />
      </div>
    </div>
  );
};

export default Header;
