import AboutFour from '@/components/about/about-four';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import ChooseSeven from '@/components/choose/choose-seven';
import Newsletter from '@/components/newsletter/newsletter';
import TestimonialFive from '@/components/testimonial/testimonial-five';
import TourFive from '@/components/tour/tour-five';
import VideoTwo from '@/components/video/video-two';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const AboutMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="ABout us" subtitle="About" />

        <AboutFour />

        <VideoTwo />

        <TourFive />

        <TestimonialFive />

        <ChooseSeven />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default AboutMain;
