"use client";

import { useState } from "react";
import Link from "next/link";

interface IProps {
  isMobileMenu?: boolean;
}

const MenuItems = ({ isMobileMenu }: IProps) => {
  const [home, setHome] = useState<boolean>(false);
  const [tour, setTour] = useState<boolean>(false);
  const [destination, setDestination] = useState<boolean>(false);
  const [page, setPage] = useState<boolean>(false);
  const [blog, setBlog] = useState<boolean>(false);

  const openMobileMenu = (
    menu: "home" | "tour" | "destination" | "page" | "blog"
  ): void => {
    if (menu === "home") {
      setHome(!home);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "tour") {
      setHome(false);
      setTour(!tour);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "destination") {
      setHome(false);
      setTour(false);
      setDestination(!destination);
      setPage(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === "blog") {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isMobileMenu === true) {
      e.preventDefault();
    }
  };

  return (
    <ul>
      <li className="p-static">
        <Link href="/">
          Home
          {/* <button
            className={`${
              home
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none `}
            onClick={() => {
              openMobileMenu('home');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button> */}
        </Link>
        {/* <ul
          className={home ? "it-submenu submenu d-block" : "it-submenu submenu"}
        >
          <li>
            <Link href="/">Home 01</Link>
            <Link href="/home-2">Home 02</Link>
            <Link href="/home-3">Home 03</Link>
            <Link href="/home-4">Home 04</Link>
            <Link href="/home-5">Home 05</Link>
          </li>
        </ul> */}
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li className="has-dropdown">
        <Link href="/tour" onClick={handleClick}>
          Services
          <button
            className={`${
              tour
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none `}
            onClick={() => {
              openMobileMenu("tour");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={tour ? "it-submenu submenu d-block" : "it-submenu submenu"}
        >
          <li>
            <Link href="/tour">Travel & Tour</Link>
            <Link href="/tour-details/1">Flight ticketing</Link>
            <Link href="/booking-page">Recruitment & HR solutions</Link>
            <Link href="/booking-checkout">General Contractor</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MenuItems;
