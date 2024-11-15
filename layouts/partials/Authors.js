import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Authors = ({ authors }) => {
  return (
    <div className="grid grid-cols-1 gap-8 justify-center sm:grid-cols-2 md:grid-cols-3">
      {authors.map((author, i) => (
        <div
          className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
          key={`key-${i}`}
        >
          {author.frontmatter.image && (
            <div className="flex justify-center items-center mb-4">
              <Image
                src={author.frontmatter.image}
                alt={author.frontmatter.title}
                height={150}
                width={150}
                className="rounded-lg"
              />
            </div>
          )}
          <h3 className="h4 mb-2 text-lg font-semibold">
            <Link
              href={`/authors/${author.slug}`}
              className="block hover:text-primary transition duration-300"
            >
              {author.frontmatter.title}
            </Link>
          </h3>
          <p className="text-gray-700 mb-4">
            {markdownify(author.content.slice(0, 120), "p")}
          </p>
          <Link
            href={`/authors/${author.slug}`}
            className="text-primary font-semibold hover:underline"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Authors;
