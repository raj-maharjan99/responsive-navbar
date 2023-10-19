import React from "react";

function Hero() {
  return (
    <>
      <div className=" @apply w-[1240px] flex justify-between">
        <div className="img-css">
          <img src="LeeMinHo.png" alt="" />
        </div>

        <div className="@apply flex flex-col gap-[50px] mt-[300px]">
          <div className="h-100px w-100px text-[50px] font-[800] font-['system-ui']  ">
            Winter Men's Jacket
          </div>
          <div className="text-[20px] font-[500] font-['system-ui']">
            Discover the COllection As Styled By Fashion In Our New Seasion
            Campaign
          </div>
          <div className="bttn">
            <button className="btn">SHOP NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
