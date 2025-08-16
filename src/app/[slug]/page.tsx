import React, { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { loadBlogPost } from "@/utils/file-helper";
import COMPONENT_MAP from "@/utils/mdx-components";

import BlogHero from "@/components/BlogHero/BlogHero";

import styles from "./slug.module.css";

async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter, content } = await loadBlogPost(slug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <MDXRemote source={content} components={COMPONENT_MAP} />
        {/* </Suspense> */}
      </div>
    </article>
  );
}

export default BlogPost;
