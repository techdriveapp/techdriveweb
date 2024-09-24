import Client from "@/components/Client";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Numbers from "@/components/Numbers";
import Partners from "@/components/Partners";
import Story from "@/components/Story";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <Numbers />
      <Client />
      <Partners />
      <Story />
    </div>
  );
}
