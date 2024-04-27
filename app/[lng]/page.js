import { ThemeProvider } from "next-themes";
import Header from "../../components/Homepage/Header";
import Feature from "../../components/Homepage/Feature";
import Operation from "../../components/Homepage/Operation";
import JoinToday from "../../components/Homepage/JoinToday";
import Footer from "../../components/Homepage/Footer";

export default async function Page({ params: { lng } }) {
  return (
    <ThemeProvider attribute="class">
      <Header lng={lng} />
      <Feature lng={lng} />
      <Operation lng={lng} />
      <JoinToday lng={lng} />
      <Footer lng={lng} />
    </ThemeProvider>
  );
}
