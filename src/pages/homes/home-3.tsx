import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

import Logo from '@/assets/img/logo/logo-green.png';
import HeroBannerThree from '@/components/hero-banner/hero-banner-three';
import TourPackageBox from '@/components/tour-package/tour-package-box';
import DestinationThree from '@/components/destination/destination-three';
import AboutThree from '@/components/about/about-three';
import TourThree from '@/components/tour/tour-three';
import TestimonialThree from '@/components/testimonial/testimonial-three';
import DestinationFour from '@/components/destination/destination-four';
import VideoOne from '@/components/video/video-one';
import FunFactOne from '@/components/funfact/funfact-one';
import OfferOne from '@/components/offer/offer-one';
import BlogTwo from '@/components/blog/blog-two';
import ChooseThree from '@/components/choose/choose-three';

const HomeThreeMain = () => {
  return (
    <Wrapper>
      <HeaderTwo headerLogo={Logo} />

      <main>
        <HeroBannerThree />

        <TourPackageBox />

        <DestinationThree />

        <AboutThree />

        <TourThree />

        <TestimonialThree />

        <DestinationFour />

        <VideoOne btnClass="it-btn-primary it-white-bg" />

        <FunFactOne />

        <ChooseThree />

        <OfferOne />

        <BlogTwo />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default HomeThreeMain;
