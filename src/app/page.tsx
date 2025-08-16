import React from "react";

import { getBlogPostList } from "@/utils/file-helper";

import styles from "./homepage.module.css";
import BlogSummaryCard from "@/components/SummaryCard/SummaryCard";

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogPosts.map(({ slug, ...delegated }) => (
          <BlogSummaryCard key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Home;
