import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import Button from "react-bootstrap/Button";

const contact = () => (
  <section class="section-contact" id="contact">
    {/* <div class="row"> */}
      <div class="contact">
      <div className="contact__detail">
        <div className="contact__info">
          <div class="u-mb-md">
            <h2 class="heading-secondary">Contact me</h2>
          </div>
          <div className="contact__list">
            <ul className="contact__list-item">
              <li>
                <div className="contact__icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span><a href="mailto:pinchunchun112@gmail.com">pinchunchun112@gmail.com</a></span>
                </div>
              </li>
              <li>
                <div className="contact__icon">
                  <FontAwesomeIcon icon={faPhone} />
                  <span> 0935-993078</span>
                </div>
              </li>
              <li>
                <div className="contact__icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span> Taiwan, Taipei</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="contact__media">
            <a href="" class="contact__media-link" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="" class="contact__media-link" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="" class="contact__media-link" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>
        </div>
      </div>
      <div class="contact__form">
        <div class="u-mb-md">
          <h2 class="heading-secondary">Leave a message</h2>
        </div>
        <form action="#" class="form">
          <div class="form__group">
            <input
              type="text"
              class="form__input"
              placeholder="Full name"
              id="name"
              required
            />
            <label for="name" class="form__label">
              Full name
            </label>
          </div>
          <div class="form__group">
            <input
              type="email"
              class="form__input"
              placeholder="Email address"
              id="email"
              required
            />
            <label for="email" class="form__label">
              Email address
            </label>
          </div>
          <div class="form__group u-mb-md">
            <textarea
              class="form__input"
              placeholder="Leave a message"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn--yellow">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* </div> */}
  </section>
);

export default contact;
