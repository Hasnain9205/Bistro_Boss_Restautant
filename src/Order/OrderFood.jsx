import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../src/assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover'
import UseMenu from '../Hooks/UseMenu'
import { useState } from 'react';
import OrderCard from './OrderCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
export default function OrderFood() {
  const categories = ['salad','pizza','soup','dessert','drinks']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [menu] = UseMenu()
  console.log(menu)
  const [tabIndex, setTabIndex] = useState(initialIndex);


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | ORDER FOOD</title>
      </Helmet>
      <Cover 
      title="Order Food"
      description="Would you like to try a dish?"
      img={orderCover}
      ></Cover>




<div className='flex items-center justify-center mt-20 uppercase font-semibold'>
<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soups</Tab>
      <Tab>desserts</Tab>
      <Tab>drinks</Tab>
    </TabList>

    <div>
<TabPanel>
<div className='grid grid-cols-3 gap-6'>

{
        menu.filter(i=>i.category === 'salad').map(item=><OrderCard key={item._id} item={item}></OrderCard>)
      }
</div>
    </TabPanel>
<TabPanel>
<div className='grid grid-cols-3 gap-6'>
{
        menu.filter(i=>i.category === 'pizza').map(item=><OrderCard key={item._id} item={item}></OrderCard>)
      }
</div>
    </TabPanel>
<TabPanel>
<div className='grid grid-cols-3 gap-6'>
{
        menu.filter(i=>i.category === 'soup').map(item=><OrderCard key={item._id} item={item}></OrderCard>)
      }
</div>
    </TabPanel>
<TabPanel>
<div className='grid grid-cols-3 gap-6'>
{
        menu.filter(i=>i.category === 'dessert').map(item=><OrderCard key={item._id} item={item}></OrderCard>)
      }
</div>
    </TabPanel>
<TabPanel>
<div className='grid grid-cols-3 gap-6'>
{
        menu.filter(i=>i.category === 'drinks').map(item=><OrderCard key={item._id} item={item}></OrderCard>)
      }
</div>
    </TabPanel>

</div>
</Tabs>
    </div>

    </div>
  )
}
