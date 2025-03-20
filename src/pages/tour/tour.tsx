import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Newsletter from '@/components/newsletter/newsletter';
import TourArea from '@/components/tour/tour-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const TourMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />

      <main>
        <Breadcrumb title="Tour Grid" subtitle="Tour" />

        <TourArea />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default TourMain;
