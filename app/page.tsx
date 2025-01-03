import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Stack } from "@/components/Stack";
import { Achievement } from "@/components/Achievement";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />

      <Portfolio />
      <Achievement />
      <Contact />
    </>
  );
}
