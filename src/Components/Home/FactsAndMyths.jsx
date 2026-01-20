import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const facts = [
  {
    type: "Fact",
    text: "LED bulbs use 75% less energy than incandescent bulbs.",
  },
  {
    type: "Myth",
    text: "Recycling always uses more energy than it saves.",
  },
  {
    type: "Fact",
    text: "Composting reduces landfill waste and greenhouse gases.",
  },
];

export default function FactsAndMyths() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold text-[#297b33] mb-8">
        Sustainability Facts & Myths
        </h2>
        <div className="space-y-4">
          {facts.map((item, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition-colors duration-300 ${
                activeIndex === i ? "bg-[#82b532] text-white" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
            >
              <div className="flex items-center gap-2 font-semibold text-lg">
                {item.type === "Fact" ? (
                  <CheckCircle className="w-6 h-6 text-[#297b33]" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500" />
                )}
                <span>{item.type}</span>
              </div>
              {activeIndex === i && (
                <p className="mt-2">{item.text}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
