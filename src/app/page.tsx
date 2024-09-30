"use client";

import { Box } from "@chakra-ui/react";
import AssetsSection from "../components/AssetsSection/AssetsSection";
import GifsSection from "../components/GifsSection/GifsSection";
import Footer from "../components/Footer/Footer";
import Partners from '../components/PartnerSection/Partners';
import StickerSet from "@/components/StrickerSet/StickerSet";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import BitcoinVideoComponent from "@/components/MovieSection/BitcoinVideoComponent";
import ColoringPages from "@/components/ColoringPagesSection/ColoringPages";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/HeroSection";
import { ColorProvider } from "./ColorProvider";

const Home: React.FC = () => {
  return (
    <>
      <ColorProvider>
        <Header />
        <Hero />
      </ColorProvider>

      <Box
        px={{
          base: 6,
          lg: "192px",
        }}
      >
        <AssetsSection />
      </Box>
      <StickerSet />
   
      <Box
        px={{
          base: 6,
          lg: "192px",
        }}
      >
        <GifsSection />

        <Partners />

      </Box>
     
      <ProductShowcase />
      <BitcoinVideoComponent />
      <ColoringPages />
      <Footer />
    </>
  );
};

export default Home;
