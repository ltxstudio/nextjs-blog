import Share from "@components/Share";
import dateFormat from "@lib/utils/dateFormat";
import similerItems from "@lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import SimilarPosts from "@partials/SimilarPosts";
import Image from "next/image";
import Link from "next/link";
import MDXContent from "./partials/MDXContent";
import { DiscussionEmbed } from "disqus-react"; // Import Disqus component
import { useEffect, useState } from "react";

const PostSingle = ({ post, posts, authors, slug }) => {
  const { frontmatter, content } = post;
  let { description, title, date, image, categories, tags } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const similarPosts = similerItems(post, posts, slug);
  
  // Disqus configuration
  const disqusShortname = "nullbite"; // Replace with your Disqus shortname
  const disqusConfig = {
    url: `https://yourwebsite.com/${slug}`, // Replace with your website URL
    identifier: slug, // Replace with the post identifier
    title: title, // Replace with the post title
  };

  // State for loading comments
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    // Simulate loading comments
    const timer = setTimeout(() => {
      setLoadingComments(false);
    }, 1000); // Simulate a delay for loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <article className="text-center">
            {markdownify(title, "h1", "h2")}
            <ul className="mb-8 mt-4 flex flex-wrap items-center justify-center space-x-3 text-text">
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
                          className="mr-2 h-6 w-6 rounded-full"
                        />
                      )}
                      <span>{author.frontmatter.title}</span>
                    </Link>
                  ))}
              </li>
              <li>{dateFormat(date)}</li>
              <li>
                <ul>
                  {categories.map((category, i) => (
                    <li className="inline-block" key={`category-${i}`}>
                      <Link
                        href={`/categories/${slugify(category)}`}
                        className="mr-3 hover:text-primary"
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
                className="rounded-lg"
              />
            )}
            <div className="content mb-16 text-left">
              <MDXContent content={content} />
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <ul className="mb-4 mr-4 space-x-3">
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
      {similarPosts && similarPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="mb-8 text-center">Similar Posts</h2>
            <SimilarPosts posts={similarPosts.slice(0, 3)} />
          </div>
        </section>
      )}
      <section className="section">
        <div className="container">
          <h2 className="mb-8 text-center">Comments</h2>
          {loadingComments ? (
            <div className="text-center">Loading comments...</div>
          ) : (
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          )}
        </div>
      </section>
    </>
  );
};

export default PostSingle;
