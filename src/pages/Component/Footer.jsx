import { CgWebsite } from "react-icons/cg";
import SocialIcons from "./socialLinks";

export function Footer() {
  return (
    <footer className="p-6 mx-5    h-fit mt-64 justify-end align-bottom bg-[#1b1d21] rounded-lg shadow-lg  gap-4 flex ">

      <div className=" w-5/12  justify-between flex flex-col">
      <section className="space-y-4">
  
        <p className="text-white/70 leading-relaxed">
          From the very outset, Volvo Cars has been a brand for people who care about the world we live in and the people around us. We have made it our mission to make life easier, better, and safer for everyone.
        </p>
      </section>

      <div className=" flex gap-3 items-center">
      <CgWebsite  size={35} color="white"/>
      <span className="text-white leading-relaxed ">Germany</span>

      </div>

      </div>


      <section className="flex flex-col   w-4/12 gap-6">
      <div className="  h-full  flex flex-col">
  
        <h3 className="text-lg font-semibold text-white">Help & Support</h3>
        <ul className="gap-4 text-white/70">
          <li>Book a Service</li>
          <li>Service & Maintenance</li>
          <li>Support & Manuals</li>
          <li>Warranty & Recall</li>
          <li>Accident & Repair</li>
          <li>Complaints Procedure</li>
        </ul>
   
   
      </div>
      <div className="  h-full  flex flex-col">
        <h3 className="text-lg font-semibold text-white">Volvo Cars App</h3>
        <ul className="flex  flex-col text-blue-600">
          <li>App Store</li>
          <li>Google Play</li>
        </ul>
        </div>
      
      </section>

      <div className="  h-full  w-4/12  flex flex-col">

<h3 className="text-md font-semibold text-white">Contact</h3>
  <ul className=" text-sm text-white/70">
    <li>Contact Us</li>
    <li>Contact Volvo</li>
    <li>Find a Retailer</li>
    <li>Book a Test Drive</li>
    <li>Volvo Studio London</li>
    <li>Subscribe to Newsletter</li>
  </ul>

  <div className="  h-full  flex flex-col">
        <h3 className="text-md font-semibold text-white">Legal & Information</h3>
        <ul className="  text-sm text-white/70">
          <li>United Kingdom</li>
          <li>Legal Information</li>
          <li>Cookies</li>
          <li>Privacy</li>
          <li>Business Information</li>
          <li>Modern Slavery Act</li>
        </ul>
      </div>
      
<SocialIcons />
  </div>

     
    </footer>
  );
}

export default Footer;
