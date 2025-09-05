import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-8">
      <div className="w-full px-4 py-8 flex flex-wrap justify-around gap-6">
        {/* Left - Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-brand-blue">
            Contact
          </h4>
          <p className="text-sm">Committee to Elect Kendra Clark</p>
          <p className="text-sm">PO Box 3894</p>
          <p className="text-sm">Savannah, GA 31414</p>
          <p className="text-sm mt-2">
            <a
              href="mailto:info@kendraclark.com"
              className="text-blue-600 hover:underline"
            >
              info@votekendraclark.com
            </a>
          </p>
          {/* <p className="text-sm">Phone: (555) 123-4567</p> */}
        </div>

        {/* Middle - Disclaimer */}
        <div className="flex items-center justify-center text-center order-1 md:order-0 px-12">
          <p className="text-xs text-gray-600">
            Paid for by the Committee to Elect Kendra Clark
          </p>
        </div>

        {/* Right - Link Tree */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-brand-blue">
            Quick Links
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            {/* <li>
              <a href="/about" className="text-blue-600 hover:underline">
                About
              </a>
            </li> */}
            <li>
              <Link to="/issues" className="text-blue-600 hover:underline">
                Issues
              </Link>
            </li>
            {/* <li>
              <a href="/events" className="text-blue-600 hover:underline">
                Events
              </a>
            </li> */}
            <li>
              <a
                href="https://www.mobilize.us/votekendraclark/event/836393/"
                className="text-blue-600 hover:underline"
              >
                Volunteer
              </a>
            </li>
            <li>
              <a
                href="https://secure.actblue.com/donate/votekendraclark"
                className="text-blue-600 hover:underline"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
