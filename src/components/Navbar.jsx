import './Navbar.css'

function Navbar () {

    return (
        <nav className="navbar-content">

            <div class="absolute items-center left-0 right-0 text-center ml-auto mr-auto top-4 font-parisienne text-4xl ">
                <a href="# " class="text-white tracking-widest">L'Arte Del Gusto</a>
            </div>
            
            <div className="Options" class="flex [&>a]:px-4 [&>a]:py-1 z-10 [&>a]:font-montserrat">
                <a href="# " className="btn-primary">About</a>
                <a href="# " className="btn-primary">Menu</a>
                <a href="# " className="btn-primary">Account</a>
            </div>

        </nav>

    );

}

export default Navbar;