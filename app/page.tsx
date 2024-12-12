import SubscribeEmailInput from "@/components/SubscribeEmailInput";
import Caraousal from "@/components/carousal/Caraousal";
import HeroSection from "@/components/hero";
import { fertilizers, seeds, agriculturalMachines, fertilizerimgurl, seedsimgurl, agriculturalMachinesimgurl  } from "@/const/caraousals";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <Caraousal title="Fertilizers" data={fertilizers} imgurl={fertilizerimgurl} />
      <Caraousal title="Seeds" data={seeds} imgurl={seedsimgurl} />
      <Caraousal title="Agriculture Machines" data={agriculturalMachines} imgurl={agriculturalMachinesimgurl} />
      <SubscribeEmailInput className="bg-accent" />
    </div>
  );
}
  