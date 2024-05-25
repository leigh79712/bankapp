import Banner from "../../components/Homepage/Banner";
import Feature from "../../components/Homepage/Feature";
import Operation from "../../components/Homepage/Operation";
import JoinToday from "../../components/Homepage/JoinToday";
import Links from "../../components/Homepage/Links";

export default function Page({ params: { lng } }) {
  return (
    <>
      <Banner lng={lng} />
      <Feature lng={lng} />
      <Operation lng={lng} />
      <JoinToday lng={lng} />
      <Links lng={lng} />
    </>
  );
}
