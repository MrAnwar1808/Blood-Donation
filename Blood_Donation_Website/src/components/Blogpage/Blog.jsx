
import React from "react";
import "./Blog.css";

function Blog() {
  const articles = [
    {
      title: "5 Myths About Blood Donation",
      summary: "Clearing up common misconceptions around blood donation.",
      link: "/blog/5-myths",
    },
    {
      title: "The Science Behind Blood Types",
      summary: "Learn why blood types matter for transfusions.",
      link: "/blog/blood-types",
    },
  ];

  return (
    <div className="blog-container">
      <h2>Latest Articles</h2>
      {articles.map((article, index) => (
        <div key={index} className="blog-article">
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <a href={article.link} className="blog-link">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default Blog;
