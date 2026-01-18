"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useTranslation } from "react-i18next"

export default function Variation3_2025(){

    const { t } = useTranslation()

    return(
        <section className="variation3-2025">
            <Header></Header>
             <div className="articles-container">
                    <div className="article-card">
                        <div className="article-info">
                            <h1>TRAINING CONFERENCE INTERPRETERS IN UZBEKISTAN: CURRENT CHALLENGES AND PROSPECTS</h1>
                            <p>Bakhodir Abdumannanovich Samadov</p>
                        </div>
                        <div className="article-navigation">
                            <p>403-409</p>
                            <div className="buttons">
                                <a href="/conference2025-files/50.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2025-files/50.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>ТЕОРИЯ И ПРАКТИКА ПИСЬМЕННОГО ПЕРЕВОДА С АНГЛИЙСКОГО ЯЗЫКА НА РУССКИЙ ЯЗЫК</h1>
                            <p>Акмалова Зульфия Нигматуллаевна</p>
                        </div>
                        <div className="article-navigation">
                            <p>410-414</p>
                            <div className="buttons">
                                <a href="/conference2025-files/51.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2025-files/51.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>ПЕРЕДАЧА ИГРЫ СЛОВ</h1>
                            <p>Абдуллаев А.Р.</p>
                        </div>
                        <div className="article-navigation">
                            <p>415-424</p>
                            <div className="buttons">
                                <a href="/conference2025-files/52.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2025-files/52.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                                <h1>TARJIMADA MODAL SINTAKSEMALARNING O’RNI VA VARIANTLILIGI</h1>
                                <p>Tashpulatova Nafisa Baxtiyarovna</p>
                        </div>
                        <div className="article-navigation">
                            <p>425-434</p>
                            <div className="buttons">
                                <a href="/conference2025-files/53.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2025-files/53.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </section>
    )
}