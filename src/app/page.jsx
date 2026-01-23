"use client"

import "./globals.css";
import Header from "./components/Header";
import Swiper from "./components/Slider";
import Footer from "./components/Footer";
import Link from "next/link";
import { useTranslation } from "react-i18next";




export default function Home() {

  const { t, i18n } = useTranslation();



  return (
    <div className="homepage">
        <Header></Header>
        <Swiper></Swiper>
        <div className="latest-conference">
          <div className="latest-conference-img">
            <img src="/conference2025.png" alt="" />
          </div>
          <div className="latest-conference-info">
            <h1>{t("last-conf-title")}</h1>
            <p>{t("last-conf-desc")}</p>
            <Link className="conference-hover-link" href={"/contact"}>{t("participate")}</Link>
          </div>
        </div>
        <section className="conferences">
          <Link className="more-info" href={"/conference-2025"}>
          <div className="conference-info">
            <div className="conference-img">
                <img src="/conference2025.png" alt="" />
            </div>
            <div className="conference-desc">
                <h1>{t("conf-2025-title")}</h1>
                <p>{t("conf-2025-desc")}</p>
                  {t("more")}
                  <svg className="info-arrow" style={{marginLeft: "0.5rem"}} width="12"height="12"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                  </svg>
            </div>
          </div>
          </Link>
          <Link className="more-info" href={"/conference-2024"}>
            <div className="conference-info">
              <div className="conference-img">
                  <img src="/banner.jpg" alt="" />
              </div>
              <div className="conference-desc">
                  <h1>{t("conf-2024-title")}</h1>
                  <p>{t("conf-2024-desc")} <br /> {t("conf-variation1")} <br /> {t("conf-variation2")} <br /> {t("conf-variation3")} <br /> {t("conf-variation4")}</p>
                    {t("more")}
                    <svg className="info-arrow" style={{marginLeft: "0.5rem"}} width="12"height="12"viewBox="4 4 16 16" aria-hidden>
                          <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>    
              </div>
            </div>
          </Link>
        </section>
        <Link href={"/contact"}>
          <div className="marquee">
                <div className="marquee-bg-text">
                  <span>{t("have-question")}</span><span>{t("have-question")}</span>
                </div>
                <div className="marquee-content">
                  <div className="marquee-arrow-cont">
                    <svg className="marquee-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
          </div>
        </Link>
        <Footer></Footer>
    </div>
  );
}
