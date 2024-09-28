const FeaturedProducts = () => {
  return (
    <section id="Featured-Products" className="py-8 px-4">
      <div className="text-center m-10">
        <h2 className="text-[#1A0B5B] font-bold text-5xl">Featured Products</h2>
      </div>

      <div className="flex justify-center space-x-2">
        <div className="bg-[#FECEDE] rounded-3xl text-center w-2/4 p-4">
          <img src="/images/Headset1.png" alt="" className="mx-auto" />
          <p className="mt-4 text-xs md:text-lg">HeadPhones</p>
        </div>
        <div className="bg-[#FECEDE] rounded-3xl text-center w-2/4 p-4">
          <img src="/images/laptop.png" alt="" className="mx-auto" />
          <p className="mt-4 text-xs md:text-lg">Laptops</p>
        </div>
        <div className="bg-[#FECEDE] rounded-3xl text-center w-2/4 p-4">
          <img src="/images/motherboard.png" alt="" className="mx-auto" />
          <p className="mt-4 text-xs md:text-lg">MotherBoards</p>
        </div>
      </div>
      <div className="text-center  mt-5">
        <img src="/images/Group 169.png" alt="" className="w-48 inline-block" />
      </div>
    </section>
  );
};

export default FeaturedProducts;
