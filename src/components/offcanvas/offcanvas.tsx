import Image from "next/image";
import Link from "next/link";
import MenuItems from "@/layouts/headers/menu-items";

import Logo from "@/assets/img/logo/logo.png";

// prop type
type IProps = {
  isOffCanvasOpen: boolean;
  setIsOffCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOnePage?: boolean;
  onePageStyle?: string;
};

const OffCanvas = ({ isOffCanvasOpen, setIsOffCanvasOpen }: IProps) => {
  return (
    <>
      <div className="it-offcanvas-area">
        <div className={isOffCanvasOpen ? "itoffcanvas opened" : "itoffcanvas"}>
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => setIsOffCanvasOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div
            style={{ width: "fit-content", borderRadius: "10px" }}
            className="itoffcanvas__logo bg-white"
          >
            <Link href="/">
              <Image src={Logo} alt="UNITAG" width={80} height={40} />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Bringing your vision to life with quality, efficiency and
              expertise.
            </p>
          </div>
          <div className="it-menu-mobile">
            <MenuItems isMobileMenu />
            <a
              href="/assets/img/docs/UNITAG.pdf"
              download
              className="it-btn-primary d-flex justify-content-center"
            >
              Download brochure
            </a>
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:info@unitagltd.com">info@unitagltd.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:+971544745424">+971 544745424</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:+237673742337">+237 673742337</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location- Bamenda</span>
                <a href="#">
                  P.O Box 5185 SONAC Street - BAMENDA, REPUBLIC OF CAMEROON{" "}
                </a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location- LIMBE</span>
                <a href="#">
                  SAKER Junction New Town - LIMBE. REPUBLIC OF CAMEROON{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOffCanvasOpen ? (
        <div
          className="body-overlay apply"
          onClick={() => setIsOffCanvasOpen(false)}
        ></div>
      ) : (
        <div className="body-overlay"></div>
      )}
    </>
  );
};
export default OffCanvas;
