import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-end gap-7 text-lg md:mr-10 mb-10 border-b border-gray-300 pb-2 leading-snug">
      <Link
        to="/"
        className={`hover:text-emerald-500 ${
          location.pathname === "/" ? "text-emerald-600 font-bold" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`hover:text-emerald-500 ${
          location.pathname === "/about" ? "text-emerald-600 font-bold" : ""
        }`}
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;
