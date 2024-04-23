import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
    </ThemeProvider>
  );
}
