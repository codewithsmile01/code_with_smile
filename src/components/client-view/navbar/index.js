"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
// import { Menu, MenuItem } from "@/ui/navbar-menu";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "projects",
  },
  // {
  //   id: "contact",
  //   label: "Contact",
  // },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${
      activeLink === item.id
        ? "text-green-main animation-active shadow-green-main"
        : "text-[#000] font-bold hover:text-green-main"
    }
    `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar(className) {
  const [active, setActive] = useState(null);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="col-start-1 col-end-2 flex items-center justify-center">
            <div className="cursor-pointer flex gap-2 font-semibold items-center text-[18px] text-green-main">
              <div className="w-[70px] h-[30px] flex justify-center items-center p-3 rounded-[8px] border-green-main bg-green-main">
                <span className="text-[#fff] text-[25px] font-bold">code</span>
              </div>
              with smile
            </div>
          </div>
          <CreateMenus
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            getMenuItems={menuItems}
          />
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="px-2 border-[2px] bg-[#fff] border-green-main text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none"
            >
              Contact Me
            </button>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
