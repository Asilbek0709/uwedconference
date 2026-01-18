"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useTranslation } from "react-i18next"

export default function Variation4_2024(){

    const { t } = useTranslation()

    return(
        <section className="variation4-2024">
            <Header></Header>
                <div className="articles-container">
                    <div className="article-card">
                        <div className="article-info">
                            <h1>CHALLENGES OF TEACHING ENGLISH LANGUAGE TO VISUALLY IMPAIRED STUDENTS AT A UNIVERSITY LEVEL IN UZBEKISTAN</h1>
                            <p>Vokhidova Nargiza Nuridinovna & Davlatova Kamola Kholmurod qizi</p>
                        </div>
                        <div className="article-navigation">
                            <p>5-10</p>
                            <div className="buttons">
                                <a href="/conference2024-files/61.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2024-files/61.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>INCORPORATING GLOBAL ISSUES INTO TEACHING ESP FOR POLITICAL SCIENCE AND INTERNATIONAL RELATIONS STUDENTS</h1>
                            <p>Razakova Munira Turaevna</p>
                        </div>
                        <div className="article-navigation">
                            <p>11-15</p>
                            <div className="buttons">
                                <a href="/conference2024-files/62.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2024-files/62.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>INTEGRATION OF SUSTAINABLE DEVELOPMENT GOALS INTO FOREIGN LANGUAGES TEACHING: GLOBAL PROSPECTS AND LOCAL IMPLEMENTATIONS</h1>
                            <p>Kemalbayeva Tavus Begench Gizi</p>
                        </div>
                        <div className="article-navigation">
                            <p>17-21</p>
                            <div className="buttons">
                                <a href="/conference2024-files/63.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2024-files/63.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>TEACHING FOREIGN LANGAGES THROUGH THE LENS OF SUSTAINABLE DEVELOPMENT GOALS: IDEAS AND PRACTICES.</h1>
                            <p>Dildora Ilkhamovna Khallyeva</p>
                        </div>
                        <div className="article-navigation">
                            <p>22-27</p>
                            <div className="buttons">
                                <a href="/conference2024-files/64.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2024-files/64.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>SUSTAINABLE DEVELOPMENT GOALS IN ENGLISH LANGUAGE TEACHING</h1>
                            <p>Djumaniyazova Djeren Kakadjanovna</p>
                        </div>
                        <div className="article-navigation">
                            <p>28-34</p>
                            <div className="buttons">
                                <a href="/conference2024-files/65.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2024-files/65.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>TEACHING ENGLISH USING SDG TOPICS THROUGH CRITICAL THINKING AND ENCOURAGING HIGHER-ORDER THINKING OF STUDENTS</h1>
                            <p>E. Borisova</p>
                        </div>
                        <div className="article-navigation">
                            <p>35-39</p>
                            <div className="buttons">
                                <a href="/conference2024-files/66.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2024-files/66.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>Televideniyada sport reportajlari rivojlanish konsepsiyalari</h1>
                            <p>U. R. Lutfullaevich</p>
                        </div>
                        <div className="article-navigation">
                            <p>40-48</p>
                            <div className="buttons">
                                <a href="/conference2024-files/67.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2024-files/67.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="article-info">
                            <h1>Mediada futbol transferlarini yoritilishi</h1>
                            <p>U. R. Lutfullaevich</p>
                        </div>
                        <div className="article-navigation">
                            <p>49-53</p>
                            <div className="buttons">
                                <a href="/conference2024-files/68.pdf" target="_blank">{t("view")}</a>
                                <a href="/conference2024-files/68.pdf" download={true}>{t("upload")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </section>
    )
}