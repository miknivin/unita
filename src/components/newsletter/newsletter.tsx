import Image from 'next/image';

import shapeImg1 from '@/assets/img/home-2/newsletter/shape-2-1.png';
import shapeImg2 from '@/assets/img/home-2/newsletter/shape-2-2.png';
import shapeImg3 from '@/assets/img/home-2/newsletter/shape-2-3.png';

interface IProps {
  itemClass?: string;
  btnClass?: string;
}

const Newsletter = ({ itemClass, btnClass }: IProps) => {
  return (
    <div
      className={
        itemClass
          ? itemClass
          : 'it-newsletter-area it-newsletter-height fix p-relative theme-bg-2'
      }
    >
      <div className="it-newsletter-shape-1 d-none d-lg-block">
        <Image src={shapeImg1} alt="Shape Img" width={221} height={200} />
      </div>
      <div className="it-newsletter-shape-2 d-none d-lg-block">
        <Image src={shapeImg2} alt="Shape Img" width={248} height={166} />
      </div>
      <div className="it-newsletter-shape-3 d-none d-xl-block">
        <Image src={shapeImg3} alt="Shape Img" width={217} height={181} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="it-newsletter-left">
              <h4 className="it-section-title text-white">
                Join Our Newsletter
              </h4>
              <span>
                Subscribe our newsletter to get our latest update & news.
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="it-newsletter-right p-relative text-end">
              <input type="text" placeholder="Enter your email:" />
              <button
                className={btnClass ? btnClass : 'it-btn-secondary'}
                type="submit"
              >
                <span>subscribe now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
