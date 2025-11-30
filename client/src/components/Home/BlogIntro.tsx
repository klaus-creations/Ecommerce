import { width } from "@/constants/styles";
import { Button } from "../ui/button";
import Heading from "../common/Heading";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BlogIntro() {
  return (
    <section className={`${width} py-12 lg:py-16`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[40%]"
        >
          <BlogIntroImage />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[60%]"
        >
          <BlogsSomeIntro />
        </motion.div>
      </div>
    </section>
  );
}

const BlogIntroImage = function () {
  return (
    <div className="relative h-full rounded-2xl overflow-hidden group">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src="/hero2.jpg"
        className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
        alt="Blog featured"
      />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 z-20 p-6 lg:p-8 text-white">
        <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
          Latest Updates
        </span>
        <Heading
          heading="Blogs"
          className="text-4xl lg:text-5xl font-bold mb-2 text-white"
        />
        <h3 className="text-xl lg:text-2xl font-medium mb-6">
          Enjoy Our Weekly <span className="text-primary font-bold">News</span> and{' '}
          <span className="text-primary font-bold">Articles</span>
        </h3>
        <Button className="bg-white text-gray-900 hover:bg-white/90 px-6 py-3">
          Explore All Posts <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const BlogsSomeIntro = function () {
  const blogPosts = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `The Future of ${['Tech', 'Fashion', 'Design', 'Business', 'AI', 'Marketing'][i]}`,
    excerpt: `Discover how ${['technology', 'fashion trends', 'design principles', 'business strategies', 'artificial intelligence', 'digital marketing'][i]} are shaping our future in unexpected ways.`,
    date: `June ${15 + i}, 2023`,
    readTime: `${5 + i} min read`
  }));

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Recent Articles
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={`/${30 + post.id}.jpg`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={post.title}
              />
            </div>

            <div className="p-5">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {post.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <Button
                variant="link"
                className="p-0 text-primary hover:text-primary/80 group-hover:underline"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};;
