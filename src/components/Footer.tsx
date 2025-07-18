import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white   ">
      <div className=" bg-blue-600 shadow-md h-[22vh] flex justify-between items-center px-6 py-8">
        {/* Column 1: Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">AXIOS practice</h2>
          <p className="text-sm text-blue-100">
            Practice your React Axios skills <br />
            by making real API calls and building <br /> cool stuff.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info or Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-sm text-blue-100">
            Email: johnsonayoolaojo@gmail.com <br />
            Phone: +2348062947082
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-500 text-center text-sm text-blue-200 py-4">
        &copy; {new Date().getFullYear()} AyoDev. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
