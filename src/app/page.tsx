"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogo from '@/components/footer/FooterLogo';
import { Percent } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'funAndTrendy',
      colorTemplate: 1,
      textAnimation: 'slide'
    }}>
      <NavbarLayoutFloatingOverlay
        logoSrc="/images/logo.svg"
        logoHeight={50}
        logoWidth={150}
        buttonText="Learn more"
        onButtonClick={() => { /* Handle button click here */ }}
        navItems={[
          { name: 'hero', id: 'hero' },
          { name: 'about', id: 'about' },
          { name: 'how-to-buy', id: 'how-to-buy' },
          { name: 'tokenomics', id: 'tokenomics' },
          { name: 'faq', id: 'faq' },
          { name: 'footer', id: 'footer' }
        ]}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to MemeCoin Hub"
          subtitle="The future of fun finance"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { /* Handle click here */ }}
          onSecondaryButtonClick={() => { /* Handle click here */ }}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About MemeCoin Hub"
          descriptions={[
            "MemeCoin Hub is a playful and vibrant platform for enthusiasts and investors alike.",
            "Join our community and dive into the world of meme-inspired investments."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy MemeCoin"
          steps={[
            { title: "Step 1", description: "Set up your wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase on an exchange", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Join our community", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="The fundamentals of our token's economy."
          kpiItems={[
            { value: "1,000,000", description: "Total Supply", icon: Percent },
            { value: "0.01", description: "Initial Price", icon: Percent }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is MemeCoin?", content: "MemeCoin is a fun, innovative cryptocurrency that embraces internet culture." },
            { title: "How do I buy MemeCoin?", content: "You can purchase MemeCoin on major exchanges or through our platform." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Logo"
          logoText="MemeCoin Hub"
          className="footer-logo"
          svgClassName="footer-logo-svg"
        />
      </div>
    </SiteThemeProvider>
  );
}