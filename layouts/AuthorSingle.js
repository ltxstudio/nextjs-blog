import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Social from "./components/Social";
import MDXContent from "./partials/MDXContent";
import SeoMeta from "./partials/SeoMeta";

const AuthorSingle = ({ frontmatter, content }) => {
  const { description, social, title, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        description={description ? description : content.slice(0, 120)}
      />
      <section className="section bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-8">
            {image && (
              <div className="mb-6">
                <Image
                  src={image}
                  className="mx-auto rounded-full border-4 border-gray-200 shadow-lg"
                  height={150}
                  width={150}
                  alt={title}
                />
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              {markdownify(title, "h1", "h2")}
            </h1>
            <div className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              <p>{description ? description : content.slice(0, 120)}</p>
            </div>
            <Social source={social} className="social-icons flex justify-center gap-4" />
          </div>
          <div className="content max-w-4xl mx-auto px-4">
            <MDXContent content={content} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorSingle;
