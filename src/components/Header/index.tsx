import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "./menuData";
// import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    const heroHeight = document.getElementById("home").offsetHeight;
    const scrollPosition = window.scrollY;
    const triggerOffset = heroHeight * 0.0001;

    if (scrollPosition >= triggerOffset) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const usePathName = usePathname();

  const scrollWithOffset = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    let offset = 0;

    if (event.target.textContent.toLowerCase() !== "contact") {
      offset = 79;
    }

    const targetOffset =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-black !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
      style={{
        height: "80px",
        backgroundColor: sticky ? "rgba(0, 191, 255, 0.7)" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container">
        <div className="relative mx-10 flex items-center justify-between">
          <div className="w-25 max-w-full px-4 xl:mr-12">
            <Link
              style={{ marginLeft: "10px" }} // Add margin-left to create space
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              } `}
            >
              <Image
                src="/images/logowhite.png" // Adjusted image path
                alt="logo"
                width="80"
                height="10"
                className="w-full h-auto"
              />
            </Link>
          </div>
          <div className="">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
                style={{
                  top: sticky ? "100%" : "120%",
                }}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "text-primary text-white"
                              : "text-dark hover:text-primary text-white/70 hover:text-white"
                          }`}
                          onClick={scrollWithOffset}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <></>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* <div className="flex items-center justify-end pr-16 lg:pr-0">
              <ThemeToggler />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
