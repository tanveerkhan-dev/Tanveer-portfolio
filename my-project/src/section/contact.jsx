import ParticleBackground from "../components/particalbackground";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { signInWithGoogle } from "../services/auth";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";



export default function Contact() {

  const [formData, setFormData] = useState({
  name: "",
  service: "",
  message: "",
});
  const social = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tanveer-khan-devolper/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/tanveerkhan-dev",
    },
  ];

const [user, setUser] = useState(null);



  // ✅ GET USER SESSION
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user || null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return alert("Please login with Google first ❌");
    }

    const { error } = await supabase.from("messages").insert([
      {
        name: formData.name,
        email: user.email,
        service: formData.service,
        message: formData.message,
      },
    ]);

    if (error) {
      console.log(error);
      return alert("Error sending message ❌");
    }

    alert("Message sent successfully ✅");

    setFormData({
      name: "",
      service: "",
      message: "",
    });
  };




  const handleChange = (e) => {
    setFormData((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };




  return (
<section className="relative w-full min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white py-20 px-6 md:px-20 overflow-hidden">

  <ParticleBackground />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* ================= TOP ================= */}
    <div className="text-center mb-14">

      <p className="text-[#4bbd97] uppercase tracking-widest text-sm border-[#4bbd97] rounded-full border px-4 py-2 inline-block">
        Get In Touch
      </p>

      {/* ANIMATED HEADING */}
      <h2 className="text-4xl sm:text-5xl font-bold mt-3 flex flex-wrap justify-center gap-2">

        {["Let's", "build", "something"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-gray-900 dark:text-white"
          >
            {word}
          </motion.span>
        ))}

        <motion.span
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#4bbd97] via-[#1cd8d2] to-[#00bf8f] bg-clip-text text-transparent font-bold"
        >
          extraordinary
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-900 dark:text-white"
        >
          together
        </motion.span>
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
      >
        Got a project in mind? Need a technical partner? Or just want to talk
        about the latest web technologies over virtual coffee? Let’s connect
        and turn your ideas into a powerful digital experience.
      </motion.p>

    </div>

    {/* ================= GRID ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* ================= LEFT ================= */}
      <div className="flex flex-col gap-5 max-w-md">

        {[
          {
            icon: <FaLocationDot />,
            title: "Location",
            value: "New Garden Town, Lahore",
          },
          {
            icon: <CgMail />,
            title: "Email",
            value: "tanveerktk1456@gmail.com",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.03 }}
            className="p-4 rounded-lg border border-gray-200 dark:border-white/10 
            bg-gray-100 dark:bg-white/5 
            hover:border-[#4bbd97]
            hover:shadow-[0_0_30px_rgba(75,189,151,0.4)]"
          >
            <div className="flex items-center gap-3">
              <span className="text-[#4bbd97] text-xl">
                {item.icon}
              </span>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* SOCIAL */}
        <motion.div className="p-4 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
          <h4 className="text-sm font-semibold mb-3">Social Links</h4>

          <div className="flex gap-5 text-2xl">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className="hover:text-[#4bbd97] hover:scale-110 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* AVAILABLE BOX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12 p-5 rounded-xl border border-[#4bbd97]/30 
          bg-gradient-to-r from-gray-100 to-white dark:from-black/40 dark:to-black/20 
          backdrop-blur-md shadow-lg
          hover:shadow-[0_0_25px_rgba(75,189,151,0.25)]
          transition-all"
        >

          <div className="flex items-center gap-3 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#4bbd97] animate-pulse"></span>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Available for Work
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Open to freelance projects, collaborations, and full-time opportunities.
          </p>

        </motion.div>
      </div>

      {/* ================= RIGHT FORM ================= */}



      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full lg:w-[90%]"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
 <div>

            {!user ? (
              <button
                onClick={signInWithGoogle}
                className="bg-blue-500 text-white px-5 py-2 rounded"
              >
                Login with Google
              </button>
            ) : (
              <p className="text-green-500">
                Logged in as {user.email}
              </p>
            )}

          </div>
        <input
         name="name"
  value={formData.name}
  onChange={handleChange}
   placeholder="Your Name"
          className="p-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md
          focus:border-[#4bbd97] outline-none"
        />






        <select
        name="service"
  value={formData.service}
  onChange={handleChange}
   placeholder="Select Service"
          className="p-3 bg-gray-100 dark:bg-black border border-gray-200 dark:border-white/10 rounded-md
          focus:border-[#4bbd97] outline-none"
        >
          <option value="">Select Service</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Full Stack</option>
        </select>

        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
     value={formData.message}
          onChange={handleChange}
          className="p-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md
          focus:border-[#4bbd97] outline-none"
        />

    <motion.button
              disabled={!user}
              className="bg-[#4bbd97] text-white py-3 rounded disabled:opacity-50"
            >
              Send Message
            </motion.button>

      </motion.form>

    </div>
  </div>
</section>
  );
}




