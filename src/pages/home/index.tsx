import Hero from "./Hero";
import Card from "./Card";
import FirstSpeaker from "./FirstSpeaker";
import SecondSpeaker from "./SecondSpeaker";
import EarPhones from "../home/Earphones";
import BestAduio from "../home/BestAudio";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Card />
      <FirstSpeaker />
      <SecondSpeaker />
      <EarPhones />
      <BestAduio />
      <Footer />
    </div>
  );
}
