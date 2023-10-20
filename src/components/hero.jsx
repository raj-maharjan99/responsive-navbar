import React from "react";

function Hero() {
  return (
    <>
      <div className=" @apply w-[1240px] flex justify-between">
        <div className="img-css">
          <img src="LeeMinHo.png" alt="" />
        </div>

        <div className="@apply flex flex-col gap-[50px] mt-[250px]">
          <div className="h-100px w-100px  leading-[60px] text-[60px] font-[800] font-['system-ui']  ">
            Winter <br />
            Men's Jacket
          </div>
          <div className="text-[20px] font-[500] font-['system-ui']">
            Discover the COllection As Styled By Fashion In Our New Seasion
            Campaign
          </div>
          <div>
            <button className="@apply font-[800]  rounded-[20px_5px] p-[10px] border-2 border-solid border-[black]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
