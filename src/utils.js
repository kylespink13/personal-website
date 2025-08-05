export const createPageUrl = (pageName) => {
  const pageMap = {
    "Home": "/",
    "About": "/about",
    "Work": "/work", 
    "Blog": "/blog",
    "Contact": "/contact"
  };
  
  return pageMap[pageName] || "/";
}; 