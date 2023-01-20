import { ReactNode, useEffect, useState } from 'react'
import Header from './Header'
import { Transition } from '@headlessui/react'
import Sidebar from './Sidebar'
import { Fragment } from 'react'
import BetSlip from './Betslip/BetSlip'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const [showNav, setShowNav] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [showBetslip, setShowBetslip] = useState(false)

    function handleResize() {
        if (innerWidth <= 640) {
            setIsMobile(true)
            setShowNav(false)
        }
        else {
            setIsMobile(false)
            setShowNav(true)
        }
    }

    useEffect(() => {
        if (typeof window != 'undefined') {
            addEventListener('resize', handleResize)
        }

        return () => {
            removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <Header navState={[showNav, setShowNav]} />
            <Transition
                show={showNav}
                as={Fragment}
                enter='transform transition duration duration-[400ms]'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition duration duration-[400ms] ease-in-out'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
            >
                <Sidebar showNav={showNav} />
            </Transition>
            <main
                className={`relative pt-12 transition-all w-screen h-screen duration-[400ms] flex ${showNav && !isMobile ? "pl-36" : ""}`} >
                <>
                    <div className='px-1 md:px-2  '>
                        {children}
                    </div>
                    {!showBetslip && <div className='h-60 p-4 '>
                        {/* BetSlipToggleButton  */}
                        <ArrowLeftOnRectangleIcon onClick={() => setShowBetslip(!showBetslip)}
                            className='w-8 h-8 cursor-pointer flex items-center font-extrabold'
                        />
                    </div>}

                    {showBetslip && <div className='bg-slate-300 dark:bg-zinc-800'>
                        <BetSlip betslipState={[showBetslip, setShowBetslip]} />
                    </div>}
                </>
            </main>
        </>
    )
}