"use client";
import Link from "next/link";

const scrollWithOffset = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);
  const offset = 79;
  const targetOffset =
    targetElement.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: targetOffset,
    behavior: "smooth",
  });
};

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{
          backgroundImage: "url('/images/a.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          height: "100vh",
          opacity: 1,
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-14">
              <div className="mx-auto max-w-[800px] text-center">
                <br />
                <br />

                {/* <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight" style={{fontSize:"35px"}}>
                  VIT Bhopal
                </h1> */}
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  MODEL UNITED NATIONS
                </h1>
                <p
                  className="mb-12 text-base !leading-relaxe text-body-color-dark sm:text-lg md:text-xl"
                  style={{ fontSize: "35px" }}
                >
                  VIT Bhopal
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#Vitbmun"
                    onClick={scrollWithOffset}
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    VITBMUN 3.0
                  </Link>
                  <Link
                    href="#Vitbmun"
                    onClick={scrollWithOffset}
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    1-3 May
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
