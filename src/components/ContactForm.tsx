import {
  useState,
  type FormEvent,
} from "react";

import "./ContactForm.css";
function ContactForm() {
  const [sent, setSent] =
    useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setSent(true);

    window.setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-form-row">
        <label>
          <span>Name</span>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </label>

        <label>
          <span>Email</span>

          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            required
          />
        </label>
      </div>

      <label>
        <span>Subject</span>

        <input
          type="text"
          name="subject"
          placeholder="Photography, collaboration, project..."
          required
        />
      </label>

      <label>
        <span>Message</span>

        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about your idea..."
          required
        />
      </label>

      <div className="contact-form-bottom">
        <button type="submit">
          {sent
            ? "Message ready ✓"
            : "Send Message →"}
        </button>

        <p>
          I usually reply as soon as possible.
        </p>
      </div>
    </form>
  );
}

export default ContactForm;