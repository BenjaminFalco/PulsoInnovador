import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur border-b border-white/10 text-white z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO PULSO INNOVADOR */}
        <a href="#inicio" className="flex items-center gap-2">
       <img 
  src="/favicon.png" 
  alt="Pulso Innovador Logo" 
  className="h-8 w-8 rounded-full object-cover shadow-lg"
/>

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              Pulso Innovador
            </span>
            <span className="text-[11px] text-gray-300">
              Consultores
            </span>
          </div>
        </a>

        {/* HAMBURGUESA MOBILE */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú de navegación"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#inicio" className="hover:text-yellow-400 transition">
            Inicio
          </a>
          <a href="#servicios" className="hover:text-yellow-400 transition">
            Servicios
          </a>
          <a href="#metodologia" className="hover:text-yellow-400 transition">
            Metodología
          </a>
          <a href="#casos-exito" className="hover:text-yellow-400 transition">
            Casos de éxito
          </a>
          <a href="#convocatorias" className="hover:text-yellow-400 transition">
            Convocatorias activas
          </a>
          <a href="#equipo" className="hover:text-yellow-400 transition">
            Equipo
          </a>
          <a href="#contacto" className="hover:text-yellow-400 transition">
            Contacto
          </a>

          {/* CTA WHATSAPP */}
          <a
            href="https://wa.me/56952039060"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 px-4 py-2 rounded font-semibold hover:bg-green-600 transition shadow-md"
          >
            Agenda una reunión
          </a>
        </nav>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 pb-4 flex flex-col text-base gap-3 border-t border-white/10">
          <a
            href="#inicio"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Servicios
          </a>
          <a
            href="#metodologia"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Metodología
          </a>
          <a
            href="#casos-exito"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Casos de éxito
          </a>
          <a
            href="#convocatorias"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Convocatorias activas
          </a>
          <a
            href="#equipo"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Equipo
          </a>
          <a
            href="#contacto"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Contacto
          </a>

          <a
            href="https://wa.me/56952039060"
            target="_blank"
            rel="noreferrer"
            className="mt-2 bg-green-500 px-4 py-2 rounded font-semibold text-center hover:bg-green-600 transition shadow-md"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
