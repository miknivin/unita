import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Newsletter from "@/components/newsletter/newsletter";
import ServicesDetailsArea from "@/components/tour/details/tour-details-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";
import { IServiceDT } from "@/types/tour-packages-d-t";

interface Service {
  service: IServiceDT;
}

const ServicesDetailsMain = ({ service }: Service) => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title={service?.title} subtitle="Tour" />

        <ServicesDetailsArea service={service} />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default ServicesDetailsMain;
