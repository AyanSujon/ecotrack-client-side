

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#297b33]">
            Contact EcoTrack
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base-content">
            Have questions, feedback, or ideas to improve EcoTrack?  
            We’d love to hear from you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#297b33]">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#297b33]/10 flex items-center justify-center">
                  <Mail className="text-[#297b33]" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-base-content">
                    support@ecotrack.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#297b33]/10 flex items-center justify-center">
                  <Phone className="text-[#297b33]" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-base-content">
                    +880 1234 567 890
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#297b33]/10 flex items-center justify-center">
                  <MapPin className="text-[#297b33]" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-base-content">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-base-200 p-8 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here"
                  className="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn bg-[#297b33] hover:bg-[#82b532] text-white border-none w-full mt-4"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
