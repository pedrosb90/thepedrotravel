import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { Vuelos, Lugares, Experiencias } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  console.log("RUTA ACTUAL:", location.pathname);

  return (
    <>
      <div className="font-Nunito overflow-hidden max-w-[1440px] mx-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<Vuelos />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/experiencias" element={<Experiencias />} />
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
