"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Zap, MessageSquare, Mail, FileText } from 'lucide-react';
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

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
        {
          name: "Automations",          id: "#products"},
        {
          name: "Consulting",          id: "#contact"},
        {
          name: "Support",          id: "#faq"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/uploaded-1777879078871-82kpjuik.png"
      brandName="AI Kickstart"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Revolutionizing Business with AI Automation"
      description="Unlock efficiency with AI Phone Agents, SMS, and custom workflows. Your business, supercharged by intel."
      buttons={[
        {
          text: "Book Consulting",          href: "#contact"},
        {
          text: "Explore Automations",          href: "#products"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/dark-futuristic-digital-newsroom-backgro-1777879099486-2bbe22f9.png"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/professional-business-executive-looking--1777879139440-02d19c13.png",          alt: "Client A"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/tech-startup-founder-in-modern-office-sl-1777879148933-c8d5f5c2.png",          alt: "Client B"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/creative-strategist-in-dim-environment-s-1777879158683-e2699b82.png",          alt: "Client C"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/data-scientist-working-on-advanced-analy-1777879168019-3cf30f5b.png",          alt: "Client D"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/entrepreneur-in-minimalist-high-end-offi-1777879178584-80d82c52.png",          alt: "Client E"},
      ]}
      avatarText="Trusted by 500+ growing companies"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="The Future of Computer Hack Automation"
      description={[
        "At AI Kickstart, we bridge the gap between complex AI technology and business practicalities.",        "We build bespoke systems that handle your repetitive tasks, from SMS replies to lead capturing, so you can focus on scale."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "AI Phone Agent",          description: "24/7 intelligent customer voice responses.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879107547-f9294f44.png",          buttonIcon: Zap,
        },
        {
          title: "SMS Automation",          description: "Automated text message follow-ups.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879115814-1799c5fd.png",          buttonIcon: MessageSquare,
        },
        {
          title: "Email Sequences",          description: "Smart outreach and response flows.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879123499-1b867dc2.png",          buttonIcon: Mail,
        },
        {
          title: "Lead Forms",          description: "Intelligent, high-converting data intake.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879131054-df9b7e06.png",          buttonIcon: FileText,
        },
      ]}
      title="Choose Your Automations"
      description="Click to customize your package with our floating tech agents."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Starter Agent",          price: "$999",          variant: "Voice + SMS",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879188215-c9f6e9e4.png"},
        {
          id: "p2",          name: "Pro Automation",          price: "$2,499",          variant: "Full Suite",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879197195-bc2d90c5.png"},
        {
          id: "p3",          name: "Email Master",          price: "$499",          variant: "Email Only",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879205429-9528bbe5.png"},
        {
          id: "p4",          name: "Custom Build",          price: "$5,000+",          variant: "Tailored",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879214270-2c54ea48.png"},
        {
          id: "p5",          name: "Support Basic",          price: "$199",          variant: "Maintenance",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879222229-f7c67468.png"},
        {
          id: "p6",          name: "Enterprise AI",          price: "$10,000",          variant: "Scale",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879230394-f2d91ca6.png"},
      ]}
      title="Automation Packages"
      description="Professional-grade AI packages ready to deploy."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "10x",          title: "Faster Growth",          items: [
            "Scalability",            "Reliability"],
        },
        {
          id: "m2",          value: "90%",          title: "Cost Reduction",          items: [
            "Lower overhead",            "Less manual effort"],
        },
        {
          id: "m3",          value: "24/7",          title: "Availability",          items: [
            "Always on",            "Client satisfaction"],
        },
      ]}
      title="Why AI Kickstart?"
      description="Proven results for growing businesses."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "CEO",          company: "Growth Co",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/professional-business-executive-looking--1777879139440-02d19c13.png"},
        {
          id: "2",          name: "Mike T.",          role: "Owner",          company: "Tech Solutions",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/tech-startup-founder-in-modern-office-sl-1777879148933-c8d5f5c2.png"},
        {
          id: "3",          name: "Emily P.",          role: "Founder",          company: "Modern Apps",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/creative-strategist-in-dim-environment-s-1777879158683-e2699b82.png"},
        {
          id: "4",          name: "David L.",          role: "CTO",          company: "Dev Forge",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/data-scientist-working-on-advanced-analy-1777879168019-3cf30f5b.png"},
        {
          id: "5",          name: "Julia V.",          role: "Operations",          company: "Automate Inc",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/entrepreneur-in-minimalist-high-end-offi-1777879178584-80d82c52.png"},
      ]}
      title="What Clients Say"
      description="Businesses that have already kicked off their AI journey."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "How long does it take?",          content: "Most integrations are live within 2-4 weeks."},
        {
          id: "f2",          title: "Is my data secure?",          content: "Absolutely. We follow strict encryption and privacy protocols."},
        {
          id: "f3",          title: "Do you accept Zelle/Stripe?",          content: "Yes, we accept both for your convenience."},
      ]}
      title="Common Questions"
      description="Everything you need to know about starting AI automation."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready to kickstart your growth? Reach out to Aikickstart.intel@gmail.com or call 281-722-7202 to book a consulting call today."
      buttons={[
        {
          text: "Email Us",          href: "mailto:Aikickstart.intel@gmail.com"},
        {
          text: "Call Now",          href: "tel:2817227202"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",          items: [
            {
              label: "Consulting",              href: "#contact"},
            {
              label: "Automations",              href: "#products"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Email",              href: "mailto:Aikickstart.intel@gmail.com"},
            {
              label: "Phone",              href: "tel:2817227202"},
          ],
        },
      ]}
      logoText="AI Kickstart"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
