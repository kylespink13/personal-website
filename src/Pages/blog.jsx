import React from "react";
import { Link } from "react-router-dom";
import { FadeInOnScroll } from "../Components/AnimatedText";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Orbital Mechanics",
      excerpt: "A deep dive into the mathematical principles behind spacecraft trajectories and orbital dynamics.",
      date: "2024-01-15",
      tags: ["Orbital Mechanics", "Mathematics", "Aerospace"]
    },
    {
      id: 2,
      title: "Computational Fluid Dynamics in Aerospace",
      excerpt: "Exploring the role of CFD in modern aerospace design and analysis.",
      date: "2024-01-10",
      tags: ["CFD", "Aerodynamics", "Simulation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <FadeInOnScroll>
              <h1 className="heading-large text-zinc-100">
                Journal
              </h1>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <article key={post.id} className="border border-zinc-700 p-6 rounded-lg">
                    <Link to={`/blog/${post.id}`} className="block">
                      <h2 className="text-xl font-light mb-2 text-zinc-100 hover:text-zinc-300 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-zinc-400 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-zinc-500">{post.date}</span>
                        <div className="flex gap-2">
                          {post.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
