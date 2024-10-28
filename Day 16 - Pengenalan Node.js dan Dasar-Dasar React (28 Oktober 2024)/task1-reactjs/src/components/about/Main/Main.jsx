import teamMembers from "../../../data/teamMembers";
import TeamCard from "./TeamCard";

function Main() {
  return (
    <main>
      <section className="hero">
        <h1>About</h1>
        <div className="breadcrumb">Home / About</div>
      </section>

      <section className="about-section">
        <div className="about-image">
          <img src="https://qubisastorage.blob.core.windows.net/files/microlearnings/6294/images/img480/6294-20220222230818186.jpg" alt="Team working together" />
        </div>
        <div className="about-content">
          <h2 className="section-title">\ About us \</h2>
          <h3>One of the Fastest Way to Business Growth</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed.
          </p>
          <div className="contact-container">
            <i class="contact-icon bi bi-person-lines-fill"></i>
            <div className="contact-info">
              <h4 className="contact-text">Get Instant Professional Advice</h4>
              <p className="contact-text">Ready to Help: +1 234 567 890</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">\ Team \</h2>
        <h3>Our Leaders</h3>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard member={member} key={member.id}/>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h3 className="quote">
          "Some of the History of Our Company is that we are Catching up through
          Video"
        </h3>
        <a href="#" className="get-in-touch">
          Get In Touch
        </a>
      </section>
    </main>
  );
}

export default Main;
