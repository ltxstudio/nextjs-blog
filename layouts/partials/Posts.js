import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts, className, authors }) => {
  const { summary_length } = config.settings;

  return (
    <div className={`grid grid-cols-1 gap-16 ${className} sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
      {posts.map((post, i) => (
        <div
          key={`key-${i}`}
          className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
          {post.frontmatter.image && (
            <div className="mb-4">
              <Image
                className="rounded-lg w-full h-auto"
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                width={i === 0 ? 925 : 445}
                height={i === 0 ? 475 : 230}
                priority={i === 0}
              />
            </div>
          )}
          <ul className="mb-4 flex flex-wrap items-center space-x-4 text-sm text-gray-600">
            <li>
              {authors
                .filter((author) =>
                  post.frontmatter.authors
                    .map((author) => slugify(author))
                    .includes(slugify(author.frontmatter.title))
                )
                .map((author, i) => (
                  <Link
                    href={`/authors/${slugify(author.frontmatter.title)}`}
                    key={`author-${i}`}
                    className="flex items-center hover:text-primary transition duration-300"
                  >
                    {author.frontmatter.image && (
                      <Image
                        src={author.frontmatter.image}
                        alt={author.frontmatter.title}
                        height={50}
                        width={50}
                        className="mr-2 h-8 w-8 rounded-full"
                      />
                    )}
                    <span>{author.frontmatter.title}</span>
                  </Link>
                ))}
            </li>
            <li className="text-gray-500">{dateFormat(post.frontmatter.date)}</li>
            <li>
              <ul className="flex flex-wrap">
                {post.frontmatter.categories.map((category, i) => (
                  <li className="inline-block" key={`category-${i}`}>
                    <Link
                      href={`/categories/${slugify(category)}`}
                      className="mr-3 text-gray-600 hover:text-primary transition duration-300"
                    >
                      &#9635; {humanize(category)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            <Link href={`/${post.slug}`} className="block hover:text-primary transition duration-300">
              {post.frontmatter.title}
            </Link>
          </h3>
          <p className="text-gray-700 mb-4 text-sm">
            {post.content && post.content.slice(0, Number(summary_length))}...
          </p>
          <Link href={`/${post.slug}`} className="text-primary font-semibold hover:underline">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
