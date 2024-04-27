import Link from "next/link";

const Vitbmun = () => {
  return (
    <>
      <section
        id="Vitbmun"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://upload.wikimedia.org/wikipedia/commons/0/05/UN_General_Assembly_hall.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "70vh",
          opacity: 1,
          margin: "0 -2vw",
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-14">
              <div className="mx-auto max-w-[800px] text-center">
                <h1
                  className="mb-0 text-3xl leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
                  style={{ color: "white" }}
                >
                  <b>VITB</b>MUN{" "}
                  <span className="gradient-text font-bold">'24</span>
                </h1>

                <p
                  className="mb-1 text-base !leading-relaxe dark:text-body-color-dark sm:text-lg md:text-xl"
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "#F0F2F9",
                    lineHeight: "1.5", // Adjust this value as needed for the desired space
                  }}
                >
                  Third Edition <br />{" "}
                </p>

                <p
                  className="mb-7 text-base !leading-relaxe dark:text-body-color-dark sm:text-lg md:text-xl"
                  style={{ color: "#F0F2F9", fontSize: "25px" }}
                >
                  1st - 3rd May
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://forms.gle/q6mcXEzsKCoKQARS8"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    style={{ backgroundColor: "#1E7CFB" }}
                  >
                    Register Now!
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

export default Vitbmun;
