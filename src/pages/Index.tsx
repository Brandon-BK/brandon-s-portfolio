import { Layout } from "@/components/layout/Layout";
import { HeroSection, WhatIDoSection, FeaturedProjectsSection } from "@/components/home/HomeComponents";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatIDoSection />
      <FeaturedProjectsSection />
    </Layout>
  );
};

export default Index;
