import { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar-content">
      <div class="absolute items-center left-0 right-0 text-center ml-auto mr-auto top-4 font-playfair text-3xl ">
        <a href="# " class="text-white tracking-widest">
          L'Arte Del Gusto
        </a>
      </div>

      <div
        className="Options"
        class="flex [&>a]:px-4 [&>a]:py-1 z-10 [&>a]:font-montserrat"
      >
        <a href="# " className="btn-primary">
          About
        </a>
        <a href="# " className="btn-primary">
          Menu
        </a>
        <a href="# " className="btn-primary">
          Account
        </a>

        <div className="mobile-menu">
          {!menu ? (
            <BiMenuAltRight
              class="cursor-pointer"
              onClick={handleMenu}
              size={"2rem"}
              color="#fff"
            />
          ) : (
            <MdOutlineClose
              class="cursor-pointer"
              onClick={handleMenu}
              size={"2rem"}
              color="#fff"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
