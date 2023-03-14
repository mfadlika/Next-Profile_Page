import Link from "next/link";
import { ReactElement, useState } from "react";
import HeaderModal from "./HeaderModal";

export default function Header(): ReactElement {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function onClick(): void {
    setIsClicked(!isClicked);
  }

  return (
    <header id="header" className="justify-center sticky top-0 z-50">
      <nav className="flex flex-wrap justify-between items-center xl:mx-auto max-w-screen-xl h-full max-xl:mx-1.5">
        <div onClick={isClicked == true ? onClick : (): void => {}}>
          <Link href="/" className="flex items-center">
            <span className="brand animate__animated animate__tada self-center text-5xl max-md:text-4xl font-semibold text-black">
              fadlim · space
            </span>
          </Link>
        </div>
        <button
          onClick={onClick}
          id="nav-icon3"
          className={isClicked ? "open" : "animate__animated animate__tada"}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <HeaderModal isClicked={isClicked} onClick={onClick}></HeaderModal>
    </header>
  );
}
