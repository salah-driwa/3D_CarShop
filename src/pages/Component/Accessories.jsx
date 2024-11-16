

export function Accessories() {
  return (
    <div className="p-4 bg-black/90  -mt-6 h-[83vh] rounded shadow-md">
      <h2 className="text-5xl py-2 font-bold uppercase text-white mb-4">Accessories</h2>
      <ul className="w-full  gap-10 flex">
       
       <div className=" w-full border-t rounded-xl pt-6">
         <li className="flex items-center">
          <span className="text-white font-semibold mr-2">→</span>
          <span className="text-white">Aluminum Bicycle Carrier with Frame Bracket</span>
         
        </li>
        <img src="https://bmw.click/wp-content/uploads/2021/03/BM-AG-A0151228-1.jpg" alt="" className=" w-full rounded-2xl  object-cover h-[60vh]" />
        </div>

        <div className=" w-full border-t rounded-xl pt-6">
        <li className="flex items-center">
          <span className="text-white font-semibold mr-2">→</span>
          <span className="text-white">Polestar Engineered Optimization Software</span>
        </li>
        <img src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/xrpm1qnm/polestar_rear_body_image.png?&width=1500&center=0.5,0.5&mode=crop&scale=both"
         alt="" className=" w-full   rounded-2xl object-cover h-[60vh]" />
        </div>
        
      </ul>
      
    </div>
  );
}

export default Accessories;
