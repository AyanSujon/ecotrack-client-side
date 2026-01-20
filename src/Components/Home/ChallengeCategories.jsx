import { Leaf, Zap, Droplet, Truck } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Waste Reduction", icon: Leaf, color: "#297b33" },
  { name: "Energy Saving", icon: Zap, color: "#82b532" },
  { name: "Water Conservation", icon: Droplet, color: "#297b33" },
  { name: "Sustainable Transport", icon: Truck, color: "#82b532" },
];

export default function ChallengeCategories() {
  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold text-[#297b33] mb-8">
        Challenge Categories
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-[#82b532] hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Icon size={40} className="mb-4" />
                <span className="font-semibold text-lg text-center">
                  {cat.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
