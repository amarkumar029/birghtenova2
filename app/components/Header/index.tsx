"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const pathname = usePathname();

  return (
    <section>
      <div className="container hidden lg:block">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="max-w-full px-4">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-2"
              } `}
            >
              <Image
                src="/logo/logo.png"
                alt="logo"
                width={160}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/logo/logo.png"
                alt="logo"
                width={140}
                height={30}
                className="hidden dark:block"
              />
            </Link>
          </div>
          <div className="flex md:w-2/3 items-center justify-between text-center px-4">
            <Link
              href="/franchise-preschool"
              className={`w-full rounded-md font-semibold bg-[#283148] text-white ${
                sticky ? "py-5 lg:py-2" : "p-3 mr-2"
              } `}
            >
              Franchise-Preschool
            </Link>
            <Link
              href="/franchise-k12"
              className={`w-full rounded-md font-semibold bg-[#283148] text-white ${
                sticky ? "py-5 lg:py-2" : "p-3 mr-2"
              } `}
            >
              Franchise-K12
            </Link>
            <Link
              href="/school-transformation"
              className={`w-full rounded-md font-semibold bg-[#283148] text-white ${
                sticky ? "py-5 lg:py-2" : "p-3"
              } `}
            >
              School Transformation
            </Link>
          </div>
        </div>
      </div>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center lg:bg-[#283148] ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "relative"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-center">
            <div className="w-70 max-w-full px-4 lg:hidden">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-2 lg:py-2" : "py-2"
                } `}
              >
                <Image
                  src="/logo/logo.png"
                  alt="logo"
                  width={160}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-center px-4">
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
                  className={`navbar absolute right-0 z-30 w-[250px] h-[400px] overflow-y-scroll rounded border-[.5px] border-body-color/50 bg-white px-2 py-2 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:h-auto lg:overflow-visible lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path || "/"}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-2 lg:text-white ${
                              pathname === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-2"
                            >
                              {menuItem.title}
                              <span>
                                <svg width="15" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path || "/"}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                    <li className="block lg:hidden">
                      <Link
                        href="/franchise-preschool"
                        className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                      >
                        Franchise-Preschool
                      </Link>
                      <Link
                        href="/franchise-k12"
                        className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                      >
                        Franchise-K12
                      </Link>
                      <Link
                        href="/school-transformation"
                        className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                      >
                        School Transformation
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;