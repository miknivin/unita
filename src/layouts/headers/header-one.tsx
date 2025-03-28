"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItems from "./menu-items";
import OffCanvas from "@/components/offcanvas/offcanvas";
import HeaderTop from "./header-top";
import HeaderTopTwo from "./header-top-two";
import { CartSvg } from "@/components/svg";

import Logo from "@/assets/img/logo/logo.png";

interface HeaderProps {
  hasTopBar?: boolean;
  hasTopBarTwo?: boolean;
  headerClass?: string;
}

const HeaderOne = ({ hasTopBar, hasTopBarTwo, headerClass }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);

  useEffect(() => {
    // Sticky Header is displayed after scrolling for 400 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />

      <header>
        {hasTopBar && <HeaderTop />}

        {hasTopBarTwo && <HeaderTopTwo />}

        <div
          className={
            isVisible
              ? `${
                  headerClass ? headerClass : "it-header-bottom-area"
                }  header-sticky`
              : `${headerClass ? headerClass : "it-header-bottom-area"}`
          }
        >
          <div className="container">
            <div className="it-header-bottom it-header-mob-space">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                  <div className="it-main-logo">
                    <Link href="/">
                      <Image src={Logo} alt="UNITAG" width={129} height={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                  <div className="it-main-menu text-center">
                    <nav className="it-menu-content">
                      <MenuItems />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                  <div className="it-header-bottom-right d-flex align-items-center justify-content-end">
                    <div className="it-header-bottom-right-shop d-none d-md-block">
                      <Link href="/cart">
                        <span>
                          <CartSvg />
                        </span>
                      </Link>
                    </div>
                    <div className="it-header-bottom-right-button ml-30">
                      <Link href="/contact" className="it-btn-primary">
                        Contact Us
                      </Link>
                    </div>
                    <div className="it-header-bar-wrap d-xl-none">
                      <button
                        className="it-header-bar it-menu-bar"
                        onClick={() => setIsOffCanvasOpen(true)}
                      >
                        <i className="fa-sharp fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderOne;
