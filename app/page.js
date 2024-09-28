import FeaturedProducts from "./components/FeaturedProducts";
import Navbar from "./components/Navbar";
import MainSection from "./components/mainSection";

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar />
      <MainSection />
      <FeaturedProducts />
    </div>
  );
}
