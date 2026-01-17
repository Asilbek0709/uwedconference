"use client"


import Link from "next/link";
import "../globals.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

const ConferencePage2 = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="conference-page">
        <div className="conf-page-img">
          <img src="/conference2025.png" alt="letter" />
          <p>On November 18, 2025, a scientific and practical conference entitled “Innovations in Foreign Language Teaching in the Era of Globalization and Sustainable Development” was held. The conference focused on modern approaches and innovative methods in foreign language teaching in the context of globalization and sustainable development. Participants shared their experiences, presented research findings, and discussed current issues related to improving the quality of language education.</p>
        </div>

        <section className="articles-sections">
          <h2 className="theme">Conference Sections</h2>
          <Link href="/variation1-2025" className="collection">
            Approaches and Practices in Professionally Oriented Foreign Language
            Teaching: Modern Trends and Prospects
          </Link>
          <br />
          <Link href="/variation2-2025" className="collection">
            Research on General Issues of Foreign Language Learning
          </Link>
          <br />
          <Link href="/variation3-2025" className="collection">
            Theoretical and Practical Issues of Interpretation and Translation in
            the Formation of Professional Communication
          </Link>
          <br />
          <Link href="/variation4-2025" className="collection">
            Integration of Sustainable Development Goals into Foreign Language
            Teaching: Global Prospects and Local Implementations
          </Link>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ConferencePage2;
