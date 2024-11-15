import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const SimilarPosts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post, i) => (
        <div
          key={`key-${i}`}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        >
          {post.frontmatter.image && (
            <div className="relative">
              <Image
                className="rounded-t-lg"
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                width={445}
                height={230}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          )}
          <div className="p-4">
            <ul className="flex flex-wrap text-sm text-gray-600 mb-4 space-x-3">
              <li className="mr-4 inline-block">{dateFormat(post.frontmatter.date)}</li>
              <li className="mr-4 inline-block">
                <ul className="flex flex-wrap space-x-2">
                  {post.frontmatter.categories?.map((category, i) => (
                    <li className="inline-block" key={`category-${i}`}>
                      <Link
                        href={`/categories/${slugify(category)}`}
                        className="text-primary hover:text-secondary transition duration-300"
                      >
                        &#9635; {humanize(category)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">
              <Link
                href={`/${post.slug}`}
                className="block text-gray-800 hover:text-primary transition duration-300"
              >
                {post.frontmatter.title}
              </Link>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimilarPosts;
