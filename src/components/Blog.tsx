import { motion } from "motion/react";
import { BLOG_POSTS } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";
import SectionHeader from "./SectionHeader";

const TAG_COLORS = ["#7C3AED", "#EA580C", "#16A34A"];

export default function Blog() {
  const { lang } = useLang();
  const blog = translations[lang].blog;

  return (
    <section id="blog" className="py-8 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <SectionHeader label={blog.label} title={blog.title} subtitle={blog.subtitle} />

        <div
          className="flex gap-3 overflow-x-auto pb-1 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-px md:bg-neutral-100 md:overflow-visible md:pb-0"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ scrollSnapAlign: "start" }}
              className="flex-shrink-0 w-[80%] xs:w-64 border border-neutral-100 rounded md:w-auto md:border-0 md:rounded-none bg-white p-5 md:p-7 hover:bg-neutral-50 transition-colors group cursor-pointer"
            >
              <span className="font-mono text-[10px] text-neutral-300 block mb-4">
                {post.date}
              </span>
              <h3 className="font-display font-medium text-black text-base mb-3 leading-snug group-hover:text-[#7C3AED] transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.map((tag, j) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{
                      color: TAG_COLORS[j % TAG_COLORS.length],
                      backgroundColor: TAG_COLORS[j % TAG_COLORS.length] + "14",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-300 group-hover:text-[#7C3AED] transition-colors">
                {blog.readMore} →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
