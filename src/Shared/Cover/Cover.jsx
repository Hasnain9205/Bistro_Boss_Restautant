import { Parallax} from 'react-parallax';

export default function Cover({img,title,description}) {
  return (

  
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the Bistro"
            strength={-200}
        >
    <div>
      <div className=" min-h-screen">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-[800px] h-80 mt-32 pt-28 bg-black opacity-70 ">
      <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
      <p className="mb-5 w-[700px] mx-auto">{description}</p>
    </div>
  </div>
</div>
    </div>
        </Parallax>

  )
}
