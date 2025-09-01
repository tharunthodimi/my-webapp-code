// content.js
import React from "react";

export const DARK_GRAY = "#2C2C2C";
export const LIGHT_BLUE = "#00AEEF";
export const WHITE = "#FFFFFF";

export const content = {
  home: (
    <div>
      <p>
        Welcome to Digital Ignite Technologies! Where AI innovation meets
        comprehensive software expertise.
      </p>
      <p>Transforming ideas into reality with innovative software solutions.</p>
      <h3>Our Expertise</h3>
      <p>
        At Digital Ignite Technologies, we specialize in delivering top-notch
        software solutions tailored to your business needs. Our team of experts
        is dedicated to providing exceptional service and innovative solutions.
      </p>
      <h3>Why Choose Us?</h3>
      <ul>
        <li>
          <strong>Innovative Solutions</strong>: We leverage the latest
          technologies to deliver cutting-edge solutions that drive results.
        </li>
        <li>
          <strong>Client-Centric Approach</strong>: We prioritize your needs and
          work closely with you to understand your unique requirements.
        </li>
        <li>
          <strong>Expert Team</strong>: Our team brings a wealth of experience
          and expertise to every project.
        </li>
        <li>
          <strong>Timely Delivery</strong>: We understand the importance of
          deadlines and strive to deliver projects on time.
        </li>
      </ul>
      <h3>Our Services</h3>
      <ul>
        <li>AI Solutions</li>
        <li>Software Development</li>
        <li>Data Analytics</li>
        <li>Cloud Solutions</li>
        <li>IT Consulting</li>
        <li>UI/UX Design</li>
        <li>Chatbot Development</li>
      </ul>
      <p>Ready to take your business to the next level? Contact us today!</p>
    </div>
  ),

  services: (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {/* Flip cards will be rendered inside App.js using data */}
      {/* Placeholder here */}
      <p>Services content goes here</p>
    </div>
  ),

  about: (
    <div>
      <h3>Welcome to Digital Ignite Technologies</h3>
      <p>
        Where innovation meets excellence! We are a startup dedicated to
        transforming the way businesses operate through cutting-edge software
        solutions.
      </p>
      <h4>Vision and Mission</h4>
      <h5>Vision</h5>
      <p>
        To be a global leader in software innovation, empowering businesses to
        achieve their full potential through technology.
      </p>
      <h5>Mission</h5>
      <p>To deliver exceptional software solutions that meet the unique needs of our clients.</p>
      <h4>Our Values</h4>
      <ul>
        <li>
          <strong>Innovation</strong>: We embrace change and continuously seek new ways to improve our solutions.
        </li>
        <li>
          <strong>Integrity</strong>: We conduct business with honesty and transparency.
        </li>
        <li>
          <strong>Excellence</strong>: We deliver high-quality solutions that exceed expectations.
        </li>
        <li>
          <strong>Customer Focus</strong>: We prioritize clients’ needs.
        </li>
        <li>
          <strong>Collaboration</strong>: We foster teamwork and collaboration.
        </li>
      </ul>
      <h4>Our Story</h4>
      <p>
        Digital Ignite Technologies was founded by passionate engineers and AI enthusiasts dedicated to innovative solutions.
      </p>
      <h4>Our Team</h4>
      <p>
        A skilled team with diverse backgrounds united by delivering exceptional solutions.
      </p>
    </div>
  ),

  contact: (
    <div>
      <h3>We'd love to hear from you!</h3>
      <p>Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>
      <h4>Get in touch</h4>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:digitalignitetech@gmail.com">digitalignitetech@gmail.com</a></li>
        <li><strong>Phone:</strong> +91 1234567890</li>
        <li><strong>Address:</strong> 1234 Ignite Lane, Tech City, Country</li>
      </ul>
      <h4>Follow us on</h4>
      <ul>
        <li><a href="https://www.linkedin.com/company/digital-ignite-technologies/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://twitter.com/DigitalIgniteTech" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.facebook.com/digitalignitetechnologies" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      </ul>
    </div>
  ),
};
