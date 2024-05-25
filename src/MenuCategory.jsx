import { Link } from "react-router-dom";
import Cover from "./Shared/Cover/Cover";
import MenuItem from "./Shared/MenuItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function MenuCategory({items,title,img,description}) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div className="mt-20">
        {title && <Cover img={img} title={title} description={description}></Cover>}
        <div>

                  <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          {
                items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
            </div>
        </SwiperSlide>
        

      </Swiper>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-b-4">ORDER YOUR FAVOURITE FOOD</button>
          </Link>
      </div>
    </div>
  )
}
