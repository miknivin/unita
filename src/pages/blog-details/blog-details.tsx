import BlogDetailsArea from '@/components/blog/blog-details/blog-details-area';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import Newsletter from '@/components/newsletter/newsletter';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';
import { IBlogDT } from '@/types/blog-d-t';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const BlogDetailsMain = ({ blog }: BlogDetailsProps) => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title={blog?.title} subtitle="Blog Details" />

        <BlogDetailsArea blog={blog} />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default BlogDetailsMain;
