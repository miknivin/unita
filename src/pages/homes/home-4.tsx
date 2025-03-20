import BlogOne from '@/components/blog/blog-one';
import CategoryOne from '@/components/category/category-one';
import ChooseFive from '@/components/choose/choose-five';
import ChooseFour from '@/components/choose/choose-four';
import CoverageOne from '@/components/coverage/coverage-one';
import DestinationFive from '@/components/destination/destination-five';
import FunFactThree from '@/components/funfact/funfact-three';
import HeroBannerFour from '@/components/hero-banner/hero-banner-four';
import Newsletter from '@/components/newsletter/newsletter';
import TestimonialFour from '@/components/testimonial/testimonial-four';
import TourFour from '@/components/tour/tour-four';
import VideoOne from '@/components/video/video-one';
import FooterTwo from '@/layouts/footers/footer-two';
import HeaderOne from '@/layouts/headers/header-one';
import Wrapper from '@/layouts/wrapper';

const HomeFourMain = () => {
  return (
    <Wrapper>
      <HeaderOne headerClass="it-header-style-4 it-header-bottom-area" />

      <main>
        <HeroBannerFour />

        <DestinationFive />

        <ChooseFour />

        <CategoryOne />

        <FunFactThree />

        <TourFour />

        <VideoOne btnClass="it-btn-primary it-white-bg" />

        <ChooseFive />

        <CoverageOne />

        <TestimonialFour />

        <BlogOne />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default HomeFourMain;
