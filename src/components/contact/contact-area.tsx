import ContactForm from "../form/contact-form";
import { ClockSvgTwo, LocationSvgThree, PhoneSvgTwo } from "../svg";

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
                      <a href="#">
                        Monday - Friday: 8 AM - 5:30 PM <br />
                        Saturday - Sunday: Closed
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
                      <span>Call Us:</span>
                      <span className="d-flex align-items-center">
                        Cameroon :
                        <a href="tel:+237673742337"> (+237)673742337</a>
                      </span>
                      <span className="d-flex align-items-center">
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
