import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('arin.kim0801@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="grid-container">
        <img
          src="assets/grid4.png"
          alt="grid-4"
          className="contact-dial-image"
        />

        <div className="contact-container">
          <p className="contact-text">Get in touch</p>
          <div className="contact-copy-container" onClick={handleCopy}>
            <img
              src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
              alt="copy"
            />
            <p className="contact-text-2">
            arin.kim0801@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
