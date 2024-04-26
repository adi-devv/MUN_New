"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-10 md:py-20 -mb-10 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What is Model United Nations?"
          paragraph="During a Model UN conference, students take on the roles of representatives for a country, organization, or individual, collaborating with delegates globally to address and solve various issues. MUN not only imparts skills such as research, public speaking, debating, and writing but also fosters critical thinking, teamwork, and leadership abilities. Formulating solutions agreeable to a majority of representatives also cultivates negotiation, conflict resolution, and cooperation skills."
          center
          mb="80px"
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
              <div className="relative aspect-[77/40]">
                <img
                  src="/images/video/video.jpg"
                  alt="video image"
                  className="object-cover"
                />
                <button
                  aria-label="video play button"
                  onClick={() => setOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 hover:bg-opacity-100"
                >
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    className="fill-current"
                  >
                    <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="instagram"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="C57z8MWPbe6"
        onClose={() => setOpen(false)}
      />
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
