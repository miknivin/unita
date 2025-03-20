import BookingCheckoutArea from '@/components/booking/booking-checkout-area';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Newsletter from '@/components/newsletter/newsletter';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const BookingCheckoutMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Booking Checkout" subtitle="Tour" />

        <BookingCheckoutArea />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default BookingCheckoutMain;
