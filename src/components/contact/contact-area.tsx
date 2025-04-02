import ContactForm from "../form/contact-form";
import { ClockSvgTwo, LocationSvgThree, PhoneSvgTwo } from "../svg";
import { MailBox } from "../svg/phone";

const ContactArea = () => {
  return (
    <div className="it-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="it-contact-form-box">
              <ContactForm />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="it-contact-right">
              <ul>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <ClockSvgTwo />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span>Hours:</span>
                      <a href="#" className="d-inline-flex flex-column">
                        <div className="d-flex flex-wrap">
                          {" "}
                          Monday - Friday:{" "}
                          <span className=" fw-normal"> 8 AM - 5:30 PM</span>
                        </div>
                        <div className="d-flex flex-wrap">
                          Saturday - Sunday:{" "}
                          <span className=" fw-normal"> Closed</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <PhoneSvgTwo />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span className="fw-bold">Call Us:</span>
                      <span className="d-flex align-items-center flex-wrap">
                        Cameroon :
                        <a href="tel:+237673742337"> (+237)673742337</a>
                      </span>
                      <span className="d-flex align-items-center flex-wrap">
                        UAE: <a href="tel:+971522896207">(+971)522896207</a>,
                        <a href="tel:+971544745424"> {"  "} (+971)544745424</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <MailBox />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span className="fw-bold">Email us:</span>
                      <span className="d-flex align-items-center flex-wrap">
                        <a href="mailto:info@unitagltd.com">
                          {" "}
                          info@unitagltd.com
                        </a>
                        <a href="mailto:unitagltd@unitagltd.com">
                          {" "}
                          unitagltd@unitagltd.com
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <LocationSvgThree />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span>Location:</span>
                      <div>
                        <span className="fw-bold text-decoration-none">
                          BAMENDA OFFICE:
                        </span>{" "}
                        <span className=" fw-normal">
                          P.O Box 5185 SONAC Street - BAMENDA, REPUBLIC OF
                          CAMEROON
                        </span>
                      </div>
                      <div>
                        <span className="fw-bold text-decoration-none">
                          LIMBE OFFICE :
                        </span>{" "}
                        <span className=" fw-normal">
                          SAKER Junction New Town - LIMBE. REPUBLIC OF CAMEROON
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
