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

      <div className="w-[120rem] mx-auto font-inter">
        <Navbar />
        <div className="flex">
          <div >
            <Sidebar />
          </div>
          <main
            className="dark:bg-DarkBackground w-[81.62rem] mx-auto ">
              {children}
          </main>
          <div className="w-[23.82rem] dark:bg-DarkSecondaryBackground h-full ml-auto">
            <BetSlip />
          </div>
        </div>
      </div>
    </>
  );
}
