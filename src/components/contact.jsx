import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const initialFormData = { name: "", email: "", subject: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nivoma4",
        "template_vs6lpjx",
        formRef.current, // ✅ pass form reference here
        "Izbrrixd0JvvGi-Hx"
      )
      .then(
        (result) => {
          setFormData(initialFormData);
          console.log("✅ Email sent successfully:", result.text);
          alert("Message sent! Check your inbox.");
        },
        (error) => {
          console.error("❌ Error sending email:", error);
        }
      );
  };

  return (
    <section id="contact" className="ftco-section contact-section">
      <div className="container">
        <div className="row block-9 justify-content-center mb-5">
          <div className="col-md-8 mb-md-5">
            <h2 className="text-center">
              If you got any questions <br /> please do not hesitate to send us a message
            </h2>

            {/* ✅ attach the ref here */}
            <form ref={formRef} className="bg-light p-5 contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                  }
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                  }
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                  }
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                  }
                ></textarea>
              </div>

              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
