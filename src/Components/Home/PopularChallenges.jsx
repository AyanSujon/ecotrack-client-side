

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const popularChallenges = [
  {
    id: 1,
    title: "Plastic-Free Week",
    participants: 120,
    img: "https://img.freepik.com/free-vector/recycle-reusable-products-cartoon-illustration-set-metal-straws-toothbrush-eco-grocery-bags-garbage-cans-no-plastic-bags-reduce-reuse-recycle-go-green-slogan-zero-waste-ecology-concept_74855-24980.jpg", // or use your own hosted version
  },
  {
    id: 2,
    title: "Energy Saving Challenge",
    participants: 95,
    img: "https://s.abcnews.com/images/GMA/energy-efficient-lightbulb-rf-gty-ps-211101_1635774712267_hpMain.jpg?w=992",
  },
  {
    id: 3,
    title: "Water Conservation",
    participants: 80,
    img: "https://thumbs.dreamstime.com/b/every-drop-matters-world-water-day-save-concept-422859552.jpg",
  },
];

export default function PopularChallenges() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold text-[#297b33] mb-8">
        Popular Challenges This Month
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {popularChallenges.map((challenge, i) => (
            <motion.div
              key={challenge.id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <img
                src={challenge.img}
                alt={challenge.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#297b33] mb-2">
                  {challenge.title}
                </h3>
                <div className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 mr-1 text-[#82b532]" />
                  <span>{challenge.participants} participants</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
