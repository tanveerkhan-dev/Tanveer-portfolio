import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Talha Mehmood",
      role: "Business Owner",
      company: "Karachi E-Commerce Store",
      message:
        "I needed a fast and modern e-commerce website. The work was delivered perfectly with clean UI and smooth performance.",
    },
    {
      name: "Muhammad Ali",
      role: "Startup Founder",
      company: "Dubai Digital Agency",
      message:
        "Very professional developer. Built our landing page and dashboard with great UI and scalable structure.",
    },
    {
      name: "Ayesha Khan",
      role: "Small Business Owner",
      company: "Lahore Services Hub",
      message:
        "Highly recommended! My business website was completed on time with modern design and fast loading speed.",
    },
    {
      name: "Hassan Raza",
      role: "Freelance Client",
      company: "Islamabad Tech Solutions",
      message:
        "Excellent communication and clean development. Delivered exactly what I wanted with great attention to detail.",
    },
  ];

  return (
<section className="w-full bg-white text-gray-900 dark:bg-black dark:text-white py-24 px-6 sm:px-10 lg:px-20">

  {/* HEADER */}
  <div className="max-w-7xl mx-auto mb-14 text-center flex flex-col items-center">

    <span className="inline-block border border-[#4bbd97] text-[#4bbd97] px-4 py-2 text-md rounded-full">
      What Clients Say
    </span>

    <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
      Trusted by Clients
    </h2>

    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
      Feedback from clients across Pakistan and Dubai.
    </p>

  </div>

  {/* CARDS */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {testimonials.map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}

        className="group h-[440px] flex flex-col justify-between
        bg-gray-100 dark:bg-[#0c0c12] border border-gray-200 dark:border-[#1f2f27] rounded-2xl p-6

        shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(0,0,0,0.6)]

        hover:border-[#4bbd97]
        hover:shadow-[0_0_60px_rgba(35,125,59,0.7),0_0_120px_rgba(75,189,151,0.3)]

        hover:-translate-y-2
        transition-all duration-300"
      >

        <FaQuoteLeft className="text-[#4bbd97] text-xl" />

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-4">
          {t.message}
        </p>

        <div className="mt-6">

          <div className="w-10 h-10 rounded-full bg-[#237d3b] flex items-center justify-center font-bold text-white">
            {t.name.charAt(0)}
          </div>

          <h4 className="mt-3 font-semibold text-gray-900 dark:text-white">
            {t.name}
          </h4>

          <p className="text-xs text-gray-600 dark:text-gray-400">
            {t.role}
          </p>

          <p className="text-xs text-[#4bbd97]">
            {t.company}
          </p>

        </div>

      </motion.div>
    ))}

  </div>

</section>
  );
}