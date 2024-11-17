import React, { useState } from "react";
import axios from "axios";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    // The URL of your Google Cloud Function
    const cloudFunctionUrl = "https://function-1-754672893859.southamerica-east1.run.app";
    

    try {
      // Make a POST request to trigger the email sending
      const response = await axios.post(cloudFunctionUrl, {
        toMail: email,
        content: content,
      });

      // Handle the success response
      if (response.status === 200) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Error sending email.");
      }
    } catch (error) {
      // Handle the error
      console.error ("Error sending email:", error);
      setMessage("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Recipient Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Email Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailForm;