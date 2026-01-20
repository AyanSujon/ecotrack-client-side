

import { motion } from "framer-motion";
import {
  MessageSquare,
  ThumbsUp,
  User,
  Leaf,
  Plus,
} from "lucide-react";

const tips = [
  {
    id: 1,
    author: "Ayesha Rahman",
    title: "Switch to Reusable Grocery Bags",
    content:
      "Reusable bags significantly reduce plastic waste. Keep one in your backpack or car so you never forget.",
    upvotes: 24,
    date: "Jan 15, 2025",
  },
  {
    id: 2,
    author: "Rahim Hasan",
    title: "Unplug Idle Electronics",
    content:
      "Even when turned off, electronics draw power. Unplug devices or use a power strip to save energy.",
    upvotes: 18,
    date: "Jan 13, 2025",
  },
  {
    id: 3,
    author: "Nusrat Jahan",
    title: "Choose Local Produce",
    content:
      "Buying local food reduces transportation emissions and supports nearby farmers.",
    upvotes: 31,
    date: "Jan 10, 2025",
  },
];

const Community = () => {
  return (
    <section className="bg-base-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#297b33]">
            EcoTrack Community
          </h1>
          <p className="mt-3 text-base-content max-w-2xl">
            Learn from others, share practical eco-tips, and grow together as a
            sustainability-focused community.
          </p>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <Leaf className="text-[#297b33]" />
            <span className="font-medium">
              Community Eco Tips & Discussions
            </span>
          </div>

          <button className="btn bg-[#297b33] hover:bg-[#82b532] text-white border-none">
            <Plus className="w-4 h-4 mr-2" />
            Share a Tip
          </button>
        </div>

        {/* Tips Feed */}
        <div className="space-y-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-200 shadow-md hover:shadow-lg transition"
            >
              <div className="card-body">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#297b33]/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-[#297b33]" />
                  </div>
                  <div>
                    <p className="font-semibold">{tip.author}</p>
                    <p className="text-xs text-base-content">{tip.date}</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {tip.title}
                </h3>

                <p className="text-base-content">
                  {tip.content}
                </p>

                <div className="flex items-center gap-6 mt-4">
                  <button className="flex items-center gap-2 text-sm hover:text-[#297b33]">
                    <ThumbsUp className="w-4 h-4" />
                    {tip.upvotes} Upvotes
                  </button>

                  <button className="flex items-center gap-2 text-sm hover:text-[#297b33]">
                    <MessageSquare className="w-4 h-4" />
                    Discuss
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
