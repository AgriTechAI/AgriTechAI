import SubscribeEmailInput from "@/components/SubscribeEmailInput";
import SwiperComponent from "../components/SwiperComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pt-[calc(4rem+6rem)] w-full">
        <SwiperComponent />
      </div>
      <div className="h-screen w-full" />
      <SubscribeEmailInput className="bg-accent" />
    </div>
  );
}
