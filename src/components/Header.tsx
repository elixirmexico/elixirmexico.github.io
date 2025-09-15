import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img src="./logo.svg" alt="Elixir México Logo" className="w-12 h-12" />
              <h1 className="text-2xl font-bold text-purple-600">
                Elixir México
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-purple-600 transition-colors">
              Inicio
            </a>
            <a href="#comunidad" className="text-gray-700 hover:text-purple-600 transition-colors">
              Comunidad
            </a>
            <a href="#eventos" className="text-gray-700 hover:text-purple-600 transition-colors">
              Eventos
            </a>
            <a href="#recursos" className="text-gray-700 hover:text-purple-600 transition-colors">
              Recursos
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <button className="btn-primary">
              Únete a la Comunidad
            </button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {/* Logo en menú móvil */}
              <div className="flex justify-center py-4 border-b border-gray-200 mb-4">
                <img src="./logo.svg" alt="Elixir México Logo" className="w-16 h-16" />
              </div>
              
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Inicio
              </a>
              {/* <a href="#comunidad" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Comunidad
              </a> */}
              <a href="#eventos" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Eventos
              </a>
              <a href="#recursos" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Recursos
              </a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Contacto
              </a>
              <div className="pt-4">
                <button className="btn-primary w-full">
                  Únete a la Comunidad
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
