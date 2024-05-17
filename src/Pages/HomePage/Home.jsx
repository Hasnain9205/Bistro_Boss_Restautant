import Banner from "./Banner";
import BristoSection from "./BristoSection";
import CallUs from "./CallUs";
import MenuSection from "./MenuSection";
import Order from "./Order";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-4xl mx-auto">
      <Order></Order>
      <BristoSection></BristoSection>
      <MenuSection></MenuSection>
      <CallUs></CallUs>
      </div>
    </div>
  )
}
