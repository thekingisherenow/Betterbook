import { ReactNode, useEffect, useState } from 'react'
import Header from './Header'
import { Transition } from '@headlessui/react'
import Sidebar from './Sidebar'
import { Fragment } from 'react'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const [showNav, setShowNav] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

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
                className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-36" : ""}`} >
                <div className='px-4 md:px-16'
                >
                    {children}
                </div>
            </main>

        </>
    )
}