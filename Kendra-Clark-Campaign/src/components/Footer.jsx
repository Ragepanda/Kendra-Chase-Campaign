export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left - Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm">Kendra Clark Campaign</p>
          <p className="text-sm">123 Campaign St.</p>
          <p className="text-sm">Savannah, GA 31401</p>
          <p className="text-sm mt-2">
            Email:{" "}
            <a
              href="mailto:info@kendraclark.com"
              className="text-blue-600 hover:underline"
            >
              info@kendraclark.com
            </a>
          </p>
          <p className="text-sm">Phone: (555) 123-4567</p>
        </div>

        {/* Middle - Disclaimer */}
        <div className="flex items-center justify-center text-center">
          <p className="text-xs text-gray-600">
            Paid for by the Kendra Clark Campaign
          </p>
        </div>

        {/* Right - Link Tree */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-blue-600 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/issues" className="text-blue-600 hover:underline">
                Issues
              </a>
            </li>
            <li>
              <a href="/events" className="text-blue-600 hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="/volunteer" className="text-blue-600 hover:underline">
                Volunteer
              </a>
            </li>
            <li>
              <a href="/donate" className="text-blue-600 hover:underline">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
