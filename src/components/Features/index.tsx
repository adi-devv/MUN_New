import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
// import Brands from "../Brands";
import Vitbmun from "../Vitbmun/Vitbmun";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="About Us"
            paragraph={"Welcome to our MUN Club, where we bring the world of Model United Nations to life! In our club, students take on the roles of delegates representing diverse countries and organizations, engaging in spirited debates, negotiations, and crafting solutions to global challenges. At MUN Club, we're more than just a simulation – we're a vibrant community dedicated to fostering a deeper understanding of international affairs and honing invaluable skills in diplomacy, public speaking, and critical thinking. Whether you're a seasoned delegate or new to the MUN scene, our club offers a supportive environment where members can learn, grow, and make lasting connections."}

            center
          />

          <Vitbmun />
          <br />
          <br />
          <br />
          <br />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
