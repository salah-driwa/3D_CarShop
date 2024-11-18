export function Specifications() {
  const specs = [
    { id: 1, title: "0-62 mph", value: "4.5 s" },
    { id: 2, title: "Electric Energy Consumption", value: "17.3 kWh/100km" },
    { id: 3, title: "Electric Range", value: "55.3 mi" },
    { id: 4, title: "Emissions CO2", value: "17 g/km" },
    { id: 6, title: "Fuel Consumption", value: "353.1 mpg" },
  ];

  return (
    <div className=" border-t  border-gray-500/60 mx-6 rounded-xl   p-4">
        <h1 className="text-6xl font-semibold text-black mb-6">
                Specifications
              </h1>
    <div className="grid  grid-cols-5 gap-4 p-4">
      {specs.map((spec) => (
        <div
          key={spec.id}
          className="flex flex-col  size-[16vw] justify-between items-center p-4 border-2 border-black/30 rounded-lg shadow-sm bg-white"
        >
          <span className="text-2xl font-semibold text-black">{spec.value}</span>
          <span className="text-sm text-gray-600 font-medium">{spec.title}</span>
        </div>
      ))}

   
    </div>
 
    <img src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/fastlane/bmw-individual/2024/bmw-individual-m3-touring-hd-02.jpg" 
      alt="car1"
       className=" w-screen  rounded-xl mt-2 h-80 object-cover  " /> </div> );
}

export default Specifications;
