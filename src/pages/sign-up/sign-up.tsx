import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Newsletter from '@/components/newsletter/newsletter';
import SignUpArea from '@/components/sign-up/sign-up-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const SignUpMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Sign Up" />

        <SignUpArea />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default SignUpMain;
