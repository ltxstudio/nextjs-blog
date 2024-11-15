import Social from "@components/Social";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import MDXContent from "./partials/MDXContent";

const About = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, image, social } = frontmatter;

  return (
    <section className="section bg-gray-50 py-16">
      <div className="container text-center px-4">
        {/* Image Section */}
        {image && (
          <div className="relative mb-8 max-w-full h-auto mx-auto">
            <Image
              src={image}
              width={920}
              height={515}
              alt={title}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        )}

        {/* Title Section */}
        {markdownify(title, "h1", "text-3xl md:text-4xl font-semibold text-gray-800 mb-6")}

        {/* Social Links Section */}
        {social && (
          <Social
            source={social}
            className="social-icons-simple my-6 flex justify-center gap-6"
          />
        )}

        {/* Content Section */}
        <div className="content text-lg text-gray-700 leading-relaxed mx-auto max-w-3xl px-4">
          <MDXContent content={content} />
        </div>
      </div>
    </section>
  );
};

export default About;
