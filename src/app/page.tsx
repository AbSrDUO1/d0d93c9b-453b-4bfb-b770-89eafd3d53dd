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
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarStyleApple
        brand="MemeCoin Hub"
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'FAQ', id: 'faq' },
          { name: 'Footer', id: 'footer' },
        ]}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to MemeCoin Hub"
          subtitle="Your gateway to the most exciting meme coin!"
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Discover MemeCoin"
          descriptions={[
            "MemeCoin is designed to bring a fun experience to the crypto world.",
            "Join a vibrant community that values humor and innovation.",
            "Get involved and be a part of the meteoric rise of MemeCoin!",
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
          steps={[
            { title: 'Step 1', description: 'Get a Wallet', image: '/images/wallet.svg', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Buy MemeCoin', image: '/images/memecoin.svg', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Join Community', image: '/images/community.svg', position: 'right', isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understanding the distribution and structure of MemeCoin."
          tokenData={[
            { value: '1,000,000', description: 'Total Supply' },
            { value: '500,000', description: 'Circulating Supply' },
            { value: '300,000', description: 'Liquidity Pool' },
            { value: '200,000', description: 'Burned Tokens' },
          ]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[
            { title: 'What is MemeCoin?', content: 'MemeCoin is a cryptocurrency built on humor and innovation.' },
            { title: 'How can I buy MemeCoin?', content: 'You can buy MemeCoin on various exchanges after setting up a wallet.' },
            { title: 'What are the perks of holding MemeCoin?', content: 'Holders gain access to exclusive community events and rewards.' },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin"
          logoText="MemeCoin Hub"
          columns={[
            { items: [{ label: 'Home', onClick: () => { } }, { label: 'About', onClick: () => { } }, { label: 'How to Buy', onClick: () => { } }] },
            { items: [{ label: 'Tokenomics', onClick: () => { } }, { label: 'FAQ', onClick: () => { } }, { label: 'Contact', onClick: () => { } }] },
            { items: [{ label: 'Privacy Policy', onClick: () => { } }, { label: 'Terms of Service', onClick: () => { } }, { label: 'Support', onClick: () => { } }] },
          ]}
          copyrightText="© 2023 MemeCoin Hub"
          onPrivacyClick={() => { }}
        />
      </div>
    </SiteThemeProvider>
  );
}