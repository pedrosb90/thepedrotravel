import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { right } from "../assets/icons";
import { msunrise, shangai, sunrise, sydney, temple } from "../assets/images";
import FlightDealsCard from "../container/FlightDealsCard";

const FlightDeals = () => {
  const navigate = useNavigate();

  const handleSeeAllClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate("/packages");
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://tpwdgt.com/content?currency=usd&trs=564123&shmarker=763679&searchUrl=www.aviasales.com%2Fsearch&locale=es&powered_by=true&origin=MVD&destination=MAD&one_way=false&only_direct=false&period=year&range=7%2C14&primary=%230C73FE&color_background=%23ffffff&dark=%23000000&light=%23FFFFFF&achieve=%2345AD35&promo_id=4041&campaign_id=100";

    script.async = true;
    script.charset = "utf-8";

    const container = document.getElementById("aviasales-widget-2");

    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <div className="px-8 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Aprovechá
            <br className=" block sm:hidden " /> las mejores tarifas a{" "}
            <span className="text-[#605DEC]">Europa</span>
          </p>
        </div>
        <br />
        <div id="aviasales-widget-2"></div>
      </div>
    </>
  );
};

export default FlightDeals;
