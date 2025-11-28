import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleGoHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur border-b border-white/10 text-white z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO PULSO INNOVADOR */}
        <button
          onClick={handleGoHome}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/favicon.png"
            alt="Pulso Innovador Logo"
            className="h-8 w-8 rounded-full object-cover shadow-lg"
          />
          <div className="flex flex-col leading-tight text-left">
            <span className="text-sm font-semibold tracking-wide">
              Pulso Innovador
            </span>
            <span className="text-[11px] text-gray-300">Consultores</span>
          </div>
        </button>

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
          <button
            onClick={handleGoHome}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            Inicio
          </button>

          <button
            onClick={() => handleScrollTo("servicios")}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            Servicios
          </button>

          <button
            onClick={() => handleScrollTo("convocatorias")}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            Convocatorias activas
          </button>

          <button
            onClick={() => handleScrollTo("contacto")}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            Contacto
          </button>

          {/* CTA WHATSAPP */}
          <a
            href="https://wa.me/56952039060"
            target="_blank"
            rel="noreferrer"
className="bg-[#FFD700] px-4 py-2 rounded font-semibold text-black shadow-md hover:bg-[#E6C200] transition"
          >
            Agenda una reunión
          </a>
        </nav>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 pb-4 flex flex-col text-base gap-3 border-t border-white/10">
          <button
            className="text-left hover:text-yellow-400 transition"
            onClick={handleGoHome}
          >
            Inicio
          </button>

          <button
            className="text-left hover:text-yellow-400 transition"
            onClick={() => handleScrollTo("servicios")}
          >
            Servicios
          </button>

          <button
            className="text-left hover:text-yellow-400 transition"
            onClick={() => handleScrollTo("metodologia")}
          >
            Metodología
          </button>

          <button
            className="text-left hover:text-yellow-400 transition"
            onClick={() => handleScrollTo("casos-exito")}
          >
            Casos de éxito
          </button>

          <button
            className="text-left hover:text-yellow-400 transition"
            onClick={() => handleScrollTo("convocatorias")}
          >
            Convocatorias activas
          </button>

          <button
            className="text-left hover:text-yellow-400 transition"
            onClick={() => handleScrollTo("equipo")}
          >
            Equipo
          </button>

          <button
            className="text-left hover:text-yellow-400 transition"
            onClick={() => handleScrollTo("contacto")}
          >
            Contacto
          </button>

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
