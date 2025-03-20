import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Newsletter from '@/components/newsletter/newsletter';
import ShopDetailsArea from '@/components/shop/shop-details/shop-details-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';
import { IProductDT } from '@/types/product-d-t';

interface ShopDetailsProps {
  product: IProductDT;
}

const ShopDetailsMain = ({ product }: ShopDetailsProps) => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title={product?.title} subtitle="Shop" />

        <ShopDetailsArea product={product} />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default ShopDetailsMain;
