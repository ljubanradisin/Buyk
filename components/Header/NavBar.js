import { navigationItems } from '../../const/navbarList';
import {Link, Typography} from "@mui/material"

const NavBar = ({ classes }) => {
    return (
        <div className="flex flex-row bg-buyk-green">
            <Link
                href="\home"
                className="order-1 flex py-1 px-8 h-[100%] hover:bg-buyk-green-light text-white transition no-underline font-sans font-semibold"
            >
                Home
            </Link>
            <Link
                href="\products"
                className="order-2 flex py-1 px-8 h-[100%] hover:bg-buyk-green-light text-white transition no-underline font-sans font-semibold"
            >
                Products
            </Link>
            <Link
                href="\aboutus"
                className="order-3 flex py-1 px-8 h-[100%] hover:bg-buyk-green-light text-white transition no-underline font-sans font-semibold"
            >
                About us
            </Link>
            <Link
                href="\blog"
                className="order-4 flex py-1 px-8 h-[100%] hover:bg-buyk-green-light text-white transition no-underline font-sans font-semibold"
            >
                Blog
            </Link>
            <Link
                href="\contactus"
                className="order-5 flex py-1 px-8 h-[100%] hover:bg-buyk-green-light text-white transition no-underline font-sans font-semibold"
            >
                Contact us
            </Link>
        </div>
    );
};

export default NavBar;