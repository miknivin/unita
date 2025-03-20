import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Newsletter from '@/components/newsletter/newsletter';
import TestimonialArea from '@/components/testimonial/testimonial-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const TestimonialMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />

      <main>
        <Breadcrumb title="Testimonial" />

        <TestimonialArea />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default TestimonialMain;
