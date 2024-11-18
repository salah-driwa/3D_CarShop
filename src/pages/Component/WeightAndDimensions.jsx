export function WeightAndDimensions() {
  return (
    <div className="p-4 border h-[70vh]  border-gray-500/70 rounded-xl w-11/12 mx-auto divide-y divide-gray-500 mt-12 shadow-md">
      
      {/* Weight and Capacity */}
      <div className="mb-2 flex">
        <h3 className="text-md w-1/2 font-semibold text-gray-700">Weight and Capacity</h3>
        <ul className="space-y-1 divide-y w-1/2 divide-gray-500 text-gray-700">
          <li className="flex justify-between py-1">
            Fuel Capacity: <span className="font-medium">601</span>
          </li>
          <li className="flex justify-between  py-2">
            Maximum Towing Capacity: <span className="font-medium">2100 kg</span>
          </li>
        </ul>
      </div>

      {/* Exterior Dimensions */}
      <div className="mb-2 flex">
        <h3 className="text-md w-1/2 font-semibold text-gray-700">Exterior Dimensions</h3>
        <ul className="space-y-1 divide-y w-1/2 divide-gray-500 text-gray-700">
          <li className="flex justify-between">
            Height: <span className="font-medium">1300 cm</span>
          </li>
          <li className="flex justify-between">
            Length: <span className="font-medium">5080 cm</span>
          </li>
          <li className="flex justify-between">
            Width: <span className="font-medium">2020 cm</span>
          </li>
          <li className="flex justify-between">
            Wheelbase: <span className="font-medium">3060 cm</span>
          </li>
        </ul>
      </div>

      {/* Interior Dimensions */}
      <div className="mb-2 flex">
        {/* Notes */}
        <div className="mt-2 w-1/2 flex-col justify-between flex">
          <h3 className="text-md w-1/2 font-semibold text-gray-700">Interior Dimensions</h3>
        <div className=" mt-5 w-6/12">  <p className="text-sm text-gray-600">
            Note: If a figure is not available yet for a particular vehicle, it may show up as N/A. Check back soon for updated information.
            Starting at MSRP does not include configured options and destination fee.
          </p>
          <p className="text-sm text-gray-600">
          This is a hybrid plugin vehicle. Since electricity is not measured in gallons, a conversion factor is used to translate
          the fuel economy into miles per gallon of gasoline equivalent (MPG). Use for comparison purposes only.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          This is an electric vehicle. Since electricity is not measured in gallons, a conversion factor is used to translate the
          fuel economy into miles per gallon of gasoline equivalent (MPG).
        </p></div>
        </div>
        <ul className="flex flex-col divide-y w-1/2 divide-gray-500 text-gray-700">
  <li className="flex justify-between py-2">
    Front Head Room: <span className="font-medium">960 cm</span>
  </li>
  <li className="flex justify-between py-2">
    Rear Head Room: <span className="font-medium">960 cm</span>
  </li>
  <li className="flex justify-between py-2">
    Front Shoulder Room: <span className="font-medium">1460 cm</span>
  </li>
  <li className="flex justify-between py-2">
    Rear Shoulder Room: <span className="font-medium">1410 cm</span>
  </li>
  <li className="flex justify-between py-2">
    Front Leg Room: <span className="font-medium">1070 cm</span>
  </li>
  <li className="flex justify-between py-2">
    Rear Leg Room: <span className="font-medium">1030 cm</span>
  </li>
  <li className="flex justify-between py-2">
    Front Hip Room: <span className="font-medium">1430 cm</span>
  </li>
  <li className="flex justify-between py-2">
    Rear Hip Room: <span className="font-medium">1390 cm</span>
  </li>
</ul>

      </div>

      {/* Additional Information */}
      
    </div>
  );
}

export default WeightAndDimensions;
