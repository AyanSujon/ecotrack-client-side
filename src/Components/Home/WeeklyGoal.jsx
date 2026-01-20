import { motion } from "framer-motion";

export default function WeeklyGoal() {
  const goal = 500; // Example: target CO₂ saved
  const current = 275; // Example: current CO₂ saved

  const progress = Math.min((current / goal) * 100, 100);

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-center font-bold text-[#297b33] mb-6">
          Weekly Community Goal
        </h2>
        <p className="text-gray-700 mb-6">
          Let’s save <span className="font-semibold">{goal}kg CO₂</span> this
          week together!
        </p>

        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <motion.div
            className="h-6 bg-[#297b33] text-white text-sm flex items-center justify-center font-semibold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.2 }}
          >
            {Math.round(progress)}%
          </motion.div>
        </div>
        <p className="mt-2 text-gray-600">
          {current}kg CO₂ saved so far
        </p>
      </div>
    </section>
  );
}
