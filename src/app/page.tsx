"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarStyleApple
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoin Logo"
        brandName="MemeCoin Hub"
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "FAQ", id: "faq" },
          { name: "Footer", id: "footer" },
        ]}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to MemeCoin Hub!"
          subtitle="Explore the world of MemeCoin"
          contractAddress="0xYourContractAddressHere"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About MemeCoin"
          descriptions={["MemeCoin is your gateway to fun and investments!", "Join a community that's here for the memes and the money!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understand the financial structure of MemeCoin"
          tokenData={[
            { value: "$0.01", description: "Current Price" },
            { value: "1 Billion", description: "Total Supply" },
            { value: "20%", description: "Liquidity" },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ items={[
          { title: "What is MemeCoin?", content: "A cryptocurrency focused on memes!" },
          { title: "How do I buy MemeCoin?", content: "Visit our How to Buy section!" },
        ]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Logo"
          logoText="MemeCoin Hub"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => console.log('Privacy clicked') }] },
            { items: [{ label: "Terms of Service", onClick: () => console.log('Terms clicked') }] }
          ]}
          onPrivacyClick={() => console.log('Privacy clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}
