import AboutFour from "@/components/about/about-four";
import AboutOne from "@/components/about/about-one";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ChooseSeven from "@/components/choose/choose-seven";
import Newsletter from "@/components/newsletter/newsletter";
import TestimonialFive from "@/components/testimonial/testimonial-five";
import TestimonialTwo from "@/components/testimonial/testimonial-two";
import TourFive from "@/components/tour/tour-five";
import VideoTwo from "@/components/video/video-two";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const AboutMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="About us" subtitle="About" />

        <AboutFour />

        <AboutOne />

        <ChooseSeven />
        {/* <VideoTwo />

        <TourFive /> */}

        {/* <TestimonialFive /> */}
        <TestimonialTwo />
        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default AboutMain;
