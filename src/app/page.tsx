"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { BarChart, Target, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Solutions",
          id: "#solutions",
        },
        {
          name: "Case Studies",
          id: "#case-studies",
        },
        {
          name: "Metrics",
          id: "#metrics",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="VGG Media"
      button={{
        text: "Explore Our AI Solutions",
        href: "#solutions",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "downward-rays-animated-grid",
      }}
      title="AI-Powered Media: Smarter Results, Faster"
      description="VGG Media combines artificial intelligence with strategic expertise to transform how brands create, distribute, and optimize media campaigns. Achieve unprecedented scale and precision."
      buttons={[
        {
          text: "Explore Our AI Solutions",
          href: "#solutions",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301535.jpg"
      imageAlt="AI-Powered Media Solutions Dashboard"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Transforming Media with Intelligence"
      metrics={[
        {
          icon: Zap,
          label: "AI Strategy",
          value: "Core",
        },
        {
          icon: BarChart,
          label: "Media Optimization",
          value: "Advanced",
        },
        {
          icon: Target,
          label: "Campaign Management",
          value: "Seamless",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="solutions" data-section="solutions">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "ai-content-creation",
          title: "Intelligent Content Creation",
          subtitle: "Generate high-quality, on-brand content at unprecedented speed and scale with our advanced AI.",
          category: "Content",
          value: "Effortless",
        },
        {
          id: "audience-targeting",
          title: "Precision Audience Targeting",
          subtitle: "Identify and engage your ideal customers with pinpoint accuracy through AI-powered segmentation and behavioral analysis.",
          category: "Audience",
          value: "Accurate",
        },
        {
          id: "real-time-optimization",
          title: "Real-time Campaign Optimization",
          subtitle: "Continuously monitor and adapt campaigns with AI that learns and optimizes for maximum ROI in real-time.",
          category: "Campaigns",
          value: "Dynamic",
        },
        {
          id: "programmatic-media-buying",
          title: "Smart Programmatic Media Buying",
          subtitle: "Automate and optimize ad placements across channels with AI-driven programmatic buying for superior efficiency.",
          category: "Media Buying",
          value: "Optimized",
        },
      ]}
      title="Our AI-Driven Solutions"
      description="Leverage VGG Media's cutting-edge artificial intelligence to revolutionize your brand's media strategy, content creation, and campaign performance."
    />
  </div>

  <div id="ai-products" data-section="ai-products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "content-genius-pro",
          name: "ContentGenius Pro",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/black-person-programming-neural-network-code-with-green-screen_482257-121370.jpg",
          imageAlt: "ContentGenius Pro AI software interface",
        },
        {
          id: "audiencescope-ai",
          name: "AudienceScope AI",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/remote-worker-home-watching-business-conference-pc-monitor-looking-statistics_482257-135558.jpg",
          imageAlt: "AudienceScope AI analytics dashboard",
        },
        {
          id: "campaignpilot-x",
          name: "CampaignPilot X",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-agency-office-using-financial-application-ui-pc-screen_482257-119398.jpg",
          imageAlt: "CampaignPilot X AI campaign management system",
        },
        {
          id: "mediabid-ai",
          name: "MediaBid AI",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/robot-showing-good-progress-graph_1048-3512.jpg",
          imageAlt: "MediaBid AI programmatic bidding platform",
        },
        {
          id: "marketlens-pro",
          name: "MarketLens Pro",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/market-trends-concept-with-laptop_23-2150372444.jpg",
          imageAlt: "MarketLens Pro competitive intelligence platform",
        },
        {
          id: "insighthub-360",
          name: "InsightHub 360",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-provides-cancer-screening-guidance-patient-office_482257-126373.jpg",
          imageAlt: "InsightHub 360 AI reporting and visualization tool",
        },
      ]}
      title="Proprietary AI Tools for Enterprise"
      description="Discover the exclusive AI platforms developed by VGG Media to give your business an unparalleled edge in digital marketing."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "ad-spend-reduction",
          value: "75%",
          title: "Reduction in Ad Spend",
          description: "Optimize budgets and eliminate waste with AI-driven efficiency.",
          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904325.jpg",
          imageAlt: "75% Reduction in Ad Spend",
        },
        {
          id: "content-production-speed",
          value: "4X",
          title: "Faster Content Production",
          description: "Accelerate content creation with AI, delivering campaigns quicker.",
          imageSrc: "http://img.b2bpic.net/free-photo/communication-social-media-icons-personal-computer_23-2150781064.jpg",
          imageAlt: "4X Content Production Speed",
        },
        {
          id: "audience-engagement-increase",
          value: "90%",
          title: "Increase in Audience Engagement",
          description: "Captivate your audience with highly relevant and personalized content.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-mobile-desk-success-diagram_1163-2762.jpg",
          imageAlt: "90% Increase in Audience Engagement",
        },
        {
          id: "higher-conversion-rates",
          value: "30%",
          title: "Higher Conversion Rates",
          description: "Drive more sales and leads through precise targeting and optimization.",
          imageSrc: "http://img.b2bpic.net/free-photo/copy-space-geometric-paper-objects_23-2148547793.jpg",
          imageAlt: "30% Higher Conversion Rates",
        },
      ]}
      title="Quantifiable Impact of AI Media"
      description="Our clients experience significant improvements across key performance indicators, showcasing the tangible benefits of AI integration."
    />
  </div>

  <div id="case-studies" data-section="case-studies">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "GlobalTech Solutions",
        "FinWise Group",
        "HealthAI Innovations",
        "CommerceFlow Labs",
        "Precision Mfg. Corp.",
        "Luxus Brands",
        "ProSports Analytics",
      ]}
      title="Trusted by Industry Leaders"
      description="Our AI-powered media solutions are driving success for a diverse range of enterprise clients across various sectors."
      speed={50}
      showCard={false}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Eleanor Vance",
          role: "CEO, GlobalTech Solutions",
          testimonial: "VGG Media's AI capabilities are truly groundbreaking. We've seen a dramatic increase in campaign efficiency and ROI. Their team seamlessly integrated advanced AI into our existing workflows, delivering results that exceeded all expectations.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=8qgcju",
          imageAlt: "Eleanor Vance, CEO",
        },
        {
          id: "2",
          name: "Marcus Chen",
          role: "Marketing Director, FinWise Group",
          testimonial: "The precision targeting achieved through VGG Media's AI is unmatched. We're reaching our exact audience segments with highly relevant content, leading to a significant boost in engagement and conversion rates. A true game-changer for our digital strategy.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-business-man-working-laptop-lobby_1262-5635.jpg",
          imageAlt: "Marcus Chen, Marketing Director",
        },
        {
          id: "3",
          name: "Sophia Rodriguez",
          role: "CTO, HealthAI Innovations",
          testimonial: "As a technology-driven company, we appreciate VGG Media's deep understanding of AI. Their proprietary tools have allowed us to scale our content production fourfold while maintaining brand consistency. Their expertise is invaluable.",
          imageSrc: "http://img.b2bpic.net/free-photo/engineer-server-farm-checking-recovery-plan-laptop-monitoring-data-center_482257-105219.jpg",
          imageAlt: "Sophia Rodriguez, CTO",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Brand Manager, Luxus Brands",
          testimonial: "Our partnership with VGG Media has redefined our brand's digital presence. The AI-powered insights and real-time optimization have ensured our luxury campaigns resonate perfectly with our discerning clientele, driving both awareness and sales.",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-mature-businessman-sitting-staircase_23-2147955320.jpg",
          imageAlt: "David Kim, Brand Manager",
        },
        {
          id: "5",
          name: "Isabelle Dubois",
          role: "Operations Lead, CommerceFlow Labs",
          testimonial: "The efficiency gains from VGG Media's AI are simply incredible. Our ad spend has been drastically reduced without compromising reach or performance. Their solutions provide clear, measurable ROI, making them an indispensable partner.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-staff-airport-terminal_107420-85049.jpg",
          imageAlt: "Isabelle Dubois, Operations Lead",
        },
      ]}
      title="What Our Clients Say"
      description="Hear directly from the C-level executives and marketing directors who have experienced transformative results with VGG Media's AI solutions."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What makes VGG Media's AI solutions unique?",
          content: "Our AI is built on proprietary algorithms specifically designed for media optimization, content generation, and audience targeting at an enterprise scale. We focus on measurable ROI and seamless integration.",
        },
        {
          id: "2",
          title: "How does AI improve media campaign performance?",
          content: "AI enhances campaigns through real-time data analysis, predictive analytics for audience behavior, automated content personalization, and dynamic bidding strategies, leading to higher efficiency and conversions.",
        },
        {
          id: "3",
          title: "What kind of content can your AI generate?",
          content: "Our AI can generate a wide range of content, including ad copy, social media posts, blog articles, video scripts, and image concepts, all tailored to your brand voice and audience preferences.",
        },
        {
          id: "4",
          title: "How do you ensure data privacy and security?",
          content: "Data privacy and security are paramount. We adhere to industry-leading encryption standards and compliance protocols, ensuring all client data is protected and handled with the utmost care.",
        },
        {
          id: "5",
          title: "What is the typical onboarding process for new clients?",
          content: "Our onboarding process is designed for efficiency. It typically involves an initial consultation, a deep-dive into your objectives, platform integration, and a phased rollout of AI-powered strategies, with continuous support.",
        },
        {
          id: "6",
          title: "Can your AI integrate with our existing marketing stack?",
          content: "Yes, our solutions are designed for flexible integration. We work with various APIs and platforms to ensure our AI tools complement and enhance your current marketing technology ecosystem.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about VGG Media, our AI-powered solutions, and how we partner with enterprise clients to achieve superior media performance."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Partner with VGG Media"
      description="Ready to unlock the full potential of AI for your media campaigns? Get in touch with our experts to schedule a consultation and see how we can drive smarter results, faster."
      inputs={[
        {
          name: "fullName",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "companyEmail",
          type: "email",
          placeholder: "Work Email",
          required: true,
        },
        {
          name: "companyName",
          type: "text",
          placeholder: "Company Name",
          required: true,
        },
        {
          name: "jobTitle",
          type: "text",
          placeholder: "Job Title",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your project goals...",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/row-blue-liquid-glasses-with-shadow-colored-background_23-2147949151.jpg"
      imageAlt="AI-powered communication interface"
      mediaAnimation="opacity"
      mediaPosition="left"
      buttonText="Request a Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="VGG Media"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Solutions",
              href: "#solutions",
            },
            {
              label: "Case Studies",
              href: "#case-studies",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 VGG Media. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
