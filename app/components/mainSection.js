const MainSection = () => {
  return (
    <section id="main" className="bg-[#EECCD7]">
      <div className=" flex flex-col md:flex-row justify-between h-[90vh] w-full">
        <div className="container-left flex justify-center gap-5 items-center w-full md:w-1/2">
          <img src="/images/Rectangle 20.png" alt="" className="h-44 w-4" />
          <div className="container-left-items ml-5">
            <h1 className="text-5xl font-bold mb-4">
              PS4 V2 <br /> DualShock 4
            </h1>
            <p className="text-gray-600 font-bold mb-2">
              <b>Wireless Controller For PlayStation 4 </b>
              <br />
              (compatibility Centric)
            </p>
            <h2 className="text-2xl font-bold">$2052</h2>
            <button className="bg-gradient-to-r font-bold from-pink-500 to-red-600 text-white py-2 px-14 rounded-lg mt-5 transition duration-300 hover:bg-black">
              Buy Now
            </button>
          </div>
        </div>

        <div
          className="container-right w-full md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Group 131.png')" }}
        >
          <img src="/images/Group 40.png" alt="" className="w-full mt-5" />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
