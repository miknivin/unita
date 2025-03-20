import Image from 'next/image';
import { blogDataOne } from '@/data/blog-data';
import BlogItem from './blog-item/blog-item-one';

import shapeImg1 from '@/assets/img/home-2/blog/shape/map.png';
import shapeImg2 from '@/assets/img/home-2/blog/shape/rocket.png';

const BlogTwo = () => {
  return (
    <div className="it-blog-area it-blog-style-2 pt-120 pb-120 p-relative">
      <div className="it-blog-shape-box d-none d-xl-block">
        <div className="it-blog-shape-1">
          <Image src={shapeImg1} alt="Shape Img" width={181} height={184} />
        </div>
        <div className="it-blog-shape-2">
          <Image src={shapeImg2} alt="Shape Img" width={340} height={123} />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="it-blog-title-box mb-65 text-center">
              <span className="it-section-subtitle">Our Resent Blog</span>
              <h3 className="it-section-title">
                Amazing news & blog for every update
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blogDataOne
            .map((blog) => (
              <div
                key={blog.id}
                className="col-xl-4 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <BlogItem blog={blog} />
              </div>
            ))
            .slice(3, 6)}
        </div>
      </div>
    </div>
  );
};
export default BlogTwo;
