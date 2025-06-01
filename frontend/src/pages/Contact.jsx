import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-800">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#ff3383]">Contact Me</h2>
        <p className="text-lg sm:text-xl mb-8 leading-relaxed">
          Have a question, a project idea, or just want to connect? Feel free to reach out!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 items-center px-4 sm:px-0"
        >
          <input type="hidden" name="access_key" value="e585e1b2-b8c2-4543-8a7c-274111bae22b" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full md:w-3/4 lg:w-2/3 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff3383] focus:border-transparent transition duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full md:w-3/4 lg:w-2/3 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff3383] focus:border-transparent transition duration-200"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full md:w-3/4 lg:w-2/3 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff3383] focus:border-transparent transition duration-200 resize-y"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#ff3383] text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ff3383] focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
