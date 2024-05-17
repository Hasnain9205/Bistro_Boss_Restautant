import Cover from "./Shared/Cover/Cover";
import MenuItem from "./Shared/MenuItem";

export default function MenuCategory({items,title,img,description}) {
  return (
    <div className="mt-20">
        {title && <Cover img={img} title={title} description={description}></Cover>}
        <div className="grid lg:grid-cols-2 gap-6 mt-16">
            {
                items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <div className="flex items-center justify-center mt-6">
      <button className="btn btn-outline border-b-4">ORDER YOUR FAVOURITE FOOD</button>
      </div>
    </div>
  )
}
