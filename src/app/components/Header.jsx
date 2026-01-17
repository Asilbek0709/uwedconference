"use client";

import "../globals.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const langRef = useRef(null);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <div className="left-container">
        <img src="/favicon.jpg" alt="Logo" />
      </div>

      {/* DESKTOP NAV */}
      <div className="header-navigation">
        <Link className="header-link" href="/">
          {t("homepage")}
        </Link>
        <Link className="header-link" href="/conference-variation">
          {t("conferencepage")}
        </Link>
        <Link className="header-hover-link" href="/contact">
          {t("contactpage")}
        </Link>

        {/* LANGUAGE */}
        <div className="language-dropdown" ref={langRef}>
          <button
            className="language-dropdown-button"
            onClick={() => setLangOpen(!langOpen)}
            aria-expanded={langOpen}
          >
            {currentLang.toUpperCase()}
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          {langOpen && (
            <div className="language-dropdown-menu">
              {["uz", "en", "ru"].map((lang) => (
                <button
                  key={lang}
                  className={`language-dropdown-button ${
                    currentLang === lang ? "active" : ""
                  }`}
                  onClick={() => changeLang(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BURGER */}
      <button
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* MOBILE MENU */}
      <nav className={`mobileMenu ${menuOpen ? "show" : ""}`}>
        <Link className="mobile-link" href="/" onClick={() => setMenuOpen(false)}>
          {t("homepage")}
        </Link>
        <Link
          className="mobile-link"
          href="/conference-variation"
          onClick={() => setMenuOpen(false)}
        >
          {t("conferencepage")}
        </Link>
        <Link
          className="mobile-link"
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          {t("contactpage")}
        </Link>

        {/* MOBILE LANG */}
        <div className="language-dropdown mobile">
          {["uz", "en", "ru"].map((lang) => (
            <button
              key={lang}
              className={`language-dropdown-button ${
                currentLang === lang ? "active" : ""
              }`}
              onClick={() => changeLang(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
