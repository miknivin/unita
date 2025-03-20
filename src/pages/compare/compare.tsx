import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import CompareArea from '@/components/compare/compare-area';
import Newsletter from '@/components/newsletter/newsletter';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const CompareMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Compare" />

        <CompareArea />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default CompareMain;
