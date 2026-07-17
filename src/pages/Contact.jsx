import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // Simulate sending form data
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="guten-lizrFz entry-content is-layout-constrained guten-post-content guten-element">
        {/* Banner Section */}
        <div className="section-wrapper" data-id="8ywGMo">
          <section className="wp-block-gutenverse-section guten-element guten-section guten-8ywGMo layout-boxed align-stretch">
            <div className="guten-background-overlay"></div>
            <div className="guten-container guten-column-gap-no">
              <div className="wp-block-gutenverse-column guten-element guten-column guten-U7egHI">
                <div className="guten-column-wrapper" data-id="U7egHI">
                  <h1 className="wp-block-gutenverse-heading guten-element guten-VyOvyN">
                    Stay <span id="guten-BWYRSh"><span className="guten-text-highlight guten-BPN2dE" id="guten-carAEu">Connected</span></span> With Us
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Info and Form Section */}
        <div className="section-wrapper" data-id="QI7oTd">
          <section className="wp-block-gutenverse-section guten-element guten-section guten-QI7oTd layout-boxed align-stretch">
            <div className="guten-container guten-column-gap-default">
              {/* Contact Info Column */}
              <div className="wp-block-gutenverse-column guten-element guten-column guten-NhZtkJ">
                <div className="guten-column-wrapper" data-id="NhZtkJ">
                  <div className="guten-element guten-advanced-heading guten-kzotyI">
                    <div className="heading-section">
                      <h2 className="heading-title">
                        <span className="heading-title">Get in touch, and let&#8217;s collaborate with </span>
                        <span className="heading-focus">Ariva Infotech</span>
                      </h2>
                    </div>
                  </div>

                  <div className="guten-element gutenverse-text-editor guten-MA6MlY">
                    <div className="text-content-inner">
                      <p>Have a question or looking to start a project? Reach out to us, and our team of IT, AI, and Robotics experts will help you bring your ideas to life.</p>
                    </div>
                  </div>

                  {/* Office Location Box */}
                  <div className="guten-element guten-IeRwcy guten-icon-box icon-position-left">
                    <div className="guten-icon-box-wrapper hover-from-left">
                      <div className="icon-box icon-box-header">
                        <div className="icon bg-style-color">
                          <i className="gtn gtn-map-marker1-light icon-style-color"></i>
                        </div>
                      </div>
                      <div className="icon-box icon-box-body">
                        <h4 className="title">Office Location</h4>
                        <p className="icon-box-description">Ariva Infotech, 330 Changebridge Road, Suite 101, Pine Brook, NJ-07058</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="section-wrapper" data-id="f1Ieai">
                    <section className="wp-block-gutenverse-section guten-element guten-section guten-f1Ieai layout-fullwidth align-stretch">
                      <div className="guten-container guten-column-gap-no">
                        <div className="wp-block-gutenverse-column guten-element guten-column guten-3mfUf4">
                          <div className="guten-column-wrapper" data-id="3mfUf4">
                            <div className="guten-element guten-BYFZpB guten-icon-box icon-position-left">
                              <div className="guten-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header">
                                  <div className="icon bg-style-color">
                                    <i className="gtn gtn-phone-line icon-style-color"></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h4 className="title">Phone Number</h4>
                                  <p className="icon-box-description">+1-908-955-0321</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="wp-block-gutenverse-column guten-element guten-column guten-7baRZo">
                          <div className="guten-column-wrapper" data-id="7baRZo">
                            <div className="guten-element guten-KLN6ZD guten-icon-box icon-position-left">
                              <div className="guten-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header">
                                  <div className="icon bg-style-color">
                                    <i className="gtn gtn-email1-light icon-style-color"></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h4 className="title">Drop Us a Line</h4>
                                  <p className="icon-box-description">
                                    <a href="mailto:info@arivainfotech.com">info@arivainfotech.com</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Social Media links */}
                  <div className="guten-element guten-wrap-helper no-margin guten-kfhEhj flex">
                    <div className="guten-inner-wrap" data-id="kfhEhj">
                      <h4 className="wp-block-gutenverse-heading guten-element guten-XPQud5">Official Social Media :</h4>
                      <div className="guten-element guten-social-icons guten-E8Ouhx circle horizontal fill">
                        <div className="guten-element guten-social-icon guten-ptOat5 facebook">
                          <a id="guten-ptOat5" href="#"><i className="gtn gtn-facebook-light"></i></a>
                        </div>
                        <div className="guten-element guten-social-icon guten-ARU5PL twitter">
                          <a id="guten-ARU5PL" href="#"><i className="fab fa-x-twitter"></i></a>
                        </div>
                        <div className="guten-element guten-social-icon guten-i8DyqE instagram">
                          <a id="guten-i8DyqE" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="guten-element guten-social-icon guten-YwsBeW youtube">
                          <a id="guten-YwsBeW" href="#"><i className="gtn gtn-youtube-v-light"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="wp-block-gutenverse-column guten-element guten-column guten-dCP0SG">
                <div className="guten-column-wrapper" data-id="dCP0SG">
                  <div className="contact-form-card">
                    <h3 className="form-heading">Send Us A Message</h3>
                    <form onSubmit={handleSubmit} className="contact-form-custom">
                      <div className="form-group-custom">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name *"
                          className="form-input-custom"
                          required
                        />
                      </div>
                      <div className="form-group-custom">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email *"
                          className="form-input-custom"
                          required
                        />
                      </div>
                      <div className="form-group-custom">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          className="form-input-custom"
                        />
                      </div>
                      <div className="form-group-custom">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message *"
                          className="form-input-custom form-textarea-custom"
                          required
                        ></textarea>
                      </div>

                      <button
                        className="form-submit-btn-custom"
                        type="submit"
                        disabled={status === 'sending'}
                      >
                        {status === 'sending' ? (
                          <>
                            <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>

                      {status === 'success' && (
                        <div className="form-status-custom success">
                          <i className="fas fa-check-circle"></i> Message sent successfully! We will get back to you soon.
                        </div>
                      )}
                      {status === 'error' && (
                        <div className="form-status-custom error">
                          <i className="fas fa-exclamation-circle"></i> Please fill in all required fields.
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
