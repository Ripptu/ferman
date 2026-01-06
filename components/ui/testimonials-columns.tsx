import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="p-8 rounded-3xl border border-white/40 bg-white/60 backdrop-blur-md shadow-lg shadow-emerald-900/5 max-w-xs w-full hover:border-accent/50 transition-colors duration-300" 
                key={i}
              >
                <p className="text-gray-700 leading-relaxed font-medium mb-6">"{text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={image}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="flex flex-col">
                    <div className="font-bold text-primary tracking-tight leading-tight">{name}</div>
                    <div className="text-sm text-emerald-700/70 font-semibold leading-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};