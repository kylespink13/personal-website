import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils.jsx";

const navigationItems = [
  { title: "Index", url: createPageUrl("Home") },
  { title: "Profile", url: createPageUrl("About") },
  { title: "Work", url: createPageUrl("Work") },
  { title: "Journal", url: createPageUrl("Blog") },
  { title: "Contact", url: createPageUrl("Contact") },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRefs = useRef({});
  const navContainerRef = useRef(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Redirect to Home if on root path
  useEffect(() => {
    if (location.pathname === "/") {
      window.history.replaceState(null, null, createPageUrl("Home"));
    }
  }, [location.pathname]);

  // Determine background and text colors based on current page
  const getPageStyles = () => {
    const currentPath = location.pathname;
    
    if (currentPath === createPageUrl("Home") || currentPath === "/") {
      return {
        background: "rgb(24, 24, 27)",
        textPrimary: "#fafafa",
        textSecondary: "#a1a1aa",
        accent: "#d4d4d8",
        border: "#3f3f46"
      };
    } else if (currentPath === createPageUrl("About") || currentPath === createPageUrl("Work")) {
      return {
        background: "rgb(87, 98, 91)",
        textPrimary: "#fafafa",
        textSecondary: "#a1a1aa",
        accent: "#d4d4d8",
        border: "rgba(255, 255, 255, 0.1)"
      };
    } else if (currentPath === createPageUrl("Blog") || currentPath === createPageUrl("Contact") || currentPath.includes("BlogPost")) {
      return {
        background: "rgb(157, 153, 142)",
        textPrimary: "rgb(24, 24, 27)",
        textSecondary: "rgb(60, 60, 67)",
        accent: "rgb(24, 24, 27)",
        border: "rgba(24, 24, 27, 0.1)"
      };
    }
    
    // Default fallback
    return {
      background: "rgb(24, 24, 27)",
      textPrimary: "#fafafa",
      textSecondary: "#a1a1aa",
      accent: "#d4d4d8",
      border: "#3f3f46"
    };
  };

  const pageStyles = getPageStyles();

  useEffect(() => {
    // Small delay to ensure DOM elements are rendered
    const timer = setTimeout(() => {
      updateNavUnderline();
      if (isInitialLoad) {
        setIsInitialLoad(false);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname, isInitialLoad]);

  const updateNavUnderline = () => {
    const currentPath = location.pathname === "/" ? createPageUrl("Home") : location.pathname;
    const activeNavItem = navigationItems.find(item => item.url === currentPath);
    
    if (activeNavItem && navRefs.current[activeNavItem.title] && navContainerRef.current) {
      const container = navContainerRef.current;
      const activeButton = navRefs.current[activeNavItem.title];
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      setUnderlineStyle({
        width: buttonRect.width,
        left: buttonRect.left - containerRect.left,
        transition: isInitialLoad ? 'none' : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: 1
      });
    } else {
      // Hide underline if no active item found
      setUnderlineStyle({
        width: 0,
        left: 0,
        transition: isInitialLoad ? 'none' : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: 0
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ background: pageStyles.background, color: pageStyles.textPrimary }}>
      <style>{`
        :root {
          --bg-primary: ${pageStyles.background};
          --text-primary: ${pageStyles.textPrimary};
          --text-secondary: ${pageStyles.textSecondary};
          --accent: ${pageStyles.accent};
          --border: ${pageStyles.border};
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
        }
        
        .nav-active {
          color: var(--text-primary);
        }
        
        .nav-inactive {
          color: var(--text-secondary);
        }
        
        .portfolio-text {
          font-weight: 300;
          letter-spacing: -0.02em;
        }
        
        .heading-large {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.9;
          font-weight: 300;
          letter-spacing: -0.04em;
        }
        
        .text-muted {
          color: var(--text-secondary);
        }

        .fade-in-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .typewriter {
          overflow: hidden;
          border-right: 2px solid var(--text-primary);
          white-space: nowrap;
          animation: typewriter 3s steps(40, end), blink 0.75s step-end infinite;
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          from, to { border-color: transparent; }
          50% { border-color: var(--text-primary); }
        }

        .mobile-menu-overlay {
          background: var(--bg-primary);
          border-color: var(--border);
        }
      `}</style>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{ background: `${pageStyles.background}80`, borderColor: pageStyles.border }}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <Link 
              to={createPageUrl("Home")} 
              className="text-lg font-light transition-colors hover:opacity-70"
              style={{ color: pageStyles.textPrimary }}
              onClick={scrollToTop}
            >
              Kyle Spink
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center relative" ref={navContainerRef}>
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => {
                  const isActive = (location.pathname === "/" && item.url === createPageUrl("Home")) || 
                                  (location.pathname === item.url);
                  
                  return (
                    <Link
                      key={item.title}
                      ref={el => navRefs.current[item.title] = el}
                      to={item.url}
                      className="font-light transition-colors hover:opacity-70 pb-1"
                      style={{ 
                        color: isActive ? pageStyles.textPrimary : pageStyles.textSecondary 
                      }}
                      onClick={scrollToTop}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
              {/* Animated underline */}
              <div 
                className="absolute bottom-0 h-px"
                style={{
                  ...underlineStyle,
                  backgroundColor: pageStyles.textPrimary
                }}
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 transition-colors hover:opacity-70"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: pageStyles.textSecondary }}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mobile-menu-overlay border-t" style={{ borderColor: pageStyles.border }}>
            <div className="max-w-7xl mx-auto px-8 py-6">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => {
                  const isActive = (location.pathname === "/" && item.url === createPageUrl("Home")) || 
                                  (location.pathname === item.url);
                  
                  return (
                    <Link
                      key={item.title}
                      to={item.url}
                      className="font-light py-2 transition-colors hover:opacity-70"
                      style={{ 
                        color: isActive ? pageStyles.textPrimary : pageStyles.textSecondary 
                      }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        scrollToTop();
                      }}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t mt-32" style={{ borderColor: pageStyles.border }}>
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm" style={{ color: pageStyles.textSecondary }}>
            <div>
              <p className="mb-1" style={{ color: pageStyles.textSecondary }}>Availability:</p>
              <p>Open to opportunities</p>
            </div>
            <div>
              <p className="mb-1" style={{ color: pageStyles.textSecondary }}>Contact:</p>
              <p>kspink@uci.edu</p>
            </div>
            <div>
              <p className="mb-1" style={{ color: pageStyles.textSecondary }}>Current location:</p>
              <p>Santa Barbara, CA</p>
            </div>
            <div>
              <p className="mb-1" style={{ color: pageStyles.textSecondary }}>Copyright:</p>
              <p>©2024 Kyle Spink</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
