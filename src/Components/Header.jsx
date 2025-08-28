
const Header = () => {
    const navItems = ["Home", "About", "Service", "Blog", "Contact"];
  return (
    <>
      <div className="flex justify-between items-center px-14 py-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-red-500 border border-red-500 rounded-tr-lg rounded-bl-lg w-8 h-8 text-center">
            <span className="text-xl font-bold">S</span>
          </div>
          <p className="text-2xl font-semibold">Mag<span className="text-red-600">AR</span></p>
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
        <div>
          <button className="cursor-pointer border font-semibold border-red-500 bg-red-500 py-2 px-5 shadow-lg shadow-red-500/50 rounded-md hover:bg-transparent hover:text-red-500 transition-colors">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Header