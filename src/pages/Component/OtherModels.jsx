
export function OtherModels() {
  return (
    <div className="p-4 w-full rounded ">
      <h2 className="text-lg font-bold text-gray-800 mb-4">OTHER MODELS</h2>
      <ul className=" w-full flex gap-7 ">
        <div>
        <li className="text-blue-600 font-medium">
          → C40 Recharge
        </li>
        <img src="https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg" className=" w-full rounded-2xl  object-cover h-[60vh]"  alt="" />
     
        </div>
      
        <div>     <li className="text-blue-600 font-medium">
          → XC40 Recharge
        </li>

        <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/3-Series/10574/1689667781970/side-view-(left)-90.jpg" className=" w-full rounded-2xl  object-cover h-[60vh]"  alt="" />
        </div>

      </ul>
    </div>
  );
}

export default OtherModels;
