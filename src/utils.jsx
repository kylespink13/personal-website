export const createPageUrl = (pageName) => {
  const pageMap = {
    "Home": "/home",
    "About": "/about",
    "Work": "/work", 
    "Blog": "/blog",
    "Contact": "/contact"
  };
  
  return pageMap[pageName] || "/about";
}; 