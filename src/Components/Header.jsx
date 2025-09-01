import ThemeToggle from "./ThemeToggle";
const Header = () => {
    const navItems = ["Home", "About", "Service", "Blog", "Contact"];
  return (
    <>
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
              <li key={item}>
                <span className="hover:text-red-500 transition-colors cursor-pointer">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-10">
          <ThemeToggle />
          <button className="cursor-pointer border font-semibold bg-red-500 py-2 px-5 shadow-md shadow-red-300 rounded-md hover:bg-transparent hover:text-red-500 transition-colors hover:border">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Header