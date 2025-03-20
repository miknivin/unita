import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import EventListArea from '@/components/event/event-list-area';
import Newsletter from '@/components/newsletter/newsletter';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const EventListMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />

      <main>
        <Breadcrumb title="Event List" subtitle="Event" />

        <EventListArea />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default EventListMain;
