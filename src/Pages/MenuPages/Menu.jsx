import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import UseMenu from '../../Hooks/UseMenu';
import MenuCategory from '../../MenuCategory';

export default function Menu() {
    const [menu] = UseMenu()
    const offered = menu.filter(item=> item.category === 'offered')
    const desserts = menu.filter(item=> item.category === 'dessert')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const soups = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | OUR MENU</title>
      </Helmet>

      <Cover
       img={menuImg}
        title='our menu' 
        description='Would you like to try a dish?'
       ></Cover>
      <div>
      <div className='mt-20'>
            <h1 className='text-center text-2xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-4'>---Don't miss---</h1>
            <h1 className=' text-4xl font-normal border-b-4 pb-6 mb-12 text-center w-96 mx-auto'>TODAY'S OFFER</h1>
        </div>
      </div>
      <div className='max-w-4xl mx-auto'>
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
       items={desserts}
       title="Dessert"
       img={dessertImg}
       description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
       > </MenuCategory>
      <MenuCategory
       items={pizza}
       title="PIZZA"
       img={dessertImg}
       description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
       > </MenuCategory>
      <MenuCategory
       items={salad}
       title="salads"
       img={dessertImg}
       description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
       > </MenuCategory>
             <MenuCategory
       items={soups}
       title="soups"
       img={dessertImg}
       description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
       > </MenuCategory>
      </div>


    </div>
  )
}
