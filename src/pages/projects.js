import SEO from "components/SEO";
import ComingSoon from "components/ComingSoon";
import { useEffect } from "react";

const Projects = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Projects - Compass Survey" description="Projects" />
      <ComingSoon />
    </>
  );
};

export default Projects; 