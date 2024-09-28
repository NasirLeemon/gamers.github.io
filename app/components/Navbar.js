import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black p-2">
      <div className="flex items-center ml-8">
        <Link href="#">
          <img src="/images/gamer1.png" alt="" />
        </Link>
        <h1 className="text-pink-600 text-3xl ml-2 cursor-pointer">Gamer</h1>
      </div>

      <div className="hidden md:flex space-x-8 mx-auto">
        <Link href="#" className="text-white text-lg hover:text-pink-600">
          Home
        </Link>
        <Link href="#" className="text-white text-lg hover:text-pink-600">
          Pages
        </Link>
        <Link href="#" className="text-white text-lg hover:text-pink-600">
          Product
        </Link>
        <Link href="#" className="text-white text-lg hover:text-pink-600">
          Blog
        </Link>
        <Link href="#" className="text-white text-lg hover:text-pink-600">
          Shop
        </Link>
        <Link href="#" className="text-white text-lg hover:text-pink-600">
          Contact
        </Link>
      </div>

      <div className="flex items-center mr-0 lg:mr-8">
        <input
          type="text"
          placeholder="Search.."
          className="border-0 outline-none p-1 sm:p-2 rounded-full w-20 sm:w-32 md:w-48 lg:w-64 transition-all mr-4"
        />
        <img src="/images/search.png" alt="" className="cursor-pointer" />
        <div className=" hidden md:inline-flex  space-x-5 ml-5">
          <Link href="#">
            <img src="/images/image9.png" alt="" className="cursor-pointer" />
          </Link>
          <Link href="#">
            <img src="/images/image10.png" alt="" className="cursor-pointer" />
          </Link>
          <Link href="#">
            <img src="/images/image11.png" alt="" className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
