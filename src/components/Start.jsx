import { useEffect } from "react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import { suggestions } from "../data/constant";

const Start = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   // const scriptPanel = document.createElement("scriptPanel");
  //   script.src =
  //     "https://tpwdgt.com/content?currency=usd&trs=564123&shmarker=763679&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2345DE58ff&color_button=%2345DE58FF&color_icons=%2345DE58FF&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C400&color_focused=%2332a8dd&border_radius=13&no_labels=true&plain=true&promo_id=7879&campaign_id=100";
  //   // scriptPanel.src =
  //   //   "https://tpwdgt.com/content?currency=usd&trs=564123&shmarker=763679&destination=MAD&target_host=www.aviasales.com%2Fsearch&locale=en&limit=6&powered_by=true&primary=%230085FF&promo_id=4044&campaign_id=100";
  //   script.async = true;
  //   script.charset = "utf-8";

  //   document.getElementById("aviasales-widget").appendChild(script);
  //   // document.getElementById("aviasales-widgetII").appendChild(scriptPanel);

  //   return () => {
  //     document.getElementById("aviasales-widget").innerHTML = "";
  //     // document.getElementById("aviasales-widgetII").innerHTML = "";
  //   };
  // }, []);
  const KiwiWidget = () => {
    useEffect(() => {
      const container = document.getElementById("kiwi-widget");

      if (!container) return;

      const script = document.createElement("script");
      script.src =
        "https://tpwdgt.com/content?currency=usd&trs=564123&shmarker=763679&powered_by=true&locale=es&from_name=montevideo_uy&show_header=true&limit=7&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=4478";

      script.async = true;
      script.charset = "utf-8";

      container.appendChild(script);

      return () => {
        script.remove();
      };
    }, []);

    return <div id="kiwi-widget" />;
  };
  return (
    <div>
      <header className="flex flex-col items-center relative w-full h-[400px] px-7 py-4">
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl text-center leading-[55px] sm:leading-[70px] md:leading-[90px] text-gradient">
            Tu viaje empieza con los mejores vuelos <br />
          </h1>
        </div>
        <div className="flex items-center justify-between pt-9">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Aprovechá
            <br className=" block sm:hidden " /> las mejores{" "}
            <span className="text-[#605DEC]">tarifas</span>
          </p>
        </div>
      </header>
      <KiwiWidget />
    </div>
  );
};

export default Start;
