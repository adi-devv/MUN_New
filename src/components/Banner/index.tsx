import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div></div>
      <br />
      <br />
      <section
        id="munmate"
        className="relative overflow-hidden pb-16 pt-[80px] md:pb-[80px] md:pt-[100px] xl:pb-[120px] xl:pt-[140px] 2xl:pb-[160px] 2xl:pt-[180px]"
        style={{
          backgroundImage: "url('/images/Banner.png')",
          backgroundPosition: "top",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "65vh",
        }}
      >
        {/* This space allows for padding below the image */}
      </section>

      {/* Button placed outside the section */}
      <br />
      <br />
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSehJgpRVXrI-on1JXyK3drX6uywhcuEbPn48ois8H1cLS7Plg/viewform?usp=sf_link"
          className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          style={{ backgroundColor: "#1E7CFB" }}
        >
          Register Now!
        </Link>
      </div>
    </>
  );
};

export default Banner;
