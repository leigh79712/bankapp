import { ThemeProvider } from "next-themes";
import Banner from "../../components/Banner";

export default async function Page({ params: { lng } }) {
  return (
    <ThemeProvider attribute="class">
      <Banner lng={lng} />
    </ThemeProvider>
  );
}
