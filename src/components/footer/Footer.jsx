import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-primary flex flex-col justify-center items-center gap-2 py-4 text-slate-50 sm:static">
      <div className="w-max flex gap-3 uppercase  sm:text-sm text-[12px]">
        <h1 className="w-max sm:px-4 px-2 border-r-[1px] border-slate-200">
          Privacy Poucy
        </h1>
        <h1 className="w-max sm:px-4 px-2 border-r-[1px] border-slate-200">
          TERM OF SERVICE
        </h1>
        <h1 className="w-max sm:px-4 px-2 border-r-[1px] border-slate-200">
          About Snap Up
        </h1>
      </div>
      <div className="w-max mx-auto sm:text-[13px] text-slate-100 text-[12px]">
        <h1>@2023 Shopee All Right Reserved</h1>
      </div>
      <div className="w-max mx-auto sm:text-[13px] text-slate-100 text-[12px]">
        <h1>By Abdul Mukti</h1>
      </div>
    </footer>
  );
}

export default Footer;
