import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-end gap-7 text-lg md:mr-10 mb-10 border-b border-gray-300 pb-2">
        <Link className=" hover:text-emerald-500" to="/">
          Home
        </Link>
        <Link className="hover:text-emerald-500" to="/about">
          About
        </Link>
      </div>
    </>
  );
};

export default Navbar;
