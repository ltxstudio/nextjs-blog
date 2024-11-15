import Share from "@components/Share";
import dateFormat from "@lib/utils/dateFormat";
import similerItems from "@lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import SimilarPosts from "@partials/SimilarPosts";
import Image from "next/image";
import Link from "next/link";
import MDXContent from "./partials/MDXContent";

// Import the Disqus component
import { DiscussionEmbed } from "disqus-react";

const PostSingle = ({ post, posts, authors, slug }) => {
  const { frontmatter, content } = post;
  let { description, title, date, image, categories, tags } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const similarPosts = similerItems(post, posts, slug);

  // Disqus configuration
  const disqusConfig = {
    shortname: "your-disqus-shortname", // Replace with your Disqus shortname
    config: {
      identifier: slug,  // Unique identifier for the post (slug)
      title: title,      // Title of the post
    },
  };

  return (
    <>
      <section className="section py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <article className="text-center bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            {markdownify(title, "h1", "h2")}
            <ul className="mb-8 mt-4 flex flex-wrap items-center justify-center space-x-3 text-gray-600">
              <li>
                {authors
                  .filter((author) =>
                    frontmatter.authors
                      .map((author) => slugify(author))
                      .includes(slugify(author.frontmatter.title))
                  )
                  .map((author, i) => (
                    <Link
                      href={`/authors/${slugify(author.frontmatter.title)}`}
                      key={`author-${i}`}
                      className="flex items-center hover:text-primary"
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
              <li className="text-sm text-gray-500">{dateFormat(date)}</li>
              <li>
                <ul className="flex flex-wrap items-center space-x-3">
                  {categories.map((category, i) => (
                    <li className="inline-block" key={`category-${i}`}>
                      <Link
                        href={`/categories/${slugify(category)}`}
                        className="mr-3 hover:text-primary text-sm text-gray-500"
                      >
                        &#9635; {humanize(category)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            {image && (
              <Image
                src={image}
                height={500}
                width={1000}
                alt={title}
                className="rounded-lg shadow-md mb-8 max-w-full h-auto"
              />
            )}
            <div className="content mb-16 text-left prose lg:prose-lg max-w-none">
              <MDXContent content={content} />
            </div>
            <div className="flex flex-wrap items-center justify-between space-y-4 lg:space-y-0">
              <ul className="mb-4 mr-4 space-x-3 flex flex-wrap">
                {tags.map((tag, i) => (
                  <li className="inline-block" key={`tag-${i}`}>
                    <Link
                      href={`/tags/${slugify(tag)}`}
                      className="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark hover:text-primary"
                    >
                      #{humanize(tag)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Share
                className="social-share mb-4"
                title={title}
                description={description}
                slug={slug}
              />
            </div>
          </article>
        </div>
      </section>

      {/* Disqus Comments Section */}
      <section className="section py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold text-gray-800 mb-6">
            Comments
          </h2>
          <div className="disqus-comments">
            {/* Embed Disqus comments */}
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </div>
      </section>

      {similarPosts && similarPosts.length > 0 && (
        <section className="section py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
              Similar Posts
            </h2>
            <SimilarPosts posts={similarPosts.slice(0, 3)} />
          </div>
        </section>
      )}
    </>
  );
};

export default PostSingle;
