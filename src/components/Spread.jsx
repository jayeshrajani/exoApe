import { motion } from "framer-motion";

function Spread() {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center bg-zinc-100 flex flex-col gap-20 text-black overflow-hidden">
      <div className="w-full max-w-7xl mx-auto heading flex flex-col items-center">
        {/* "Spread" coming from the left */}
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }} // Start from the left
          whileInView={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ ease: "easeInOut", duration: 1.5 }} // Smooth easing
          className="origin-left text-6xl font-light text-center"
        >
          Spread
        </motion.h1>

        {/* "The News" coming from the right */}
        <motion.span
          initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right
          whileInView={{ x: 0, opacity: 1 }} // Move to the center
          transition={{ ease: "easeInOut", duration: 1.5 }} // Smooth easing
          className="text-6xl font-light origin-bottom-left"
        >
          The News
        </motion.span>
      </div>
      <p className="px-5 text-center text-s">
        Find out more about our work on these leading design and technology platforms.
      </p>
    </div>
  );
}

export default Spread;
