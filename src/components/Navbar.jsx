import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-end gap-10 text-lg  ">
        <Link className=" hover:text-emerald-500  " to="/">
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
