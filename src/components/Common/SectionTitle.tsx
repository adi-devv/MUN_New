const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className="mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]"
          // style={{ fontFamily: "Roboto" }}
        >
          {title}
        </h2>
        {paragraph !== "" ? (
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        ) : (
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
