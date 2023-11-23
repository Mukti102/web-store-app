import React from "react";

function Footer() {
  return (
    <div className="w-full bg-primary flex flex-col justify-center items-center gap-2 py-5  text-slate-50">
      <div className="w-max flex gap-3 uppercase  text-sm">
        <h1 className="w-max px-4 border-r-[1px] border-slate-200">
          Privacy Poucy
        </h1>
        <h1 className="w-max px-4 border-r-[1px] border-slate-200">
          TERM OF SERVICE
        </h1>
        <h1 className="w-max px-4 border-r-[1px] border-slate-200">
          About Snap Up
        </h1>
      </div>
      <div className="w-max mx-auto text-[13px] text-slate-100">
        <h1>@2023 Shopee All Right Reserved</h1>
      </div>
    </div>
  );
}

export default Footer;
