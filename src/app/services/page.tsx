"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Phone, MessageSquare, Mail, FileText, Globe, Zap } from "lucide-react";

export default function ServicesPage() {
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
                { name: "Success", id: "/#testimonials" },
                { name: "Contact", id: "/#contact" },
            ]}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/uploaded-1777879078871-82kpjuik.png"
            brandName="AI Kickstart"
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroSplit
                title="Services & Solutions"
                description="Our end-to-end AI deployment services are designed for operational excellence and high-velocity growth."
                background={{ variant: "sparkles-gradient" }}
                buttons={[{ text: "Get Started", href: "/#contact" }]}
                imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/dark-futuristic-digital-newsroom-backgro-1777879099486-2bbe22f9.png"
            />
        </div>

        <div id="features" data-section="features">
            <FeatureCardTen
                title="Comprehensive AI Toolset"
                textboxLayout="split"
                animationType="slide-up"
                useInvertedBackground={false}
                features={[
                    {
                        title: "Intelligent Communication",                        description: "Deploy autonomous agents that handle your customer interactions with human-like precision.",                        media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879188215-c9f6e9e4.png" },
                        items: [{ icon: Phone, text: "Voice Agents" }, { icon: MessageSquare, text: "SMS Automation" }],
                        reverse: false
                    },
                    {
                        title: "Operational Efficiency",                        description: "Streamline your backend with automated workflows that ensure consistency and reliability.",                        media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C9gXvKiqeUxpYZSYQSPOgJxRHe/stylized-3d-floating-bubble-icon-represe-1777879205429-9528bbe5.png" },
                        items: [{ icon: Mail, text: "Email Sequences" }, { icon: FileText, text: "Smart Forms" }, { icon: Globe, text: "AI Websites" }],
                        reverse: true
                    }
                ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBaseCard
            logoText="AI Kickstart"
            columns={[
                { title: "Service", items: [{ label: "Consulting", href: "/#contact" }, { label: "AI Agents", href: "/services" }] },
                { title: "Payment", items: [{ label: "Stripe", href: "#" }, { label: "Zelle", href: "#" }] }
            ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}