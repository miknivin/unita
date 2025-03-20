import AboutTwo from '@/components/about/about-two';
import BlogTwo from '@/components/blog/blog-two';
import ChooseTwo from '@/components/choose/choose-two';
import DestinationTwo from '@/components/destination/destination-two';
import FunFactTwo from '@/components/funfact/funfact-two';
import HeroBannerTwo from '@/components/hero-banner/hero-banner-two';
import Newsletter from '@/components/newsletter/newsletter';
import ShopTwo from '@/components/shop/shop-two';
import TestimonialTwo from '@/components/testimonial/testimonial-two';
import TourTwo from '@/components/tour/tour-two';
import WorkOne from '@/components/work/work-one';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const HomeTwoMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />

      <main>
        <HeroBannerTwo />

        <AboutTwo />

        <DestinationTwo />

        <TourTwo />

        <WorkOne />

        <TestimonialTwo />

        <FunFactTwo />

        <ChooseTwo />

        <ShopTwo />

        <BlogTwo />

        <Newsletter />
      </main>

      <FooterOne
        footerClass="it-footer-area it-footer-style-2 p-relative pt-120 pb-135 black-bg fix"
        btnClass="it-btn-secondary"
        copyRightClass="it-copyright-area it-copyright-style-2 z-index"
      />
    </Wrapper>
  );
};
export default HomeTwoMain;
