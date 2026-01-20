

import { motion } from "framer-motion";
import {
  Leaf,
  BarChart3,
  Users,
  ShieldCheck,
  Globe,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    title: "Discover & Join Challenges",
    description:
      "Browse community-driven sustainability challenges with clear goals, timelines, and impact metrics that fit your lifestyle.",
    icon: Leaf,
  },
  {
    title: "Track Your Impact",
    description:
      "Log daily actions and see real-world impact like CO₂ reduction, plastic savings, and energy conservation.",
    icon: BarChart3,
  },
  {
    title: "Share & Inspire Others",
    description:
      "Post eco-tips, upvote helpful ideas, and motivate the community through shared progress and achievements.",
    icon: Users,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#297b33]">
            How EcoTrack Works
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base-content">
            EcoTrack turns everyday eco-friendly actions into measurable impact.
            Track your habits, join challenges, and grow with a community that
            believes small steps lead to big change.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card bg-base-200 shadow-md hover:shadow-xl transition"
              >
                <div className="card-body text-center items-center">
                  <div className="w-16 h-16 rounded-full bg-[#297b33]/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#297b33]" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-base-content">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#297b33]">
              Community-Powered Impact
            </h2>
            <p className="mt-4 text-base-content">
              EcoTrack is built on collective action. Every challenge joined and
              every habit tracked contributes to live community impact
              statistics.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <Globe className="text-[#297b33]" />
                Community-wide CO₂ reduction tracking
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-[#297b33]" />
                Plastic and waste reduction totals
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-[#297b33]" />
                Shared progress across all members
              </li>
            </ul>
          </div>

          <div className="bg-base-200 p-8 rounded-2xl shadow">
            <Sparkles className="w-10 h-10 text-[#297b33]" />
            <p className="mt-4 text-lg font-medium">
              When individuals act together, the impact multiplies.
            </p>
            <p className="mt-2 text-base-content">
              EcoTrack helps you see how your personal efforts contribute to a
              larger environmental movement.
            </p>
          </div>
        </motion.div>

        {/* Trust & Transparency */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-base-200 p-10 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-8 h-8 text-[#297b33]" />
            <h2 className="text-2xl font-bold">
              Transparency You Can Trust
            </h2>
          </div>
          <p className="text-base-content max-w-3xl">
            EcoTrack uses standard environmental estimates to calculate impact.
            No fake numbers, no hidden data. Your personal information stays
            private, and your progress remains fully under your control.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="mb-6 text-base-content">
            Start with one challenge. Track one habit. Share one tip.
          </p>
          <Link to={"/challenges"} className="btn bg-[#297b33] hover:bg-[#82b532] text-white border-none px-10">
            Get Started with EcoTrack
            
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
