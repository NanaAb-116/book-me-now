import { SVGProps, useState } from "react";
import logo from "../assets/BUUK FULL LOGO MAIN HORIZONTAL 1.png";
import { FaBars } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DashboardIcon from "../assets/icons/DashboardIcon";
import BookingsIcon from "../assets/icons/BookingsIcon";
import CustomersIcon from "../assets/icons/CustomersIcon";
import ServicesIcon from "../assets/icons/ServicesIcon";

type Navtype = {
  name: string;
  path: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const navItems: Navtype[] = [
  { name: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { name: "Bookings", icon: BookingsIcon, path: "/bookings" },
  { name: "Customers", icon: CustomersIcon, path: "/customers" },
  { name: "Services", icon: ServicesIcon, path: "/services" },
];

const Navbar = () => {
  const [path, setPath] = useState("/customers");

  return (
    <nav className="border-b-[1px] border-b-[#E5E5E4] w-screen px-2">
      <div className="h-24 mx-auto sm:max-w-[1200px] flex justify-between items-center">
        <img src={logo} alt="logo" className="cursor-pointer" />
        <div className="hidden  lg:block">
          <ul className="flex space-x-2">
            {navItems.map((item) => {
              return (
                <li key={item.name} onClick={() => setPath(item.path)}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 cursor-pointer rounded-full py-3 px-5 ${
                      path === item.path
                        ? "bg-[#F3F4F6] text-[#00100B]"
                        : "text-[#808785]"
                    }`}
                  >
                    <item.icon className="text-2xl" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center space-x-5">
          <div className="border-[1px] border-[#E5E5E4] rounded-md items-center gap-[1rem] px-5 py-1 cursor-pointer hidden sm:flex">
            <div>
              <p className="font-[500] text-[#404040] text-sm">
                Buukmenow Demo
              </p>
              <p className="font-light text-[#A6A6A5] text-sm">
                Buukmenow@gmail.com
              </p>
            </div>
            <RiArrowDownSLine />
          </div>
          <span className="cursor-pointer lg:hidden">
            <FaBars className="text-3xl" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
