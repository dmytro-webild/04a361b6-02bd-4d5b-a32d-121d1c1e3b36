"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { MessageSquare, Mail, Phone, FileText, Globe } from 'lucide-react';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="large"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Services", id: "/services" },
        { name: "Success", id: "#testimonials" },
        { name: "Contact", id: "#contact" },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/uploaded-1777879078871-82kpjuik.png"
      brandName="AI Kickstart"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="AI Kickstart: Newsroom Speed, Tech Precision"
      description="Deploy AI Phone Agents, SMS flows, and custom intelligent workflows for your business at light speed."
      buttons={[
        { text: "Get Free Consultation", href: "#contact" },
        { text: "Our Services", href: "/services" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/dark-futuristic-digital-newsroom-backgro-1777879099486-2bbe22f9.png?_wi=1"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      title="AI Infrastructure"
      description="Professional-grade automation tools for modern enterprises."
      textboxLayout="split"
      useInvertedBackground={false}
      animationType="slide-up"
      buttons={[
        { text: "Start Automating Now", href: "#contact" }
      ]}
      features={[
        { icon: Phone, title: "AI Phone Agents", description: "Voice-enabled intelligent response systems." },
        { icon: MessageSquare, title: "SMS Automation", description: "Trigger-based high-conversion outreach." },
        { icon: Mail, title: "Email Sequences", description: "Personalized nurture streams at scale." },
        { icon: FileText, title: "Smart Forms", description: "Automated lead qualification and data intake." },
        { icon: Globe, title: "Websites", description: "Custom AI-generated pages for landing traffic." },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      title="Impact Analytics"
      description="Quantifiable growth through intelligent systems."
      textboxLayout="split"
      useInvertedBackground={false}
      animationType="blur-reveal"
      metrics={[
        { id: "1", value: "10x", title: "Throughput", description: "Process tasks faster than ever.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879188215-c9f6e9e4.png?_wi=1" },
        { id: "2", value: "90%", title: "Manual Work", description: "Automation that eliminates repetitive overhead.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879205429-9528bbe5.png?_wi=1" },
      ]}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      names={["AI Kickstart", "Tech Velocity", "Newsroom AI", "Automated Ops", "Intel Flow"]}
      title="Trusted by Modern Enterprises"
      description="Collaborating with top-tier innovators globally."
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      title="Partner Success Stories"
      description="See how leaders leverage AI Kickstart."
      textboxLayout="split"
      useInvertedBackground={false}
      animationType="slide-up"
      buttons={[
        { text: "Join These Partners", href: "#contact" }
      ]}
      testimonials={[
        { id: "1", name: "Sarah Jones", handle: "@sarahj", testimonial: "The AI phone agent integration transformed our sales pipeline immediately." },
        { id: "2", name: "Mike Thompson", handle: "@miket", testimonial: "Professional setup and immediate ROI. Highly recommended." },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Ready to revolutionize your workflow? Let's build your AI-powered newsroom today."
      background={{ variant: "sparkles-gradient" }}
      useInvertedBackground={false}
      buttons={[
        { text: "Get Free Consultation", href: "mailto:Aikickstart.intel@gmail.com" },
        { text: "Book Strategy Call", href: "https://calendly.com/" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="AI Kickstart"
      columns={[
        { title: "Service", items: [{ label: "Consulting", href: "#contact" }, { label: "AI Agents", href: "/services" }] },
        { title: "Payment", items: [{ label: "Stripe", href: "#" }, { label: "Zelle", href: "#" }]
      }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}