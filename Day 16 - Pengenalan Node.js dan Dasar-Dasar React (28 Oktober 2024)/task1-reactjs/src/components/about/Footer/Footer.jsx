import Form from "./Form";

function Footer() {
  return (
    <footer>
      <div className="footer-about">
        <h3>About Us</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at.
        </p>
        <div className="social-links">
          <a href="#">
            <i className="social-icon bi bi-linkedin"></i>
          </a>
          <a href="#">
            <i className="social-icon bi bi-instagram"></i>
          </a>
          <a href="#">
            <i className="social-icon bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="social-icon bi bi-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-services">
        <h3>Services</h3>
        <ul>
          <li>Web Design/Development</li>
          <li>App Development</li>
          <li>UI/UX Design</li>
          <li>Website Migration</li>
        </ul>
      </div>
      <div className="footer-career">
        <h3>Career</h3>
        <ul>
          <li>React.js Dev.</li>
          <li>WordPress Dev.</li>
          <li>Python Developer</li>
        </ul>
      </div>
      <div className="footer-subscribe">
        <h3>Subscribe Us</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable
        </p>
        <Form />  
      </div>
    </footer>
  );
}

export default Footer;
