'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative">
      <div
        className="gradient-yellow absolute top-0 left-0 w-full h-[76px]"
        style={{
          background: '#D0A70459',
          backgroundImage: 'radial-gradient(circle, #d0a70459 -200%, black 80%)',
        }}
      />

      <nav className="z-20 relative flex justify-between items-center w-full h-[76px] px-6 border-b border-gray-700 text-white">
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

       
        <div className="hidden lg:block">
          <Image src="/Navbar/logo.png" alt="Logo" width={120} height={26} />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Image src="/Dashboard.png" alt="Dashboard" width={99} height={36} />
          <Image src="/Cameras.png" alt="Cameras" width={99} height={36} />
          <Image src="/Scenes.png" alt="Scenes" width={89} height={36} />
          <Image src="/Incidents.png" alt="Incidents" width={100} height={36} />
          <Image src="/Users.png" alt="Users" width={79} height={36} />
        </div>

        <div className="flex items-center gap-2">
          <Image src="/Navbar/avatar.png" alt="User Avatar" width={30} height={30} className="rounded-full" />
          <div className="hidden sm:flex flex-col leading-4">
            <span className="text-sm font-medium whitespace-nowrap">Mohammed Ajhas</span>
            <span className="text-xs text-gray-300 whitespace-nowrap">ajhas@mandlac.com</span>
          </div>
        </div>
      </nav>

    
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-80 flex">
          <div className="w-64 bg-[#121212] p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <Image src="/Dashboard.png" alt="Dashboard" width={120} height={44} />
              <Image src="/Cameras.png" alt="Cameras" width={120} height={44} />
              <Image src="/Scenes.png" alt="Scenes" width={120} height={44} />
              <Image src="/Incidents.png" alt="Incidents" width={120} height={44} />
              <Image src="/Users.png" alt="Users" width={120} height={44} />
            </div>

            <div className="mt-auto pt-6 border-t border-gray-700 flex items-center gap-3">
              <Image src="/Navbar/avatar.png" alt="User Avatar" width={40} height={40} className="rounded-full" />
              <div>
                <p className="text-white font-semibold">Mohammed Ajhas</p>
                <p className="text-gray-400 text-sm">ajhas@mandlac.com</p>
              </div>
            </div>
          </div>

          <div
            className="flex-grow"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  )
}
