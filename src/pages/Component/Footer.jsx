
export function Footer() {
  return (
    <footer className="p-6 bg-gray-50 rounded-lg shadow-lg space-y-6">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Volvo Cars</h2>
        <p className="text-gray-700 leading-relaxed">
          From the very outset, Volvo Cars has been a brand for people who care about the world we live in and the people around us. We have made it our mission to make life easier, better, and safer for everyone.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Help & Support</h3>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          <li>Book a Service</li>
          <li>Service & Maintenance</li>
          <li>Support & Manuals</li>
          <li>Warranty & Recall</li>
          <li>Accident & Repair</li>
          <li>Complaints Procedure</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          <li>Contact Us</li>
          <li>Contact Volvo</li>
          <li>Find a Retailer</li>
          <li>Book a Test Drive</li>
          <li>Volvo Studio London</li>
          <li>Subscribe to Newsletter</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Volvo Cars App</h3>
        <ul className="flex space-x-4 text-blue-600">
          <li>App Store</li>
          <li>Google Play</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Legal & Information</h3>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          <li>United Kingdom</li>
          <li>Legal Information</li>
          <li>Cookies</li>
          <li>Privacy</li>
          <li>Business Information</li>
          <li>Modern Slavery Act</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
