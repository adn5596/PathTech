import React from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_qzadgol"; //Enter your Service ID
const TEMPLATE_ID = "template_q0rld89"; //Enter your Template ID
const PUBLIC_KEY = "5Cik99CQgcJtMAa4e"; //Enter your Public Key

const ContactUs = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  };
  return (
    <>
      <div>
        <div className="container-fluid contact py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-xl-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  {/* <div className="bg-light rounded p-5 mb-5">
                    <h4 className="text-primary mb-4">Get in Touch</h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="contact-add-item">
                          <div className="contact-icon text-primary mb-4">
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                          </div>
                          <div>
                            <h4>Address</h4>
                            <p className="mb-0">Malaz, Riyadh, Saudi Arabia</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-add-item">
                          <div className="contact-icon text-primary mb-4">
                            <i className="fas fa-envelope fa-2x"></i>
                          </div>
                          <div>
                            <h4>Mail Us</h4>
                            <p className="mb-0"> info@ptech-sa.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-add-item">
                          <div className="contact-icon text-primary mb-4">
                            <i className="fa fa-phone-alt fa-2x"></i>
                          </div>
                          <div>
                            <h4>Telephone</h4>
                            <p className="mb-0">(+966) 11 242 8436</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-add-item">
                          <div className="contact-icon text-primary mb-4">
                            <i className="fab fa-firefox-browser fa-2x"></i>
                          </div>
                          <div>
                            <h4> ptech-sa.com</h4>
                            <p className="mb-0"> (+966) 11 265 3066</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    className="bg-light p-5 rounded h-100 wow fadeInUp"
                    data-wow-delay="0.2s">
                    <h4 className="text-primary">Send Your Message</h4>
                    <p className="mb-4">
                      The contact form is currently inactive. Get a functional
                      and working contact form with Ajax - PHP in a few minutes.
                      Just copy and paste the files, add a little code and
                      you're done.
                      {/* <a
                        className="text-primary fw-bold"
                        href="https://htmlcodex.com/contact-form"
                      >
                        Download Now
                      </a> */}
                      .
                    </p>
                    <form class="" onSubmit={handleOnSubmit}>
                      <div className="row g-4">
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              name = "from_name"
                              type="text"
                              className="form-control border-0"
                              id="from_name"
                              placeholder="Your Name"
                            />
                            <label for="from_name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              name = "from_email"
                              type="email"
                              className="form-control border-0"
                              id="from_email"
                              placeholder="Your Email"
                            />
                            <label for="email">Your Email</label>
                          </div>
                        </div>
                        {/* <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control border-0"
                              id="phone"
                              placeholder="Phone"
                            />
                            <label for="phone">Your Phone</label>
                          </div>
                        </div> */}
                        {/* <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control border-0"
                              id="project"
                              placeholder="Project"
                            />
                            <label for="project">Your Project</label>
                          </div>
                        </div> */}
                        {/* <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control border-0"
                              id="subject"
                              placeholder="Subject"
                            />
                            <label for="subject">Subject</label>
                          </div>
                        </div> */}
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              name = "message"
                              className="form-control border-0"
                              placeholder="Leave a message here"
                              id="message"
                              style={{ height: "160px" }}
                            ></textarea>
                            <label for="message">Message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type='submit' className="btn btn-primary w-100 py-3">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="rounded h-100">
                  <iframe
                    className="rounded h-100 w-100"
                    style={{ height: "400px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150530.8857858327!2d43.6698506!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ef50e02a02871%3A0x948bce4fd816c4b5!2sSaudi%20Arabia!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
