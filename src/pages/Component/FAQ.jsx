import { useState } from "react";

export function FAQ() {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  return (
    <div className="p-4  rounded h-[70vh] w-11/12 mx-auto ">
      <h2 className="text-7xl font-semibold text-gray-800/70 mb-4">FAQ</h2>
      <div className="space-y-4 flex flex-col  gap-2 mt-8 h-full w-full">

        {/* First FAQ Item */}
        <div
          className="justify-between flex border-2 border-black/20 p-2 rounded-xl items-center w-full cursor-pointer"
          onClick={() => setIsFirstOpen(!isFirstOpen)}
        >
          <p className="text-gray-700 w-1/2 font-medium">
            What Google apps and services are built-in?
          </p>
          <span className="ml-auto border-2 border-black/20 px-3 py-1 rounded-md">
            {isFirstOpen ? "-" : "+"}
          </span>
        </div>
        {isFirstOpen && (
          <div className="text-gray-600 ml-auto w-5/12 mt-2">
            Google apps such as Gmail, Google Maps, YouTube, and Google Drive are built-in. These apps are integrated seamlessly for a more cohesive experience.
          </div>
        )}

        {/* Second FAQ Item */}
        <div
          className="justify-between flex border-2 border-black/20 p-2 rounded-xl items-center w-full cursor-pointer"
          onClick={() => setIsSecondOpen(!isSecondOpen)}
        >
          <p className="text-gray-700 w-1/2 font-medium">
            Is all data required to run the Digital Services?
          </p>
          <span className="ml-auto border-2 border-black/20 px-3 py-1 rounded-md">
            {isSecondOpen ? "-" : "+"}
          </span>
        </div>
        {isSecondOpen && (
          <div className="text-gray-600 ml-auto  w-5/12 mt-2">
            Yes. All data is included for up to four years. This includes both navigation and voice assistant, as well as downloading and running any type of apps (e.g., music streaming). After this period, the service can be extended as a subscription.
          </div>
        )}

        {/* Third FAQ Item */}
        <div
          className="justify-between flex border-2 border-black/20 p-2 rounded-xl items-center w-full cursor-pointer"
          onClick={() => setIsThirdOpen(!isThirdOpen)}
        >
          <p className="text-gray-700 w-1/2 font-medium">
            Is Digital Services a subscription?
          </p>
          <span className="ml-auto border-2 border-black/20 px-3 py-1 rounded-md">
            {isThirdOpen ? "-" : "+"}
          </span>
        </div>
        {isThirdOpen && (
          <div className="text-gray-600 ml-auto w-5/12 mt-2">
            Yes, Digital Services operates on a subscription model. You can enjoy all services for the first four years, after which the service will continue on a subscription basis.
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
