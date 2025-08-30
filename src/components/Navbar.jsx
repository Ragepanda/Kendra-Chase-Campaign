import { useState } from "react";
import { Link } from "react-router-dom";
import campaignLogo from "../assets/campaign-logo.png";
import miniLogo from "../assets/campaign-logo-mini.png";
import { isMobile } from "react-device-detect";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-white text-brand-blue h-24 md:h-40">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          {/* Logo / Brand */}
          <img
            src={isMobile ? miniLogo : campaignLogo}
            className="flex-shrink-0 h-full w-auto py-4"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-black">
            <Link to="/" className="hover:text-brand-green">
              Home
            </Link>
            <Link to="/about" className="hover:text-brand-green">
              Issues
            </Link>
            <Link to="/services" className="hover:text-brand-green">
              Volunteer
            </Link>
            <Link
              to="https://secure.actblue.com/donate/votekendraclark"
              className="hover:text-brand-green"
            >
              Contribute
            </Link>
            <div className="flex justify-between w-22">
              <a
                href="https://www.instagram.com/votekendraclark"
                className="h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-full"
                  viewBox="0 0 448 512"
                >
                  <path
                    className="fill-brand-blue hover:fill-brand-green"
                    d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a
                className="h-full"
                href="https://www.tiktok.com/@votekendraclark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-full"
                  viewBox="0 0 640 640"
                >
                  <path
                    className="fill-brand-blue hover:fill-brand-green"
                    d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z"
                  />
                </svg>
              </a>
              <a
                className="h-full"
                href="https://www.facebook.com/votekendraclark"
              >
                <svg
                  className="w-6 h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    className="fill-brand-blue hover:fill-brand-green"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="relative md:hidden bg-brand-white px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md hover:bg-brand-green hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md hover:bg-brand-green hover:text-white"
          >
            Issues
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 rounded-md hover:bg-brand-green hover:text-white"
          >
            Volunteer
          </Link>
          <Link
            to="https://secure.actblue.com/donate/votekendraclark"
            className="block px-3 py-2 rounded-md hover:bg-brand-green hover:text-white"
          >
            Contribute
          </Link>
        </div>
      )}
    </nav>
  );
}
