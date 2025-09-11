import React from "react";
import { FadeInOnScroll } from "../Components/AnimatedText";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <FadeInOnScroll>
              <h1 className="heading-large" style={{ color: 'var(--text-primary)' }}>
                Get in Touch
              </h1>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="max-w-2xl">
                <p className="text-xl font-light leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  I'm always interested in discussing aerospace engineering, research opportunities, 
                  and collaborative projects. Feel free to reach out.
                </p>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={400}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-light mb-6" style={{ color: 'var(--text-primary)' }}>Contact Information</h2>
                  <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                    <div>
                      <p className="mb-1" style={{ color: 'var(--text-primary)' }}>Email:</p>
                      <a href="mailto:kspink@uci.edu" className="hover:opacity-70 transition-opacity">kspink@uci.edu</a>
                    </div>
                    <div>
                      <p className="mb-1" style={{ color: 'var(--text-primary)' }}>LinkedIn:</p>
                      <a href="https://www.linkedin.com/in/kyle-spink/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">linkedin.com/kyle-spink</a>
                    </div>
                    <div>
                      <p className="mb-1" style={{ color: 'var(--text-primary)' }}>GitHub:</p>
                      <a href="https://github.com/kylespink13" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">github.com/kylespink13</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-light mb-6" style={{ color: 'var(--text-primary)' }}>Current Focus</h2>
                  <ul className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                    <li>Aeroelasticity</li>
                    <li>The Finite Element Method</li>
                    <li>Mechanics of Composite Structures and the Theory of Plates & Shells</li>
                    <li>Open to internship opportunities and research collaborations</li>
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
