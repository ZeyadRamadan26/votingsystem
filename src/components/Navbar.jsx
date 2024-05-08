import image1 from '../Images/output-onlinepngtools9.png'; 
import { Routes,Route,Link } from 'react-router-dom';
export default function Navbar() {
    return (
      <nav className="fixed w-full flex items-center justify-between p-4 bg-gray-800 text-white ">
        <div className="flex items-center">
          <img src={image1} className="w-14" alt="Logo" />
          <a href="/" className="ml-2">Build<span className='text-red-600'> Your</span> Future</a>
        </div>
        <ul className="flex gap-4 justify-center">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/aboutus" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
          <li><Link to="/Howtousen" className="hover:text-gray-300">How to Use</Link></li>
          <li><Link to="/Signup" className="bg-sky-500 text-white font-bold px-4 py-1  rounded-full hover:bg-gradient-to-r from-sky-500 to-indigo-500">Sign Up</Link></li>

        </ul>
      </nav>
    );
} 
