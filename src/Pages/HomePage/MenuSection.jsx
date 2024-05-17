
import MenuItem from "../../Shared/MenuItem"
import UseMenu from "../../Hooks/UseMenu"

export default function MenuSection() {
const [menu] = UseMenu()
const popular = menu.filter(item=>item.category === 'popular')
  return (
    <div className="mt-20">
            <div>
            <h1 className='text-center text-2xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-4'>---From 11:00am to 10:00pm---</h1>
            <h1 className=' text-4xl font-normal border-b-4 pb-6 mb-12 text-center w-96 mx-auto'>ORDER ONLINE</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
            {
                popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <div className="flex items-center justify-center mt-6">
      <button className="btn btn-outline border-b-4">VIEW FULL MENU</button>
      </div>
    </div>
  )
}
