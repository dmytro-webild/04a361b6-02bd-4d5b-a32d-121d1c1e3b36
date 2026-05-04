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
        { name: "Automations", id: "#features" },
        { name: "Testimonials", id: "#testimonials" },
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
        { text: "Book Consultation", href: "#contact" },
        { text: "View Payments", href: "#footer" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/dark-futuristic-digital-newsroom-backgro-1777879099486-2bbe22f9.png"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      title="Automation Selection"
      description="Select your specialized AI agent to optimize your operations."
      textboxLayout="split"
      useInvertedBackground={false}
      animationType="slide-up"
      features={[
        { icon: Phone, title: "AI Phone Agent", description: "Intelligent 24/7 inbound/outbound voice responses." },
        { icon: MessageSquare, title: "SMS Automation", description: "Automated triggers for high-engagement text follow-ups." },
        { icon: Mail, title: "Email Sequences", description: "Personalized automated outreach for scale." },
        { icon: FileText, title: "Smart Forms", description: "Capture and qualify leads with dynamic AI intake." },
        { icon: Globe, title: "Automated Websites", description: "Instantly generated web pages for lead capture." },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      title="Operational Velocity"
      description="Performance data for AI-augmented businesses."
      textboxLayout="split"
      useInvertedBackground={false}
      animationType="blur-reveal"
      metrics={[
        { id: "1", value: "10x", title: "Throughput", description: "Process tasks faster than ever.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879188215-c9f6e9e4.png" },
        { id: "2", value: "90%", title: "Manual Work", description: "Significant reduction in repetitive hours.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879205429-9528bbe5.png" },
      ]}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      names={["AI Kickstart", "Tech Velocity", "Newsroom AI", "Automated Ops", "Intel Flow"]}
      title="Powering Industry Leaders"
      description="We serve high-growth enterprises."
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      title="Client Success Stories"
      description="Hear from our partners."
      textboxLayout="split"
      useInvertedBackground={false}
      animationType="slide-up"
      testimonials={[
        { id: "1", name: "Sarah Jones", handle: "@sarahj", testimonial: "The AI phone agent integration transformed our sales pipeline immediately." },
        { id: "2", name: "Mike Thompson", handle: "@miket", testimonial: "Professional setup and immediate ROI. Highly recommended." },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Get started today. Email us at Aikickstart.intel@gmail.com or call 281-722-7202. We accept Stripe and Zelle payments."
      background={{ variant: "sparkles-gradient" }}
      useInvertedBackground={false}
      buttons={[
        { text: "Get Free Consultation", href: "mailto:Aikickstart.intel@gmail.com" },
        { text: "View Our Services", href: "#features" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="AI Kickstart"
      columns={[
        { title: "Service", items: [{ label: "Consulting", href: "#contact" }] },
        { title: "Payment", items: [{ label: "Stripe", href: "#" }, { label: "Zelle", href: "#" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}