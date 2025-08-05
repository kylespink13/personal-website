import React from "react";
import { FadeInOnScroll } from "../Components/AnimatedText";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <FadeInOnScroll>
              <h1 className="heading-large text-zinc-100">
                Get in Touch
              </h1>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="max-w-2xl">
                <p className="text-xl font-light text-zinc-400 leading-relaxed mb-8">
                  I'm always interested in discussing aerospace engineering, research opportunities, 
                  and collaborative projects. Feel free to reach out.
                </p>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={400}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-light mb-6 text-zinc-100">Contact Information</h2>
                  <div className="space-y-4 text-zinc-400">
                    <div>
                      <p className="text-zinc-300 mb-1">Email:</p>
                      <p>your.email@university.edu</p>
                    </div>
                    <div>
                      <p className="text-zinc-300 mb-1">LinkedIn:</p>
                      <p>linkedin.com/in/yourprofile</p>
                    </div>
                    <div>
                      <p className="text-zinc-300 mb-1">GitHub:</p>
                      <p>github.com/yourusername</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-light mb-6 text-zinc-100">Current Focus</h2>
                  <div className="space-y-4 text-zinc-400">
                    <p>• Orbital mechanics simulation development</p>
                    <p>• Heat transfer optimization research</p>
                    <p>• Computational analysis workflows</p>
                    <p>• Open to research collaborations</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
