import React from "react";

const Map = () => {
  return (
    <div className="map_Wrappersss">
      <iframe
        className="mapFrame"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        title="Himalayan Dine"
        src="https://maps.google.com/maps?width=596&amp;height=309&amp;hl=en&amp;q=Himalayan%20Dine,%20232%20Main%20St,%20Barrhead,%20Glasgow%20G78%201SN,%20United%20Kingdom%20Barrhead+(HIMALAYAN%20DINE%20-%20BARRHEAD)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      {/* <a href="https://www.embedmap.net/">embed google maps directions</a>{" "} */}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=27dd10053a3b336ad9167161fe8d639a86800df5"
      ></script>
    </div>
  );
};
export default Map;
