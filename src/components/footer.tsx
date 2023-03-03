import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import Logo from "@/assets/logo.svg";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full flex justify-between items-center px-20 bg-blue-200 border-t-4 border-yellow-600 drop-shadow-sm h-[30vh]">
      <section className="border-2 rounded-2xl border-gray-400 p-4">
        <a>
          <img src={Logo} alt="baby box Logo" />
        </a>
        <p>&copy; Babybox </p>
        <p>All righs reserved. </p>
      </section>
      <section className="flex justify-evenly w-4/6">
        <div>
          <h2 className="font-bold mb-3">Company</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Sponsors</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-3">Support</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a>Contacts</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Legal</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-3">Socials</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="https://instagram.com" target="_blank">
                <FaInstagram className="w-6 h-6 text-gray-500" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank">
                <FaFacebookSquare className="w-6 h-6 text-gray-500" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <FaTwitter className="w-6 h-6 text-gray-500" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
