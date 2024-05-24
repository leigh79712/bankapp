import Banner from "../../components/Homepage/Banner";
import Feature from "../../components/Homepage/Feature";
import Operation from "../../components/Homepage/Operation";
import JoinToday from "../../components/Homepage/JoinToday";
import Footer from "../../components/Homepage/Footer";

export default function Page({ params: { lng } }) {
  return (
    <>
      <Banner lng={lng} />
      <Feature lng={lng} />
      <Operation lng={lng} />
      <JoinToday lng={lng} />
      <Footer lng={lng} />
    </>
  );
}
