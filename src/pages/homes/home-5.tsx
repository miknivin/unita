import BlogOne from '@/components/blog/blog-one';
import ChooseSix from '@/components/choose/choose-six';
import CoverageOne from '@/components/coverage/coverage-one';
import FunFactFour from '@/components/funfact/funfact-four';
import HeroBannerFive from '@/components/hero-banner/hero-banner-five';
import InstagramOne from '@/components/instagram/instagram-one';
import NewsletterTwo from '@/components/newsletter/newsletter-two';
import StoriesOne from '@/components/stories/stories-one';
import TravelOne from '@/components/travel/travel-one';
import FooterTwo from '@/layouts/footers/footer-two';
import HeaderOne from '@/layouts/headers/header-one';
import Wrapper from '@/layouts/wrapper';

const HomeFiveMain = () => {
  return (
    <Wrapper>
      <HeaderOne
        headerClass="it-header-style-4 it-header-style-5 it-header-bottom-area"
        hasTopBarTwo
      />

      <main>
        <HeroBannerFive />

        <TravelOne />

        <ChooseSix />

        <FunFactFour />

        <StoriesOne />

        <CoverageOne />

        <NewsletterTwo />

        <BlogOne />

        <InstagramOne />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default HomeFiveMain;
