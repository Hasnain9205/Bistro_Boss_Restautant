import Banner from "./Banner";
import BristoSection from "./BristoSection";
import CallUs from "./CallUs";
import MenuSection from "./MenuSection";
import Order from "./Order";
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | HOME</title>
      </Helmet>
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
