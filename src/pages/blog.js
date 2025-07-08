import SEO from "components/SEO";
import ComingSoon from "components/ComingSoon";
import { useEffect } from "react";

const Blog = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Blog - Compass Survey" description="Blog" />
      <ComingSoon />
    </>
  );
};

export default Blog;