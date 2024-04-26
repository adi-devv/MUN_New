const Banner = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pb-16 pt-[80px] md:pb-[80px] md:pt-[100px] xl:pb-[120px] xl:pt-[140px] 2xl:pb-[160px] 2xl:pt-[180px]"
        style={{
          backgroundImage: "url('/images/Banner.png')",
          backgroundPosition: "top",
          backgroundSize: "contain", // Adjusted background size
          backgroundRepeat: "no-repeat",
          height: "40vh", // Adjusted height
        }}
      ></section>
    </>
  );
};

export default Banner;
