import { motion } from "framer-motion";

const posts = [
  { img: "/images/blog-1.png", title: "Polestar New EV", date: "Mar 12, 2025", tag: "Launch Event" },
  { img: "/images/blog-2.png", title: "Audemars Piguet", date: "Apr 1, 2024", tag: "Classic" },
  { img: "/images/blog-3.png", title: "Global Nikon Meetup", date: "Sep 14, 2024", tag: "Photography" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Latest Updates</span>
          <span className="section-tag">(CQ® — 12)</span>
        </div>
        <span className="section-tag mb-8 block">©2025</span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label text-accent mb-2 block">Latest Blogs</span>
            <h2 className="heading-section text-foreground">Latest Insights.</h2>
          </div>
          <div className="max-w-md">
            <p className="body-text mb-6">
              Explore our blog for design tips, industry insights, and creative inspiration.
            </p>
            <a href="#" className="btn-outline text-xs">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              View articles
            </a>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-0">
        {posts.map((post, i) => (
          <motion.article key={post.title}
            className="glass-surface-hover lens-flare-card group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
            }}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={post.img} alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{post.title}</h3>
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-dimmer font-body">{post.date}</span>
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 font-body glass-surface text-text-dim">
                  {post.tag}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
