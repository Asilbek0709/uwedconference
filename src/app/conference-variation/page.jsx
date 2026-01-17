"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function ConferencesPage(){
    return(
        <section className="conferencesPage">
          <Header></Header>
          <section className="conferences">
          <Link className="more-info" href={"/conference-2025"}>
          <div className="conference-info">
            <div className="conference-img">
                <img src="/conference2025.png" alt="" />
            </div>
            <div className="conference-desc">
                <h1>INNOVATIONS IN FOREIGN LANGUAGE TEACHING IN THE ERA OF GLOBALIZATION AND SUSTAINABLE DEVELOPMENT</h1>
                <p>On November 18, 2025, a scientific and practical conference entitled “Innovations in Foreign Language Teaching in the Era of Globalization and Sustainable Development” was held. The conference focused on modern approaches and innovative methods in foreign language teaching in the context of globalization and sustainable development. Participants shared their experiences, presented research findings, and discussed current issues related to improving the quality of language education.</p>
                
                  More
                  <svg className="info-arrow"width="12"height="12"viewBox="4 4 16 16" aria-hidden>
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
                <h1>INNOVATIONS IN FOREIGN LANGUAGE TEACHING IN THE ERA OF GLOBALIZATION AND SUSTAINABLE DEVELOPMENT</h1>
                <p>Conference Thematic Sections: <br />Approaches and Practices in Professionally Oriented Foreign Language Teaching: Modern Trends and Prospects <br /> Research on General Issues of Foreign Language Learning <br />Theoretical and Practical Issues of Interpretation and Translation in the Formation of Professional Communication<br /> Integration of Sustainable Development Goals into Foreign Language Teaching: Global Prospects and Local Implementations</p>
                  More
                  <svg className="info-arrow"width="12"height="12"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                  </svg>
            </div>
          </div>
          </Link>
        </section>
            <Footer></Footer>
        </section>
    )
}