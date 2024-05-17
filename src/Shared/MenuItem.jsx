
export default function MenuItem({item}) {
    const {name,recipe,image,category,price} = item;
  return (
     <div className="flex gap-4">
      <div>
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-24" src={image} alt="" />
      </div>
      <div>
      <div className="flex">
        <h1>{name}-----------------------------------</h1>
        <p>${price}</p>
      </div>
      <div className="flex">
        <p>{recipe}</p>
        <h1>{category}</h1>
      </div>
      </div>
    </div>


  )
}
