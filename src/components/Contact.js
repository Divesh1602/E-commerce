import logo from '../assets/pexels-pixabay-269077.jpg';

function Contact() {
  return (
    <>
      <section class="contact">
        <div class="section-center clearfix">
          <article class="contact-info">
            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-location-arrow"></i>
                </span>
                address
              </h4>
              <h4 class="contact-text">
                Akshya Nagar 1st Block 1st Cross,<br></br> Rammurthy nagar,
                Bangalore-560016
              </h4>
            </div>

            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                email
              </h4>
              <h4 class="contact-text">nacelo3391@mustbeit.com</h4>
            </div>

            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-phone"></i>
                </span>
                Phone
              </h4>
              <h4 class="contact-text">+91 8349751268</h4>
            </div>
          </article>

          <article class="contact-form">
            <h3>contact us</h3>
            <form action="https://formspree.io/f/xzbwvbjn" method="post">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="NAME"
                  class="form-control"
                  name="name"
                />
                <input
                  type="email"
                  placeholder="email"
                  class="form-control"
                  name="email"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  class="form-control"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" class="submit-btn btn">
                submit here
              </button>
            </form>
          </article>
        </div>
      </section>
      {/* about */}
      <section>
        <div class="section-center clearfix">
          <article class="about-img">
            <div class="about-picture-container">
              <img src={logo} alt="about" class="about-picture" />
            </div>
          </article>

          <article class="about-info">
            <div class="section-title">
              <h3>about us</h3>
            </div>

            <p class="about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              tempore! Quos quisquam soluta quod non perspiciatis expedita quasi
              optio obcaecati magni incidunt exercitationem neque sit, vitae a
              sed rem necessitatibus dolor eius aut similique ex. Hic, nisi.
              Molestias recusandae vel ad, quia odio doloremque maxime nam
              assumenda? Veniam natus, saepe ut expedita neque, odio, eveniet
              tenetur voluptatum eius alias sunt.
            </p>
            <p class="about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              tempore! Quos quisquam soluta quod non perspiciatis expedita quasi
              optio obcaecati magni incidunt exercitationem neque sit, vitae a
              sed rem necessitatibus dolor eius aut similique ex. Hic, nisi.
              Molestias recusandae vel ad, quia odio doloremque maxime nam
              assumenda? Veniam natus, saepe ut expedita neque, odio, eveniet
              tenetur voluptatum eius alias sunt.
            </p>
            <a href="#" class="btn">
              learn more
            </a>
          </article>
        </div>
      </section>

      <footer class="footer">
        <div class="section-center">
          <div className="footer-text">
            <h2 className="company">Terms & Conditions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              tempore! Quos quisquam soluta quod non perspiciatis expedita quasi
              optio obcaecati magni incidunt exercitationem neque sit, vitae a
              sed rem necessitatibus dolor eius aut similique ex. Hic, nisi.
              Molestias recusandae vel ad, quia odio doloremque maxime nam
              assumenda? Veniam natus, saepe ut expedita neque, odio, eveniet
              tenetur voluptatum eius alias sunt.
            </p>
          </div>
          <h4 class="footer-text">
            &copy; <span>2023</span>&nbsp;
            <span class="company">E-commerce</span>&nbsp; all rights reserved
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Contact;
