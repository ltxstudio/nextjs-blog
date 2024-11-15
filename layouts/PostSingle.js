import Share from "@components/Share";
import dateFormat from "@lib/utils/dateFormat";
import similerItems from "@lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import SimilarPosts from "@partials/SimilarPosts";
import Image from "next/image";
import Link from "next/link";
import MDXContent from "./partials/MDXContent";
import { useEffect } from "react";

const PostSingle = ({ post, posts, authors, slug }) => {
  const { frontmatter, content } = post;
  let { description, title, date, image, categories, tags } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const similarPosts = similerItems(post, posts, slug);

  useEffect(() => {
    // Load Disqus comments
    const d = document.createElement("script");
    d.src = `https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js`;
    d.setAttribute("data-timestamp", +new Date());
    d.async = true;
    document.body.appendChild(d);
  }, []);

  return (
    <>
      <section className="section py-8">
        <div className="container mx-auto px-4">
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
                      className="flex items-center hover:text-primary transition duration-300"
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
              <li className="text-gray-600">{dateFormat(date)}</li>
              <li>
                <ul className="flex flex-wrap">
                  {categories.map((category, i) => (
                    <li className="inline-block" key={`category-${i}`}>
                      <Link
                        href={`/categories/${slugify(category)}`}
                        className="mr-3 hover:text-primary transition duration-300"
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
                className="rounded-lg shadow-lg mb-8"
              />
            )}
            <div className="content mb-16 text-left">
              <MDXContent content={content} />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-8">
              <ul className="mb-4 mr-4 flex flex-wrap space-x-3">
                {tags.map((tag, i) => (
                  <li className="inline-block" key={`tag-${i}`}>
                    <Link
                      href={`/tags/${slugify(tag)}`}
                      className="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark hover:bg-primary hover:text-white transition duration-300"
                    >
                      #{humanize(tag)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Share
                className="social-share mb-4"
                title={ title}
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
            <h2 className="mb-8 text-center text-2xl font-bold">Similar Posts</h2>
            <SimilarPosts posts={similarPosts.slice(0, 3)} />
          </div>
        </section>
      )}
      <section className="section">
        <div className="container">
          <h2 className="mb-4 text-center text-xl font-bold">Comments</h2>
          <div id="disqus_thread"></div>
          <noscript>Please enable JavaScript to view the comments powered by Disqus.</noscript>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
