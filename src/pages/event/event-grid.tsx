import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import EventGridArea from '@/components/event/event-grid-area';
import Newsletter from '@/components/newsletter/newsletter';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const EventGridMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Event Grid" subtitle="Event" />\
        <EventGridArea />
        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default EventGridMain;
