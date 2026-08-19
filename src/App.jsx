import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import {
  Confirm,
  FlightExplore,
  Flights,
  Hotels,
  Packages,
  PassengerInfo,
  Payment,
  SeatSelect,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    if (!document.querySelector('script[src*="emrldco.com"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("nowprocket", "");
      script.setAttribute("data-noptimize", "1");
      script.setAttribute("data-cfasync", "false");
      script.setAttribute("data-wpfc-render", "false");
      script.setAttribute("seraph-accel-crit", "1");
      script.setAttribute("data-no-defer", "1");
      script.setAttribute("data-cmp-ab", "2");
      script.src = "https://emrldco.com/NTY0MTIz.js?t=564123";
      document.head.appendChild(script);
    }
  }, []);
  return (
    <>
      <div className="font-Nunito overflow-hidden max-w-[1440px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/explore" element={<FlightExplore />} />
          <Route path="/passenger-info" element={<PassengerInfo />} />
          <Route path="/seat-selection" element={<SeatSelect />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default App;
