import React from "react";
import { FadeInOnScroll } from "../Components/AnimatedText";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <FadeInOnScroll>
              <h1 className="heading-large text-zinc-100">
                About Me
              </h1>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="max-w-2xl">
                <p className="text-xl font-light text-zinc-400 leading-relaxed">
                  I'm a third-year aerospace engineering student passionate about the mathematical foundations of flight, 
                  orbital mechanics, and computational aerospace systems.
                </p>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={400}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-light mb-4 text-zinc-100">Education</h2>
                  <p className="text-zinc-400">Bachelor of Science in Aerospace Engineering</p>
                  <p className="text-zinc-400">Expected Graduation: 2025</p>
                </div>
                <div>
                  <h2 className="text-2xl font-light mb-4 text-zinc-100">Skills</h2>
                  <ul className="text-zinc-400 space-y-2">
                    <li>Computational Fluid Dynamics</li>
                    <li>Orbital Mechanics</li>
                    <li>Applied Mathematics</li>
                    <li>Python, MATLAB</li>
                  </ul>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
