import { ReactNode, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Sidebar from "../modules/Sidebar/Sidebar";
import { Fragment } from "react";
import BetSlip from "./Betslip/BetSlip";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar/Navbar";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showBetslip, setShowBetslip] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setIsMobile(true);
      setShowNav(false);
    } else {
      setIsMobile(false);
      setShowNav(true);
    }
  }

  useEffect(() => {
    if (typeof window != "undefined") {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <Head>
        <title>Bettor Book</title>
        <meta name="description" content=" Sports Betting" />
        <link rel="shortcut icon" href="/images/favIcon.png" />
      </Head>

      <Navbar navState={[showNav, setShowNav]} />
      <Transition
        show={showNav}
        as={Fragment}
        enter="transform transition duration duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition duration duration-[400ms] ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Sidebar navState={[showNav, setShowNav]} />
      </Transition>
      <main
        className={`relative pt-20 transition-all bg-gray-100 dark:bg-DarkBackground w-screen font-inter h-screen duration-[400ms] flex ${
          showNav && !isMobile ? "pl-40" : ""
        }`}
      >
        <>
          <div className="px-1 md:px-2 max-w-[1024px] mx-auto  ">
            {children}
          </div>
          {!showBetslip && (
            <div className="h-60 p-4 ">
              {/* BetSlipToggleButton  */}
              <ArrowLeftOnRectangleIcon
                onClick={() => setShowBetslip(!showBetslip)}
                className="w-8 h-8 cursor-pointer flex items-center "
              />
            </div>
          )}

          {showBetslip && (
            <div className="bg-slate-300 dark:bg-zinc-800">
              <BetSlip betslipState={[showBetslip, setShowBetslip]} />
            </div>
          )}
        </>
      </main>
    </>
  );
}
