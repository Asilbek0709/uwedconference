"use client"

import Link from "next/link"
import "../globals.css"
import { useTranslation } from "react-i18next";

export default function Footer() {
    
    const { t, i18n } = useTranslation();

    return(
        <footer>
                <section className="footer-logo">
                    <img src="/favicon.jpg" alt="" />
                </section>
                <section className="footer-navigation">
                    <h1>Web-pages</h1>
                    <div className="navigation">
                        <Link className="footer-link" href={"/"}>{t("homepage")}</Link>
                        <Link className="footer-link" href={"/conference-variation"}>{t("conferencepage")}</Link>
                        <Link className="footer-link" href={"/contact"}>{t("contactpage")}</Link>
                    </div>
                </section>
                <section className="footer-contact">
                    <h1>Contacts</h1>
                    <div className="footer-contact-info">
                        <p><span className="colored">{t("phone")}</span>: (+998 71) 267-39-50; (+998 71) 267-67-69</p>
                        <p><span className="colored">{t("adress")}</span>: Email</p>
                        <p><span className="colored">{t("email")}</span>: {t("location")}</p>
                    </div>
                </section>
        </footer>
    )
}