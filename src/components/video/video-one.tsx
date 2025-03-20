'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

import shapeImg1 from '@/assets/img/home-1/video/shape/tree.png';
import shapeImg2 from '@/assets/img/home-1/video/shape/triangle.png';

interface IProps {
  btnClass?: string;
}

const VideoOne = ({ btnClass }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div
      className="it-video-area it-video-overlay p-relative pt-95 pb-95"
      style={{
        backgroundImage: `url('/assets/img/home-1/video/img/video-bg.jpg')`,
      }}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="PO_fBTkoznc"
        onClose={closeModal}
      />
      <div className="it-video-shape-box">
        <div className="it-video-shape-1">
          <Image
            src={shapeImg1}
            alt="Shape Img"
            width={420}
            height={389}
            style={{ height: 'auto' }}
          />
        </div>
        <div className="it-video-shape-2">
          <Image
            src={shapeImg2}
            alt="Shape Img"
            width={455}
            height={400}
            style={{ height: 'auto' }}
          />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-9">
            <div className="it-video-content z-index">
              <h3 className="it-section-title text-white mb-30">
                Ready to get started your travel camping us
              </h3>
              <div className="it-video-button">
                <Link
                  href="/contact"
                  className={btnClass ? btnClass : 'it-btn-secondary'}
                >
                  Start Booking
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-3">
            <div className="it-video-icon z-index justify-content-start justify-content-md-end align-items-center">
              <Link href="#" className="popup-video" onClick={handleLinkClick}>
                <i className="fa-solid fa-play"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoOne;
