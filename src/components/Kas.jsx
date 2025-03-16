import clsx from "clsx";
import ButtonPrimary from "./button/Primary";
import { React, useState } from "react";

export default function Kas() {
  const [kas, setKas] = useState(false);
  return (
    <>
      <ButtonPrimary title="Kas Masjid" click={() => setKas((prevState) => !prevState)} />
      <div className={clsx("fixed z-10 left-0 right-0 top-0 bottom-0 size-0 opacity-0 transition-all duration-300 bg-white", kas ? "size-full opacity-100" : "pointer-events-none")}>
        <i className="bi-x-lg absolute p-4 hover:text-red-500 duration-300 cursor-pointer text-gray-300" onClick={() => setKas((prevState) => !prevState)}></i>
        <iframe
          src="https://turabunnur.web.id/"
          className="w-full h-full"
        ></iframe>
      </div>
    </>
  );
}