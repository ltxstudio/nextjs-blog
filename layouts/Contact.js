import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section py-12 bg-gray-50">
      <div className="container max-w-[900px] mx-auto px-4">
        {markdownify(title, "h1", "text-3xl md:text-4xl font-semibold mb-8 text-center")}
        <form
          className="contact-form space-y-8 bg-white p-6 rounded-lg shadow-lg"
          method="POST"
          action={contact_form_action}
        >
          <div className="mb-6">
            <label className="text-lg font-medium text-gray-700 mb-2 block" htmlFor="name">
              Name
            </label>
            <input
              className="form-input w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary-500 transition"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-lg font-medium text-gray-700 mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="form-input w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary-500 transition"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-lg font-medium text-gray-700 mb-2 block" htmlFor="subject">
              Subject
            </label>
            <input
              className="form-input w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary-500 transition"
              name="subject"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-lg font-medium text-gray-700 mb-2 block" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-textarea w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary-500 transition"
              rows="7"
            />
          </div>
          <button className="btn btn-outline-primary py-3 px-6 rounded-md font-medium w-full md:w-auto transition duration-300">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
