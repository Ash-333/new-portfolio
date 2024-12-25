import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const BlogPost = ({ title, date, summary, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{date}</p>
        <p className="mt-2 text-secondary text-[16px]">{summary}</p>
      </div>
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#915EFF] hover:underline"
        >
          Read more →
        </a>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  // Sample blog posts - you can replace with your own data
  const blogPosts = [
    {
      title: "Getting Started with Three.js",
      date: "April 1, 2024",
      summary:
        "Learn how to create amazing 3D graphics for the web using Three.js",
      link: "#",
    },
    {
      title: "React Best Practices",
      date: "March 15, 2024",
      summary:
        "Discover the best practices for building scalable React applications",
      link: "#",
    },
    // Add more blog posts here
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Writings</p>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Sharing my thoughts and experiences on web development, 3D graphics,
          and technology in general.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
