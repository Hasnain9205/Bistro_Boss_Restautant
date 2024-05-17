import orderCover from '../../src/assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover'
export default function OrderFood() {
  return (
    <div>
      <Cover 
      title="Order Food"
      description="Would you like to try a dish?"
      img={orderCover}
      ></Cover>
    </div>
  )
}
