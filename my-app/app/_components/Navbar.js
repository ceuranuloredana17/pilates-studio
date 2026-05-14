'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Acasă' },
  { href: '/despre-noi', label: 'Despre Noi' },
  { href: '/clase', label: 'Clase' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/blog', label: 'Blog' },
  { href: '/satisfactie', label: 'Satisfacție' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-rose-100">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-serif font-bold text-rose-700">Body Studio</span>
          <span className="text-xs tracking-widest text-gray-500 uppercase">Pilates</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-rose-700 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Rezervă btn */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-rose-700 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-rose-800 transition-colors"
        >
          Rezervă o ședință
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Deschide meniu"
        >
          <span className="block w-6 h-0.5 bg-gray-800 transition-all" />
          <span className="block w-6 h-0.5 bg-gray-800 transition-all" />
          <span className="block w-6 h-0.5 bg-gray-800 transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-rose-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 mt-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-rose-700 py-1 border-b border-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-4 inline-block bg-rose-700 text-white text-sm px-5 py-2 rounded-full"
            onClick={() => setOpen(false)}
          >
            Rezervă o ședință
          </Link>
        </div>
      )}
    </header>
  )
}
