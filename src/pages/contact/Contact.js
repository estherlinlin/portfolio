import React, { Component } from "react";
import "./Contact.scss";
import { required, email } from "../../util/validators";
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

import Toasts from "../../components/toasts/Toasts";

class contact extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    contactForm: {
      email: {
        value: "",
        valid: false,
        validators: [required, email],
      },
      name: {
        value: "",
        valid: false,
        validators: [required, email],
      },
      content: {
        value: "",
        valid: false,
        validators: [required],
      },
      formIsValid: false,
    },
    toastText: "",
    toastStyle: "",
  };

  inputChangeHandler = (event, value) => {
    const target = event.target;
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.contactForm[target.id].validators) {
        isValid = isValid && validator(target.value);
      }
      const updatedForm = {
        ...prevState.contactForm,
        [target.id]: {
          ...prevState.contactForm[target.id],
          valid: isValid,
          value: target.value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        contactForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  sendMailHandler = () => {
    console.log(this.state.contactForm);
    const apiUrl ='https://sendmail-node-api.herokuapp.com/sendmail';
    // const apiUrl ='http://localhost:4200/sendmail';
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.contactForm.email.value,
        name: this.state.contactForm.name.value,
        content: this.state.contactForm.content.value,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Fail to send out the mail. ");
        }
        return res;
      })
      .then((resData) => {
        this.setState({
          toastText: "信件成功寄出，感謝您的來信！",
          toastStyle: "toast-success"
        });

        this.child.current.openToast(true);
        console.log("success");
        console.log(resData);
      })
      .catch((err) => {
        this.setState({
          toastText: "信件寄出失敗！",
          toastStyle: "toast-fail"
        });

        this.child.current.openToast();
        console.log("fail");
        console.log(err);
      });
  };

  render() {
    return (
      <section className="section-contact" id="contact">
        {/* <div className="row"> */}
        <div className="contact">
          <div className="contact__detail">
            <div className="contact__info">
              <div className="u-mb-md">
                <h2 className="heading-secondary">Contact me</h2>
              </div>
              <div className="contact__list">
                <ul className="contact__list-item">
                  <li>
                    <div className="contact__icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>
                        <a href="mailto:pinchunchun112@gmail.com">
                          pinchunchun112@gmail.com
                        </a>
                      </span>
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

              <div className="contact__media">
                <a href="" className="contact__media-link" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="" className="contact__media-link" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="" className="contact__media-link" target="_blank">
                  <FontAwesomeIcon icon={faCodepen} />
                </a>
              </div>
            </div>
          </div>
          <div className="contact__form">
            <div className="u-mb-md">
              <h2 className="heading-secondary">Leave a message</h2>
            </div>
            <form action="#" className="form" onSubmit={this.sendMailHandler}>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Name/Company"
                  id="name"
                  onChange={this.inputChangeHandler}
                  value={this.state.contactForm["name"].value}
                  required
                />
                <label htmlFor="name" className="form__label">
                  Name/Company
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  onChange={this.inputChangeHandler}
                  value={this.state.contactForm["email"].value}
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group u-mb-md">
                <textarea
                  id="content"
                  className="form__input"
                  placeholder="Leave a message"
                  onChange={this.inputChangeHandler}
                  value={this.state.contactForm["content"].value}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn--yellow">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
        <Toasts
          ref={this.child}
          toastText={this.state.toastText}
          toastStyle={this.state.toastStyle}
        ></Toasts>
      </section>
    );
  }
}

export default contact;
