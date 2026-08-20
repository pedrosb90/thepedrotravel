import { FlightDeals, Start, Testimonials } from "../components";
import Places from "../components/Places";

const Vuelos = () => {
  return (
    <>
      <div className="mt-[70px]">
        <Start />
      </div>
      <div className="mt-[40px]">
        <FlightDeals />
      </div>
      {/* <div className="mt-[60px]">
        <Places />
      </div> */}
      {/* <div className="mt-[90px]">
    <Testimonials/>
    </div> */}
    </>
  );
};

export default Vuelos;
