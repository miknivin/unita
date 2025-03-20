import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import CartArea from '@/components/cart/cart-area';
import Newsletter from '@/components/newsletter/newsletter';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const CartMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Cart" subtitle="Cart" />

        <CartArea />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default CartMain;
