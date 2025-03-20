import Image from 'next/image';
import Link from 'next/link';
import { IBlogDT } from '@/types/blog-d-t';

interface BlogItemProps {
  blog: IBlogDT;
}

const BlogItemTwo = ({ blog }: BlogItemProps) => {
  return (
    <div className="it-blog-item p-relative">
      <div className="it-blog-thumb">
        <Link href={`/blog-details/${blog.id}`}>
          <Image
            src={blog.image}
            alt="Blog Img"
            width={370}
            height={250}
            style={{ height: 'auto' }}
          />
        </Link>
      </div>
      <div className="it-blog-categories">
        <span>{blog.badgeTitle}</span>
      </div>
      <div className="it-blog-content">
        <div className="it-blog-meta-box mb-20 d-flex align-items-center">
          <div className="it-blog-meta">
            <span>
              <i className="fa-solid fa-calendar-days"></i>
              {blog.publishedDate}
            </span>
          </div>
          <div className="it-blog-meta">
            <span>
              <i className="fa-regular fa-comments"></i>
              {blog.commentCount} Comments
            </span>
          </div>
        </div>
        <h3 className="it-blog-title mb-20">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h3>
        <div className="it-blog-link">
          <Link href={`/blog-details/${blog.id}`}>
            {blog.btnText}
            <i className="fa-light fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogItemTwo;
