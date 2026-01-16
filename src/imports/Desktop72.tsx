import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import svgPaths from "./svg-bngkqqxd9l";
import clsx from "clsx";
import { motion, useInView, AnimatePresence } from "motion/react";
import { VideoModal } from "../app/components/VideoModal";
import { CloudPracticePage } from "../app/components/CloudPracticePage";
import { AIPage } from "../app/components/AIPage";
import { AgentStudioPage } from "../app/components/AgentStudioPage";
import { CaseStudiesPage } from "../app/components/CaseStudiesPage";
import { WhoWeAreDropdown } from "../app/components/WhoWeAreDropdown";
import { OurTeamPage } from "../app/components/OurTeamPage";
import { DigitalEngineeringPage } from "../app/components/DigitalEngineeringPage";
import { BigDataPage } from "../app/components/BigDataPage";
import { AppModernizationPage } from "../app/components/AppModernizationPage";
import { SecurityPage } from "../app/components/SecurityPage";
import { DatabaseManagementPage } from "../app/components/DatabaseManagementPage";
import { ERPTestingPage } from "../app/components/ERPTestingPage";
import BFSIAgentsPage from "../app/components/BFSIAgentsPage";
import { BrandManagementPage } from "../app/components/BrandManagementPage";
import { AtlasAPIManagerPage } from "../app/components/AtlasAPIManagerPage";
import { OttohmVideoPage } from "../app/components/OttohmVideoPage";
import ITSMTicketingPage from "../app/components/ITSMTicketingPage";
import AIOpsPage from "../app/components/AIOpsPage";
import SmartContractsPage from "../app/components/SmartContractsPage";
import AboutUsPage from "../app/components/AboutUsPage";
import PartnersPage from "../app/components/PartnersPage";
import CareersPage from "../app/components/CareersPage";
import NewsUpdatesPage from "../app/components/NewsUpdatesPage";
import { AwardsSection } from "../app/components/AwardsSection";
import { CounterAnimation } from "../app/components/CounterAnimation";
import { MobileNav } from "../app/components/MobileNav";
import { ProductsSection } from "../app/components/ProductsSection";
import { GetStartedModal } from "../app/components/GetStartedModal";
import { UseCasesSection } from "../app/components/UseCasesSection";
import { Cloud, Sparkles, Brain, Database, RefreshCw, Shield, Server, Wrench, Layers, Bot, Video, Ticket, Activity, FileCode, ChevronDown, ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import { ThemeToggle } from "../app/components/ThemeToggle";
import { getServiceUrl, getProductUrl, getAIUrl, getWhoWeAreUrl } from "../app/utils/navigationHelper";
import { useScrollPerformance, useReduceMotionOnMobile } from "../app/hooks/useScrollPerformance";
import {
  imgBackground,
  imgBackground1,
  imgUnsplashI1358WE0Ijo,
  imgUnsplashI1358WE0Ijo1,
  imgUnsplashI1358WE0Ijo2,
  imgUnsplashI1358WE0Ijo3,
  imgUnsplashI1358WE0Ijo4,
  imgUnsplashI1358WE0Ijo5,
  imgUnsplashI1358WE0Ijo6,
  imgVideoThumbnail2,
  imgVideoThumbnail3,
  imgVideoThumbnail4,
  imgVideoThumbnail5,
  imgVideoThumbnail6,
  imgHqdefaultJpg,
  imgImageCloudMigrationSuccessAtReligareBroking,
  imgAbhijitShah,
  imgTexture,
  imgNoiseTexture,
  imgImageCareerOpportunities,
} from "../assets/images";
import { imgGradient, imgVideoThumbnail1, imgContainer, imgGroup, imgGroup1 } from "./svg-ryrnp";
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(152.342deg, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0) 100%)" }} className={clsx("absolute border border-[rgba(255,255,255,0.08)] border-solid h-[141.5px] rounded-[14px] w-[270px]", additionalClassNames)}>
      {children}
    </div>
  );
}

function TextBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("[grid-area:1_/_1] flex h-[442px] items-center justify-center ml-0 relative", additionalClassNames)}>
      <div className="flex-none rotate-[270deg]">{children}</div>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("absolute inset-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function ImageFooterSocialItemImgBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[21px] relative shrink-0 w-[27px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 21">
        <g id="Image [footer-social__item-img]">{children}</g>
      </svg>
    </div>
  );
}

function ComponentBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[15.6px] relative w-[15.99px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.99 15.6">
        <g id="Component 2">{children}</g>
      </svg>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0", additionalClassNames)}>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">{children}</div>
      </div>
    </div>
  );
}
type IconBackgroundImage3Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage3Props>) {
  return (
    <BackgroundImage3 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage3>
  );
}

function IconBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[17.91px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9104 17.9104">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15.3px] text-nowrap text-white tracking-[-0.08px]">
        <p className="leading-[24px]">{children}</p>
      </div>
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
  onClick?: () => void;
  hasDropdown?: boolean;
};

function LinkBackgroundImageAndText({ text, additionalClassNames = "", onClick, hasDropdown = false }: LinkBackgroundImageAndTextProps) {
  return (
    <div 
      className={clsx("h-[31.5px] relative rounded-[8px] cursor-pointer hover:bg-white/10 transition-all duration-200 active:scale-95 px-[12px] flex items-center", additionalClassNames)}
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        <p className="font-['Montserrat:Bold',sans-serif] leading-[19.5px] not-italic text-[13px] text-nowrap text-white tracking-[-0.0762px]">{text}</p>
        {hasDropdown && <ChevronDown className="w-3 h-3 text-white/80" />}
      </div>
    </div>
  );
}
type ComponentBackgroundImage3Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function ComponentBackgroundImage3({ text, text1, additionalClassNames = "" }: ComponentBackgroundImage3Props) {
  return (
    <div className={clsx("bg-black overflow-clip relative w-[442px]", additionalClassNames)}>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[220px] left-0 not-italic text-[200px] text-nowrap text-white top-[220px] translate-y-[-50%]">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}
type ComponentBackgroundImageAndTextProps = {
  text: string;
};

function ComponentBackgroundImageAndText({ text }: ComponentBackgroundImageAndTextProps) {
  return <BackgroundImage2>{text}</BackgroundImage2>;
}
type ContainerBackgroundImageAndText2Props = {
  text: string;
};

function ContainerBackgroundImageAndText2({ text }: ContainerBackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full">
      <p className="absolute font-['Graphik_Compact_Trial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] text-nowrap top-px tracking-[-0.0762px]">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[21px] relative shrink-0 w-full">
      <p className="absolute font-['Graphik_Compact_Trial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px]">{text}</p>
    </div>
  );
}

function ContainerBackgroundImage1() {
  return (
    <div className="absolute bg-[rgba(160,32,240,0.1)] content-stretch flex items-center justify-center left-[17px] p-px rounded-[10px] size-[32px] top-[19px]">
      <div aria-hidden="true" className="absolute border border-[rgba(160,32,240,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <IconBackgroundImage1 />
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage3 additionalClassNames="relative shrink-0">
      <g clipPath="url(#clip0_4_1890)" id="Icon">
        <path d={svgPaths.p3c9c47b0} id="Vector" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M13.334 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M14.6667 3.33301H12" id="Vector_3" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M2.66602 11.333V12.6663" id="Vector_4" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
      <defs>
        <clipPath id="clip0_4_1890">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage3>
  );
}
type ButtonSecondaryBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
  onClick?: () => void;
};

function ButtonSecondaryBackgroundImageAndText1({ text, additionalClassNames = "", onClick }: ButtonSecondaryBackgroundImageAndText1Props) {
  return (
    <motion.div 
      onClick={onClick}
      className={clsx("absolute content-stretch flex items-center justify-center left-[52px] px-[26.401px] py-[13.201px] rounded-full w-[198.008px] cursor-pointer transition-all duration-300", additionalClassNames)}
      initial={{ opacity: 0.6 }}
      whileHover={{ 
        opacity: 1, 
        scale: 1.05,
        backgroundColor: "rgba(160, 32, 240, 0.2)",
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-full" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#ececec] text-[17.601px] text-nowrap">{text}</p>
    </motion.div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText3({ text, additionalClassNames = "" }: BackgroundImageAndText3Props) {
  return (
    <div className={additionalClassNames}>
      <div aria-hidden="true" className="absolute border border-[rgba(160,32,240,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[22.4px]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return <BackgroundImageAndText3 text={text} additionalClassNames={clsx("absolute bg-[rgba(160,32,240,0.3)] content-stretch flex h-[39px] items-center justify-center p-px rounded-xl", additionalClassNames)} />;
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonBackgroundImageAndTextProps) {
  return <BackgroundImageAndText3 text={text} additionalClassNames={clsx("bg-[rgba(160,32,240,0.3)] content-stretch flex h-[39px] items-center justify-center p-px relative rounded-xl shrink-0", additionalClassNames)} />;
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[19.5px] left-[20px] top-[100px] w-[228px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] text-nowrap top-px tracking-[-0.0762px]">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Parse the number from text (e.g., "98%" -> 98, "500+" -> 500, "2.5x" -> 2.5, "100%" -> 100)
      const numericValue = parseFloat(text.replace(/[^\d.]/g, ''));
      const hasDecimal = text.includes('.');
      const duration = 2500; // 2.5 seconds for smoother animation
      const steps = 80; // More steps for smoother counting
      const increment = numericValue / steps;
      let current = 0;
      let step = 0;
      
      const timer = setInterval(() => {
        step++;
        // Use easing function for more natural feel (ease-out)
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        current = numericValue * easeOutQuart;
        
        if (step >= steps) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, text]);

  // Format the display value to match the original format
  const formatValue = () => {
    if (text.includes('%')) {
      return `${Math.round(displayValue)}%`;
    } else if (text.includes('+')) {
      return `${Math.round(displayValue)}+`;
    } else if (text.includes('x')) {
      return `${displayValue.toFixed(1)}x`;
    }
    return Math.round(displayValue).toString();
  };

  return (
    <div ref={ref} className="absolute h-[32px] left-[20px] top-[64px] w-[228px]">
      <motion.p 
        className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[-0.5297px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {isInView ? formatValue() : '0'}
      </motion.p>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
      <div className="absolute inset-0 rounded-[16px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 521 290\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-4.5931e-14 -21.659 27.784 -6.7013e-9 260.5 310.45)\\\'><stop stop-color=\\\'rgba(187,165,244,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(144,112,230,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(123,85,223,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(101,58,216,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute bg-repeat bg-size-[183.44316482543945px_183.44316482543945px] bg-top-left inset-0 mix-blend-overlay opacity-[0.15] rounded-[16px]" style={{ backgroundImage: `url('${imgBackground}')` }} />
      <div className="absolute bg-repeat bg-size-[127.43449234962463px_127.43449234962463px] bg-top-left inset-0 mix-blend-overlay opacity-70 rounded-[16px]" style={{ backgroundImage: `url('${imgBackground1}')` }} />
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col font-['Graphik_Compact_Trial:Regular',sans-serif] gap-[20px] items-start leading-[21px] not-italic relative shrink-0 text-center text-nowrap text-white tracking-[-0.1504px]">
      <p className="relative shrink-0 text-[28px]">{text}</p>
      <p className="relative shrink-0 text-[20px]">{text1}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <ContainerBackgroundImage />
      <p className="font-['Graphik_Compact_Trial:Regular',sans-serif] leading-[65px] not-italic relative shrink-0 text-[48px] text-center text-nowrap text-white tracking-[-0.1504px]">{text}</p>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="content-stretch flex items-center justify-center p-[0.777px] relative rounded-[14px] shrink-0 size-[60px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute inset-0 rounded-[14px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 60 60\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.2895e-15 -4.4811 3.1996 -1.3865e-9 30 64.232)\\\'><stop stop-color=\\\'rgba(187,165,244,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(144,112,230,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(123,85,223,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(101,58,216,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
        <div className="absolute bg-repeat bg-size-[183.44316482543945px_183.44316482543945px] bg-top-left inset-0 mix-blend-overlay opacity-[0.15] rounded-[14px]" style={{ backgroundImage: `url('${imgBackground}')` }} />
        <div className="absolute bg-repeat bg-size-[127.43449234962463px_127.43449234962463px] bg-top-left inset-0 mix-blend-overlay opacity-70 rounded-[14px]" style={{ backgroundImage: `url('${imgBackground1}')` }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0.777px] border-[rgba(255,255,255,0.19)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <IconBackgroundImage />
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Icon">
          <path d={svgPaths.p1958d300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25ca6700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p10eddc20} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.33203 34.834H31.6654" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p321b9f80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p11c02680} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
type TestimonialBackgroundImage1Props = {
  additionalClassNames?: string;
};

function TestimonialBackgroundImage1({ additionalClassNames = "" }: TestimonialBackgroundImage1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.9px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 886.564 0.895519">
          <line id="Line 3" opacity="0.6" stroke="url(#paint0_linear_4_1900)" strokeWidth="0.895519" x2="886.564" y1="0.44776" y2="0.44776" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_1900" x1="0" x2="886.564" y1="1.39552" y2="1.39552">
              <stop stopColor="#141315" />
              <stop offset="0.165" stopColor="white" />
              <stop offset="0.865" stopColor="#EAEAEA" />
              <stop offset="1" stopColor="#020103" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
type TestimonialBackgroundImageProps = {
  additionalClassNames?: string;
};

function TestimonialBackgroundImage({ additionalClassNames = "" }: TestimonialBackgroundImageProps) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="flex-none h-px rotate-[90deg] w-[359.103px]">
        <div className="relative size-full">
          <div className="absolute inset-[-0.9px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 359.103 0.895519">
              <line id="Line 1" opacity="0.6" stroke="url(#paint0_linear_4_1905)" strokeWidth="0.895519" x2="359.103" y1="0.44776" y2="0.44776" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_1905" x1="0" x2="359.103" y1="1.39552" y2="1.39552">
                  <stop stopColor="#141315" />
                  <stop offset="0.165" stopColor="white" />
                  <stop offset="0.865" stopColor="#EAEAEA" />
                  <stop offset="1" stopColor="#020103" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroupBackgroundImage() {
  return (
    <div className="absolute inset-[0_-0.2px_-0.23px_0]">
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.2)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] rounded-[10.746px] to-[rgba(255,255,255,0)]" data-name="Gradient" style={{ maskImage: `url('${imgGradient}')` }} />
    </div>
  );
}
type ComponentBackgroundImage2Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
  mobileImageSrc?: string;
};

function ComponentBackgroundImage2({ text, text1, additionalClassNames = "", mobileImageSrc }: ComponentBackgroundImage2Props) {
  const [isHovered, setIsHovered] = React.useState(false);
  const defaultMobileImage = "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzY3MDYzOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  // Map card titles to relevant images
  const getDesktopImage = () => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('housing') && lowerText.includes('finance')) {
      return "https://images.unsplash.com/photo-1715191620078-300049efa179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwZmluYW5jZSUyMHJlYWwlMjBlc3RhdGUlMjBtb2Rlcm58ZW58MXx8fHwxNjgyMDEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
    }
    if (lowerText.includes('blockchain') && lowerText.includes('supply')) {
      return "https://images.unsplash.com/photo-1639322537231-2f206e06af84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMGRpc3RyaWJ1dGVkJTIwbGVkZ2VyfGVufDF8fHx8MTc2ODIwMTMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
    }
    return "https://images.unsplash.com/photo-1715191620078-300049efa179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwZmluYW5jZSUyMHJlYWwlMjBlc3RhdGUlMjBtb2Rlcm58ZW58MXx8fHwxNjgyMDEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  };

  return (
    <div 
      className={clsx("bg-white h-[500px] md:h-[424px] overflow-clip relative w-full min-w-0 rounded-xl cursor-pointer", additionalClassNames)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackgroundImage4 additionalClassNames="w-full">
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Desktop Image */}
          <motion.img 
            alt="" 
            className="hidden md:block absolute h-full w-full object-cover" 
            src={getDesktopImage()}
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Mobile Image */}
          <motion.img 
            alt="" 
            className="block md:hidden absolute h-full w-full object-cover" 
            src={mobileImageSrc || defaultMobileImage}
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        {/* Purple gradient overlay - consistent with design system */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-transparent opacity-60 rounded-xl" />
        <div className="absolute inset-0 rounded-xl" style={{ backgroundImage: "linear-gradient(-47.516deg, rgba(0, 0, 0, 0) 1.7008%, rgba(2, 1, 3, 0.6) 52.798%)" }} />
      </BackgroundImage4>
      <BackgroundImageAndText text="digital transformation" />
      <p className="absolute capitalize font-['Montserrat:Bold',sans-serif] leading-[1.2] left-[16px] not-italic text-[20px] text-white top-[72px] w-[280px] min-h-[48px]">{text}</p>
      <motion.div
        className="absolute left-[16px] top-[176px] w-[280px]"
        initial={{ x: 320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="capitalize font-['Montserrat:Medium',sans-serif] leading-[1.5] not-italic text-[14px] text-white">{text1}</p>
      </motion.div>
      <motion.div
        initial={{ x: -320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <ButtonSecondaryBackgroundImageAndText text="Know more" />
      </motion.div>
    </div>
  );
}

function UnsplashI1358WE0IjoBackgroundImage2() {
  return (
    <BackgroundImage4 additionalClassNames="w-[317px]">
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgUnsplashI1358WE0Ijo3} />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-38.3439deg, rgba(0, 0, 0, 0) 22.121%, rgba(0, 0, 0, 0.6) 59.586%)" }} />
    </BackgroundImage4>
  );
}
type ComponentBackgroundImage1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
  mobileImageSrc?: string;
};

function ComponentBackgroundImage1({ text, text1, additionalClassNames = "", mobileImageSrc }: ComponentBackgroundImage1Props) {
  const [isHovered, setIsHovered] = React.useState(false);
  const defaultMobileImage = "https://images.unsplash.com/photo-1758876202919-4d2fbedcf23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjcwNzU5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  // Map card titles to relevant images
  const getDesktopImage = () => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('migration') && lowerText.includes('financial')) {
      return "https://images.unsplash.com/photo-1758905024964-4b4818821a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMEFXUyUyMGNsb3VkJTIwc2VydmVyfGVufDF8fHx8MTc2ODIwMTMyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
    }
    if (lowerText.includes('ai') && lowerText.includes('analytics')) {
      return "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFuYWx5dGljcyUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2ODIwMTMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
    }
    return "https://images.unsplash.com/photo-1758905024964-4b4818821a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMEFXUyUyMGNsb3VkJTIwc2VydmVyfGVufDF8fHx8MTc2ODIwMTMyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  };

  return (
    <div 
      className={clsx("bg-white h-[500px] md:h-[424px] overflow-clip relative w-full min-w-0 rounded-xl cursor-pointer", additionalClassNames)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackgroundImage4 additionalClassNames="w-full">
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Desktop Image */}
          <motion.img 
            alt="" 
            className="hidden md:block absolute h-full w-full object-cover" 
            src={getDesktopImage()}
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Mobile Image */}
          <motion.img 
            alt="" 
            className="block md:hidden absolute h-full w-full object-cover" 
            src={mobileImageSrc || defaultMobileImage}
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        {/* Purple gradient overlay - consistent with design system */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-transparent opacity-60 rounded-xl" />
        <div className="absolute inset-0 rounded-xl" style={{ backgroundImage: "linear-gradient(-46.8626deg, rgba(0, 0, 0, 0) 40.887%, rgba(0, 0, 0, 0.6) 57.867%)" }} />
      </BackgroundImage4>
      <BackgroundImageAndText text="digital transformation" />
      <p className="absolute capitalize font-['Montserrat:Bold',sans-serif] leading-[1.2] left-[16px] not-italic text-[20px] text-white top-[72px] w-[280px] min-h-[48px]">{text}</p>
      <motion.div
        className="absolute left-[16px] top-[176px] w-[280px]"
        initial={{ x: 320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="capitalize font-['Montserrat:Medium',sans-serif] leading-[1.5] not-italic text-[14px] text-white">{text1}</p>
      </motion.div>
      <motion.div
        initial={{ x: -320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <ButtonSecondaryBackgroundImageAndText text="Know more" />
      </motion.div>
    </div>
  );
}

function UnsplashI1358WE0IjoBackgroundImage1() {
  return (
    <BackgroundImage4 additionalClassNames="w-[305px]">
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgUnsplashI1358WE0Ijo1} />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-28.8608deg, rgba(0, 0, 0, 0) 22.162%, rgba(0, 0, 0, 0.6) 60.916%)" }} />
    </BackgroundImage4>
  );
}

function UnsplashI1358WE0IjoBackgroundImage() {
  return (
    <BackgroundImage4 additionalClassNames="w-[305px]">
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgUnsplashI1358WE0Ijo} />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-44.7178deg, rgba(255, 255, 255, 0) 34.042%, rgba(0, 0, 0, 0.39) 47.954%)" }} />
    </BackgroundImage4>
  );
}
type ButtonSecondaryBackgroundImageAndTextProps = {
  text: string;
  onClick?: () => void;
};

function ButtonSecondaryBackgroundImageAndText({ text, onClick }: ButtonSecondaryBackgroundImageAndTextProps) {
  return (
    <div 
      onClick={onClick}
      className="absolute content-stretch flex items-center justify-center left-[16px] px-[16px] py-[8px] rounded-xl bottom-[16px] cursor-pointer"
    >
      <div aria-hidden="true" className="absolute border-[#ececec] border-[1.1px] border-solid inset-0 pointer-events-none rounded-xl" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#ececec] text-[12px] text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-[#a020f0] flex items-center justify-center left-[16px] px-[20px] rounded-[24px] top-[20px] h-[36px]">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1] not-italic text-[12px] text-nowrap text-white uppercase">{text}</p>
    </div>
  );
}

function BackgroundBackgroundImage() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[18.649px] shrink-0 size-[21.59px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18.649px]">
        <div className="absolute inset-0 rounded-[18.649px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 21.59 21.59\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.9033e-15 -1.6125 1.1513 -4.989e-10 10.795 23.113)\\\'><stop stop-color=\\\'rgba(187,165,244,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(144,112,230,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(123,85,223,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(101,58,216,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
        <div className="absolute bg-repeat bg-size-[183.44316482543945px_183.44316482543945px] bg-top-left inset-0 mix-blend-overlay opacity-[0.15] rounded-[18.649px]" style={{ backgroundImage: `url('${imgBackground}')` }} />
        <div className="absolute bg-repeat bg-size-[127.43449234962463px_127.43449234962463px] bg-top-left inset-0 mix-blend-overlay opacity-70 rounded-[18.649px]" style={{ backgroundImage: `url('${imgBackground1}')` }} />
      </div>
      <div aria-hidden="true" className="absolute border-[0.777px] border-[rgba(255,255,255,0.19)] border-solid inset-0 pointer-events-none rounded-[18.649px]" />
      <ComponentBackgroundImage />
    </div>
  );
}

function ComponentBackgroundImage() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.59 21.59">
        <g id="Component 1">
          <path d={svgPaths.p2de0c200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114.38px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.7px] text-nowrap text-white">
        <p className="leading-[22.48px]">See what we do</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[9.99px] h-[22.47px] items-center left-0 pb-px pt-0 px-0 right-[21.59px] top-[166px]" data-name="Container">
      <Container />
      <BackgroundBackgroundImage />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-40.66px] top-[58px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[23.61px]">We integrate ethical, people centered AI into every service and operation using cloud as the foundation to drive transformation, inspire confidence, and deliver lasting value for clients and communities.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div 
      className="absolute bottom-[174.69px] h-[180.31px] left-0 right-0" 
      data-name="Container"
    >
      <Container1 />
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] left-0 not-italic text-[18px] text-nowrap text-white top-[40px] translate-y-[-50%]">
        <p className="leading-[31.48px]">AI-powered transformation, enabled by cloud.</p>
      </div>
      <Container2 />
    </div>
  );
}

function Group6({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div 
      className="absolute left-[946px] top-[154px] w-[394px] h-[355px]"
      initial={{ x: 200, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: isVisible ? 2.5 : 0 }}
    >
      <div className="absolute h-[5px] left-0 pointer-events-none rounded-[18.649px] top-[7px] w-[42px]" data-name="Background">
        <div aria-hidden="true" className="absolute inset-0 rounded-[18.649px]">
          <div className="absolute inset-0 rounded-[18.649px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 42 5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-3.7027e-15 -0.37343 2.2397 -1.1554e-10 21 5.3526)\\\'><stop stop-color=\\\'rgba(187,165,244,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(144,112,230,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(123,85,223,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(101,58,216,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
          <div className="absolute bg-repeat bg-size-[183.44316482543945px_183.44316482543945px] bg-top-left inset-0 mix-blend-overlay opacity-[0.15] rounded-[18.649px]" style={{ backgroundImage: `url('${imgBackground}')` }} />
          <div className="absolute bg-repeat bg-size-[127.43449234962463px_127.43449234962463px] bg-top-left inset-0 mix-blend-overlay opacity-70 rounded-[18.649px]" style={{ backgroundImage: `url('${imgBackground1}')` }} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.777px] border-[rgba(255,255,255,0.19)] border-solid inset-0 rounded-[18.649px]" />
      </div>
      <Container3 />
    </motion.div>
  );
}

function Group11({ isVisible }: { isVisible: boolean }) {
  return (
    <>
      {/* Desktop Layout - Preserved Original Design */}
      <div className="hidden md:block absolute contents font-['Montserrat:Bold',sans-serif] font-bold leading-[100px] left-[80px] not-italic text-[80px] text-nowrap text-white top-[111px] tracking-[-1.317px] uppercase">
        <motion.p 
          className="absolute left-[80px] top-[111px] font-bold"
          initial={{ x: -200, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: isVisible ? 0.2 : 0 }}
        >
          {`Secure. `}
        </motion.p>
        <motion.p 
          className="absolute left-[176px] top-[194px] font-bold"
          initial={{ x: -200, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: isVisible ? 0.9 : 0.1 }}
        >
          {`Cloud. `}
        </motion.p>
        <motion.p 
          className="absolute left-[496px] top-[277px] font-bold"
          initial={{ x: -200, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: isVisible ? 1.6 : 0.2 }}
        >
          Intelligence.
        </motion.p>
      </div>

      {/* Mobile Layout - Responsive Stacked */}
      <div className="md:hidden absolute left-4 top-[60px] right-4 font-['Montserrat:Bold',sans-serif] font-bold text-white tracking-tight uppercase z-10 pr-4 max-w-full overflow-hidden">
        <motion.p 
          className="text-[31px] sm:text-[35px] leading-[1.1] mb-1 break-words max-w-full"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: isVisible ? 0.2 : 0 }}
        >
          Secure.
        </motion.p>
        <motion.p 
          className="text-[31px] sm:text-[35px] leading-[1.1] mb-1 break-words max-w-full"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: isVisible ? 0.6 : 0.1 }}
        >
          Cloud.
        </motion.p>
        <motion.p 
          className="text-[31px] sm:text-[35px] leading-[1.1] break-words max-w-full"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: isVisible ? 1.0 : 0.2 }}
        >
          Intelligence.
        </motion.p>
      </div>
    </>
  );
}

function Component19() {
  return null;
}

function Container4() {
  return <div className="absolute bg-[rgba(246,51,154,0.1)] blur-3xl filter md:left-[510px] left-[50%] md:translate-x-0 -translate-x-1/2 rounded-[1.67772e+07px] md:size-[420px] size-[300px] md:top-[3435px] top-[2500px] hidden md:block" data-name="Container" />;
}

function Component20({ onCaseStudiesClick }: { onCaseStudiesClick?: () => void }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="bg-white h-[500px] md:h-[424px] overflow-clip relative w-full min-w-0 rounded-xl cursor-pointer" 
      data-name="Component 218"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackgroundImage4 additionalClassNames="w-full md:absolute md:inset-0">
        <div className="relative aspect-[4/3] min-h-[240px] md:min-h-0 md:aspect-auto md:absolute md:inset-0 overflow-hidden rounded-t-xl md:rounded-xl">
          {/* Desktop Image */}
          <motion.img 
            alt="" 
            className="hidden md:block absolute h-full w-full object-cover" 
            src="https://images.unsplash.com/photo-1504711331083-9c895941bf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FuJTIwb3JpZ2luYXRpb24lMjBiYW5raW5nJTIwZG9jdW1lbnRzJTIwZGlnaXRhbHxlbnwxfHx8fDE3NjgyMDEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Mobile Image */}
          <motion.img 
            alt="" 
            className="block md:hidden absolute inset-0 w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1758519292135-2af0ad50f552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwc21hcnRwaG9uZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjcxMDA3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-purple-900 opacity-30 rounded-t-xl md:rounded-xl" />
          {/* Purple gradient overlay - consistent with design system */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-transparent opacity-50 rounded-t-xl md:rounded-xl" />
          <div className="absolute inset-0 rounded-t-xl md:rounded-xl" style={{ backgroundImage: "linear-gradient(-34.0744deg, rgba(0, 0, 0, 0) 19.705%, rgba(0, 0, 0, 0.6) 67.225%)" }} />
        </div>
      </BackgroundImage4>
      <BackgroundImageAndText text="digital banking" />
      <p className="absolute capitalize font-['Montserrat:Bold',sans-serif] leading-[1.2] left-[16px] not-italic text-[20px] text-white top-[72px] w-[280px] min-h-[48px]">{`Loan Origination & Mandate Management`}</p>
      <motion.div
        className="absolute left-[16px] top-[176px] w-[280px]"
        initial={{ x: 320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="capitalize font-['Montserrat:Medium',sans-serif] leading-[1.5] not-italic text-[14px] text-white">A Leading Bank Modernized Its Loan Application And Mandate Verification Process Ensuring Regulatory Compliance And Faster..</p>
      </motion.div>
      <motion.div
        initial={{ x: -320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <ButtonSecondaryBackgroundImageAndText text="Know more" onClick={onCaseStudiesClick} />
      </motion.div>
    </div>
  );
}

function Component23({ onCaseStudiesClick }: { onCaseStudiesClick?: () => void }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="bg-white h-[500px] md:h-[424px] overflow-clip relative w-full min-w-0 rounded-xl cursor-pointer" 
      data-name="Component 222"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackgroundImage4 additionalClassNames="w-full">
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Desktop Image */}
          <motion.img 
            alt="" 
            className="hidden md:block absolute h-full w-full object-cover" 
            src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwSW9UJTIwYXV0b21hdGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNjgyMDExMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Mobile Image */}
          <motion.img 
            alt="" 
            className="block md:hidden absolute h-full w-full object-cover" 
            src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGF1dG9tYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzA3NTkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        {/* Purple gradient overlay - consistent with design system */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-transparent opacity-60 rounded-xl" />
        <div className="absolute inset-0 rounded-xl" style={{ backgroundImage: "linear-gradient(-34.0744deg, rgba(0, 0, 0, 0) 19.705%, rgba(0, 0, 0, 0.6) 67.225%)" }} />
      </BackgroundImage4>
      <BackgroundImageAndText text="iot platform" />
      <p className="absolute capitalize font-['Montserrat:Bold',sans-serif] leading-[1.2] left-[16px] not-italic text-[20px] text-white top-[72px] w-[280px] min-h-[48px]">Industrial IoT Platform</p>
      <motion.div
        className="absolute left-[16px] top-[176px] w-[280px]"
        initial={{ x: 320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="capitalize font-['Montserrat:Medium',sans-serif] leading-[1.5] not-italic text-[14px] text-white">Developed An Industrial IoT Platform To Monitor And Manage Connected Devices Across Manufacturing Units With Real-Time Analytics...</p>
      </motion.div>
      <motion.div
        initial={{ x: -320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <ButtonSecondaryBackgroundImageAndText text="Know more" onClick={onCaseStudiesClick} />
      </motion.div>
    </div>
  );
}

function Component21({ onCaseStudiesClick }: { onCaseStudiesClick?: () => void }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="bg-white h-[500px] md:h-[424px] overflow-clip relative w-full min-w-0 rounded-xl cursor-pointer" 
      data-name="Component 220"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackgroundImage4 additionalClassNames="w-full">
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Desktop Image */}
          <motion.img 
            alt="" 
            className="hidden md:block absolute h-full w-full object-cover" 
            src="https://images.unsplash.com/photo-1758686254415-9348b5b5df01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5zaW9uJTIwcmV0aXJlbWVudCUyMGZpbmFuY2lhbCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2ODIwMTMzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Mobile Image */}
          <motion.img 
            alt="" 
            className="block md:hidden absolute h-full w-full object-cover" 
            src="https://images.unsplash.com/photo-1733503747506-773e56e4078f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NzA3NTkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        {/* Purple gradient overlay - consistent with design system */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-transparent opacity-60 rounded-xl" />
        <div className="absolute inset-0 rounded-xl" style={{ backgroundImage: "linear-gradient(-34.0744deg, rgba(0, 0, 0, 0) 19.705%, rgba(0, 0, 0, 0.6) 67.225%)" }} />
      </BackgroundImage4>
      <BackgroundImageAndText text="digital transformation" />
      <p className="absolute capitalize font-['Montserrat:Bold',sans-serif] leading-[1.2] left-[16px] not-italic text-[20px] text-white top-[72px] w-[280px] min-h-[450px]">NPS Withdrawal & Grievance System</p>
      <motion.div
        className="absolute left-[16px] top-[176px] w-[280px]"
        initial={{ x: 320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="capitalize font-['Montserrat:Medium',sans-serif] leading-[1.5] not-italic text-[14px] text-white">A Leading Mutual Fund Service Provider Required A Modern Platform To Digitize Pension Withdrawals And Grievance Management...</p>
      </motion.div>
      <motion.div
        initial={{ x: -320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <ButtonSecondaryBackgroundImageAndText text="Know more" onClick={onCaseStudiesClick} />
      </motion.div>
    </div>
  );
}

function Component22({ onCaseStudiesClick }: { onCaseStudiesClick?: () => void }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="bg-white h-[500px] md:h-[424px] overflow-clip relative w-full min-w-0 rounded-xl cursor-pointer" 
      data-name="Component 221"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackgroundImage4 additionalClassNames="w-full">
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Desktop Image */}
          <motion.img 
            alt="" 
            className="hidden md:block absolute h-full w-full object-cover" 
            src="https://images.unsplash.com/photo-1612923032660-5c872a1dd5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBDSSUyMENEJTIwYXV0b21hdGlvbiUyMGNvZGV8ZW58MXx8fHwxNzY4MjAxMzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Mobile Image */}
          <motion.img 
            alt="" 
            className="block md:hidden absolute h-full w-full object-cover" 
            src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDF8fHx8MTc2NzA3NTk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            animate={isHovered ? { scale: 1.15, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        {/* Purple gradient overlay - consistent with design system */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-transparent opacity-60 rounded-xl" />
        <div className="absolute inset-0 rounded-xl" style={{ backgroundImage: "linear-gradient(-46.4594deg, rgba(0, 0, 0, 0) 24.901%, rgba(0, 0, 0, 0.64) 46.18%)" }} />
      </BackgroundImage4>
      <BackgroundImageAndText text="devops automation" />
      <p className="absolute capitalize font-['Montserrat:Bold',sans-serif] leading-[1.2] left-[16px] not-italic text-[20px] text-white top-[72px] w-[280px] min-h-[48px]">DevOps Pipeline For PlayStation</p>
      <motion.div
        className="absolute left-[16px] top-[176px] w-[280px]"
        initial={{ x: 320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="capitalize font-['Montserrat:Medium',sans-serif] leading-[1.5] not-italic text-[14px] text-white">Optimized CI/CD Pipelines For Gaming Platform Development To Reduce Deployment Time And Improve Release Quality...</p>
      </motion.div>
      <motion.div
        initial={{ x: -320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <ButtonSecondaryBackgroundImageAndText text="Know more" onClick={onCaseStudiesClick} />
      </motion.div>
    </div>
  );
}

function Group10() {
  return (
    <div className="w-full px-[24px] md:px-8 lg:px-16 -mt-6 pt-[43px] pb-[0px] md:mt-0 md:pt-[136px] md:pb-[0px] relative">
      {/* Hero Section - Two Column Layout on Desktop */}
      <div className="relative z-10 max-w-[1280px] mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-[0px] py-[30px] pt-[0px] pr-[0px] pb-[30px] pl-[0px]">
          {/* Left Column - Main Heading */}
          <div className="overflow-visible pr-2">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-['Montserrat',sans-serif] font-bold text-[60px] md:text-[56px] lg:text-[72px] xl:text-[84px] leading-[1.05] dark:text-white light:text-[#1a1a1f] uppercase tracking-tight space-y-1">
                <motion.div
                  className="block text-[44px] md:text-[72px] whitespace-nowrap"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  SECURE.
                </motion.div>
                <motion.div
                  className="block text-[44px] md:text-[72px] whitespace-nowrap"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  CLOUD.
                </motion.div>
                <motion.div
                  className="block text-[44px] md:text-[72px] whitespace-nowrap"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  INTELLIGENCE.
                </motion.div>
              </h1>
            </motion.div>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col gap-6">
            <motion.h2 
              className="font-['Montserrat',sans-serif] font-semibold text-[20px] md:text-[24px] leading-[1.4] dark:text-white light:text-[#1a1a1f]"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              AI-powered transformation, enabled by cloud.
            </motion.h2>
            <motion.p 
              className="font-['Montserrat',sans-serif] font-normal text-[14px] md:text-[16px] leading-[1.6] dark:text-[rgba(255,255,255,0.8)] light:text-[rgba(26,26,31,0.7)]"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              We integrate ethical, people centered AI into every service and operation using cloud as the foundation to drive transformation, inspire confidence, and deliver lasting value for clients and communities.
            </motion.p>
            {/* "See what we do" link removed - case studies section no longer on home page */}
          </div>
        </div>
      </div>

      {/* Responsive Grid of Case Study Cards - REMOVED */}
      {/* 
      <div id="case-studies" className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-4 md:px-8 place-items-stretch">
        <Component20 />
        <Component23 />
        <Component21 />
        <ComponentBackgroundImage1 
          text="Migration Of Financial Services Workload To AWS" 
          text1="A Leading Financial Services Firm Migrated Its Core Workloads To AWS Ensuring High Security, SEBI Compliance, And Zero..." 
          additionalClassNames="" 
          mobileImageSrc="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzY3MDYzOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        <ComponentBackgroundImage2 
          text="Cloud Transformation For Housing Finance" 
          text1="A Housing Finance Company Needed To Modernize Its Legacy Systems And Migrate To Cloud Infrastructure For Better Scalability..." 
          additionalClassNames="" 
          mobileImageSrc="https://images.unsplash.com/photo-1761312387948-961e6abd5fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBmaW5hbmNlJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzY3MDc1OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        <ComponentBackgroundImage2 
          text="Blockchain For Supply Chain" 
          text1="Implemented A Blockchain-Based Solution For Supply Chain Tracking Ensuring Transparency And Fraud Prevention Across Global Operations..." 
          additionalClassNames="" 
          mobileImageSrc="https://images.unsplash.com/photo-1631864031824-d636e1dc5292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmxvY2tjaGFpbiUyMG5ldHdvcmt8ZW58MXx8fHwxNjcwNzU5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        <ComponentBackgroundImage1 
          text="AI-Powered Customer Analytics" 
          text1="Developed An AI Platform For Customer Behavior Analysis And Prediction To Optimize Marketing Strategies And Increase Revenue..." 
          additionalClassNames="" 
          mobileImageSrc="https://images.unsplash.com/photo-1758876202919-4d2fbedcf23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjcwNzU5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        <Component22 />
      </div>
      */}
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#434345] content-stretch flex items-center justify-center overflow-clip relative rounded-[10.746px] shadow-[0px_0px_17.91px_4.478px_rgba(214,200,174,0.05),0px_0px_14.328px_-6.269px_rgba(214,200,174,0.05)] shrink-0 w-full" data-name="Link">
      <div className="h-[115.634px] relative shrink-0 w-[206.665px]" data-name="Video Thumbnail 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVideoThumbnail5} />
      </div>
      <MaskGroupBackgroundImage />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[17.91px] py-0 top-0" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#434345] content-stretch flex items-center justify-center overflow-clip relative rounded-[10.746px] shadow-[0px_0px_17.91px_4.478px_rgba(214,200,174,0.05),0px_0px_14.328px_-6.269px_rgba(214,200,174,0.05)] shrink-0 w-full" data-name="Link">
      <div className="h-[115.634px] relative shrink-0 w-[206.665px]" data-name="Video Thumbnail 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVideoThumbnail4} />
      </div>
      <MaskGroupBackgroundImage />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link1 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[241.79px] px-[17.91px] py-0 top-0" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="h-[115.438px] relative shrink-0 w-[205.223px]" data-name="Video Thumbnail 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVideoThumbnail3} />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[483.58px] px-[17.91px] py-0 top-0" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#434345] content-stretch flex items-center justify-center overflow-clip relative rounded-[10.746px] shadow-[0px_0px_17.91px_4.478px_rgba(214,200,174,0.05),0px_0px_14.328px_-6.269px_rgba(214,200,174,0.05)] shrink-0 w-full" data-name="Link">
      <div className="h-[115.634px] relative shrink-0 w-[206.665px]" data-name="Video Thumbnail 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVideoThumbnail2} />
      </div>
      <MaskGroupBackgroundImage />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link2 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-483.58px] px-[17.91px] py-0 top-0" data-name="Margin">
      <Container8 />
    </div>
  );
}

function HqdefaultJpg() {
  return (
    <div className="h-[115.862px] max-w-[205.96939086914062px] relative shrink-0 w-[205.969px]" data-name="hqdefault.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.66%] w-full" src={imgHqdefaultJpg} />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#434345] content-stretch flex items-center justify-center overflow-clip relative rounded-[10.746px] shadow-[0px_0px_17.91px_4.478px_rgba(214,200,174,0.05),0px_0px_14.328px_-6.269px_rgba(214,200,174,0.05)] shrink-0 w-full" data-name="Link">
      <HqdefaultJpg />
      <div className="absolute inset-[-15.55px_-31.99px_-19.93px_-31.1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.56%_10.27%] mask-size-[76.55%_76.56%]" data-name="Video Thumbnail 1" style={{ maskImage: `url('${imgVideoThumbnail1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVideoThumbnail6} />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link3 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-241.79px] px-[17.91px] py-0 top-0" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[115.862px] relative shrink-0 w-[1078.205px]" data-name="Container">
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[418.207px] pr-0 py-[42.985px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1078.2px_201.832px] max-w-[1078.2049560546875px] top-0 translate-x-[-50%]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <Container11 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="h-[201.832px] max-w-[1078.2049560546875px] relative shrink-0 w-[1078.205px]" data-name="Mask Group">
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-center max-w-[1289.5474853515625px] ml-0 mt-0 overflow-clip px-[105.671px] py-0 relative w-[1289.547px]" data-name="Container">
      <MaskGroup />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.613px] pl-[1.737px] pr-[1.746px] pt-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[20.06px] not-italic relative shrink-0 text-[#9c9c9d] text-[12.537px] text-center text-nowrap tracking-[0.1791px]">
        <p className="mb-0">Check out our YouTube channel to learn</p>
        <p>about features you didn’t even know existed.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.97%_0.7%_4.27%_0.69%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[95.373px_21.492px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.366 21.2151">
        <g id="Group">
          <path d={svgPaths.p12e9fc80} fill="var(--fill-0, #FF0000)" id="Vector" />
          <path d={svgPaths.p153dc400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p32a66100} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0.97%_0.69%_3.03%_0.69%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[22.388px] overflow-clip relative shrink-0 w-[96.716px]" data-name="SVG">
      <ClipPathGroup />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[14.328px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3283 14.3283">
        <g id="SVG">
          <path d={svgPaths.p24f91480} id="Vector" stroke="var(--stroke-0, #9C9C9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34328" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[2.687px] items-center relative shrink-0" data-name="Link">
      <Svg />
      <Svg1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[25.97px] items-center max-w-[322.3868713378906px] ml-[483.53px] mt-[197.91px] px-[21.492px] py-0 relative" data-name="Container">
      <Container14 />
      <Link4 />
    </div>
  );
}

function Footer() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-644.77px)] mt-[522.82px] place-items-start relative" data-name="Footer">
      <Container13 />
      <Container15 />
    </div>
  );
}

function ImageCloudMigrationSuccessAtReligareBroking() {
  return (
    <div className="absolute inset-[21.4%_53.35%_24.48%_7.92%] rounded-[21.492px]" data-name="Image (Cloud Migration Success at Religare Broking)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.492px] size-full" src={imgImageCloudMigrationSuccessAtReligareBroking} />
    </div>
  );
}

function Icon() {
  return (
    <IconBackgroundImage2>
      <path d={svgPaths.p8be2700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.49253" />
    </IconBackgroundImage2>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[1.50243e+07px] shrink-0 size-[35.821px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.896px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.50243e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.896px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <IconBackgroundImage2>
      <path d={svgPaths.p43e6900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.49253" />
    </IconBackgroundImage2>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[35.821px] min-h-px min-w-px relative rounded-[1.50243e+07px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.896px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.50243e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.896px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[7.164px] inset-[84.54%_68.61%_5.49%_23.09%] items-center" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function OcticonPlay({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="absolute aspect-[130.904/130.904] left-[24.03%] overflow-clip right-[69.56%] top-[calc(50%-5.98px)] translate-y-[-50%] cursor-pointer hover:scale-110 transition-transform duration-300 z-10" 
      data-name="octicon:play-24"
      onClick={onClick}
      role="button"
      aria-label="Play video"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="absolute inset-[32.99%_33.02%_32.98%_39.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.686 20.723">
          <path d={svgPaths.p3a015f00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.17%_4.16%_4.17%_4.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.8207 55.8207">
          <path d={svgPaths.p201495e0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Testimonial({ videoModalOpen }: { videoModalOpen: () => void }) {
  return (
    <div className="[grid-area:1_/_1] h-[359.103px] ml-0 mt-[142.39px] relative w-[950.146px]" data-name="Testimonial">
      <ImageCloudMigrationSuccessAtReligareBroking />
      <TestimonialBackgroundImage additionalClassNames="inset-[0_53.35%_0_46.65%]" />
      <TestimonialBackgroundImage additionalClassNames="inset-[0_92.08%_0_7.92%]" />
      <TestimonialBackgroundImage1 additionalClassNames="inset-[21.45%_6.69%_78.55%_0]" />
      <TestimonialBackgroundImage1 additionalClassNames="inset-[75.56%_6.69%_24.44%_0]" />
      <div className="absolute inset-[19.45%_58.15%_22.19%_12.44%]">
        <div className="absolute inset-[-108.55%_-81.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 734.326 664.475">
            <g filter="url(#filter0_f_4_1854)" id="Ellipse 7">
              <ellipse cx="367.163" cy="332.238" fill="var(--fill-0, #8C45FF)" fillOpacity="0.5" rx="139.701" ry="104.776" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="664.475" id="filter0_f_4_1854" width="734.326" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_4_1854" stdDeviation="113.731" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Container16 />
      <OcticonPlay onClick={videoModalOpen} />
    </div>
  );
}

function Text() {
  return (
    <div className="font-['Montserrat:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0" data-name="Text">
      <div className="[grid-area:1_/_1] flex flex-col h-[15.224px] justify-center ml-0 mt-[7.61px] relative text-[14.328px] text-white tracking-[-0.0014px] translate-y-[-50%] w-[113.731px]">
        <p className="leading-[23.283px]">Amit Bhatia</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[31.7px] relative text-[12.537px] text-[rgba(255,255,255,0.7)] tracking-[-0.0013px] translate-y-[-50%] w-[258.805px]">
        <p className="leading-[23.283px]">CISO at Religare Broking</p>
      </div>
    </div>
  );
}

function TestimonialTextContainer() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[17.91px] items-start ml-[482.68px] mt-[245.37px] relative w-[462.983px]" data-name="Testimonial Text Container">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[30.448px] not-italic relative shrink-0 text-[20.597px] text-nowrap text-white tracking-[-0.0021px]">Cloud Migration Success at Religare Broking</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[17.91px] min-w-full not-italic relative shrink-0 text-[10.746px] text-white tracking-[-0.0011px] w-[min-content]">{`Amit Bhatia, CISO at Religare Broking, shares how ACC's multi-tier cloud solution transformed their IT infrastructure, improving uptime, performance, and scalability.`}</p>
      <Text />
    </div>
  );
}

function MainContent({ videoModalOpen }: { videoModalOpen: () => void }) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories = [
    {
      title: "Cloud Migration Success at Religare Broking",
      description: "Amit Bhatia, CISO at Religare Broking, shares how ACC's multi-tier cloud solution transformed their IT infrastructure, improving uptime, performance, and scalability.",
      name: "Amit Bhatia",
      position: "CISO at Religare Broking",
      image: imgImageCloudMigrationSuccessAtReligareBroking,
      videoUrl: "https://www.youtube.com/watch?v=0qWWpfP7x8w",
      profileImage: null
    },
    {
      title: "Digital Transformation at Nippon India Mutual Fund",
      description: "Abhijit Shah, CTO at Nippon Life India Asset Management, discusses how ACC helped create a seamless mobile-first investor experience and enhanced their digital presence.",
      name: "Abhijit Shah",
      position: "CTO, Nippon Life India Asset Management",
      image: imgAbhijitShah,
      videoUrl: "https://www.youtube.com/watch?v=QbjcP1JPYQU",
      profileImage: imgAbhijitShah
    }
  ];

  const currentStory = successStories[currentStoryIndex];

  const handlePrevious = () => {
    setCurrentStoryIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentStoryIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };

  const handleVideoClick = () => {
    window.open(currentStory.videoUrl, '_blank');
  };

  return (
    <div className="w-full px-4 md:px-8 flex flex-col items-center gap-10 md:gap-16 relative py-12 md:py-20" data-name="Main Content">
      <div className="flex flex-col items-center gap-6 md:gap-10 max-w-[900px] px-4">
        <h2 className="font-['Montserrat',sans-serif] font-semibold tracking-normal not-italic text-[32px] md:text-[48px] text-center text-white leading-[1.2]">
          Customer Success Stories
        </h2>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[1.6] not-italic text-[16px] md:text-[18px] text-center text-white/80 max-w-[700px] md:whitespace-nowrap md:max-w-none">
          Hear firsthand how our solutions have boosted online success for users like you.
        </p>
      </div>

      <div className="relative w-full max-w-[1200px]">
        {/* Story Content with Slide Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStoryIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row w-full gap-6 md:gap-12 items-start md:items-center px-4 md:px-8"
          >
            <div className="relative w-full md:w-[480px] md:shrink-0">
              <div 
                className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto md:h-[300px] cursor-pointer group" 
                onClick={handleVideoClick}
                role="button"
                tabIndex={0}
              >
                <img 
                  alt={currentStory.title} 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl" 
                  src={currentStory.image} 
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <p className="text-[24px] md:text-[28px] text-white leading-[1.3] font-['Montserrat',sans-serif] font-semibold">
                {currentStory.title}
              </p>
              <p className="text-[14px] md:text-[16px] text-white/80 leading-[1.6] font-['Montserrat',sans-serif]">
                {currentStory.description}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="text-[14px] md:text-[16px] text-white font-['Montserrat',sans-serif] font-semibold leading-tight">
                    {currentStory.name}
                  </p>
                  <p className="text-[12px] md:text-[14px] text-white/70 font-['Montserrat',sans-serif] leading-tight">
                    {currentStory.position}
                  </p>
                </div>
                
                {/* Navigation Arrows */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStoryIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStoryIndex 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentFrame({ videoModalOpen }: { videoModalOpen: () => void }) {
  return (
    <div className="w-full flex justify-center relative" data-name="Content Frame">
      <MainContent videoModalOpen={videoModalOpen} />
    </div>
  );
}

function MainFrame({ videoModalOpen }: { videoModalOpen: () => void }) {
  return (
    <div className="w-full flex justify-center relative shrink-0" data-name="Main Frame">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <ContentFrame videoModalOpen={videoModalOpen} />
    </div>
  );
}

function Frame4({ videoModalOpen, onCaseStudiesClick }: { videoModalOpen: () => void; onCaseStudiesClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[83px] items-center leading-[0] relative shrink-0 w-full">
      <Group10 />
      <UseCasesSection onCaseStudiesClick={onCaseStudiesClick} />
      <MainFrame videoModalOpen={videoModalOpen} />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] md:text-[72px] lg:text-[96.5px] text-center tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-3px] w-full text-[#ffffff]">
        <p className="leading-[1.2] md:leading-[110px]">
          <CounterAnimation targetValue={360} duration={2500} suffix="° VALUE" />
        </p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full px-4 md:px-0" data-name="Heading 3">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[1.5] md:leading-[35px] not-italic relative shrink-0 text-[18px] md:text-[23.3px] text-center text-white w-full">
        <p className="mb-0">Every day, we embrace change and create value for all our stakeholders</p>
        <p>around the world.</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] pt-[4px] px-0 relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[842.66px] px-4 md:px-0" data-name="Container">
      <Heading2Margin />
      <Heading3Margin />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-nowrap text-white tracking-[-0.08px]">
        <p className="leading-[24px]">See the report</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pl-[12px] pr-0 py-0 relative shrink-0 w-[36px]" data-name="Margin">
      <BackgroundBackgroundImage />
    </div>
  );
}

function LinkSeeTheReportEveryDayWeCreate360Value({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center min-h-[48px] px-0 py-[12px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Link - See the report: Every day, we create 360° value."
      onClick={onClick}
    >
      <Container18 />
      <Margin5 />
    </div>
  );
}

function Container19({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkSeeTheReportEveryDayWeCreate360Value onClick={onClick} />
    </div>
  );
}

function Container20({ onCaseStudiesClick }: { onCaseStudiesClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center pb-0 pt-[120px] md:pt-[160px] px-4 md:px-0 relative shrink-0 w-full max-w-[1280px]" data-name="Container">
      <motion.div
        className="absolute top-[40px] md:top-[80px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <Container17 />
      <Container19 onClick={onCaseStudiesClick} />
    </div>
  );
}

function Frame5({ videoModalOpen, onCaseStudiesClick }: { videoModalOpen: () => void; onCaseStudiesClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[80px] md:gap-[120px] items-center relative shrink-0 w-full">
      <Frame4 videoModalOpen={videoModalOpen} onCaseStudiesClick={onCaseStudiesClick} />
      <Container20 onCaseStudiesClick={onCaseStudiesClick} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <BackgroundImageAndText1 text="Excellence Award" />
      <BackgroundImage text="Industry Leadership 2025" text1="Tech Innovation Summit" />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[290px] items-start left-[54px] pb-px pt-[25px] px-[25px] rounded-[16px] top-[720px] w-[521px]" data-name="1">
      <BackgroundImage1 />
      <div aria-hidden="true" className="absolute border-[0.777px] border-[rgba(255,255,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <BackgroundImageAndText1 text="Innovation Leader" />
      <BackgroundImage text="Best AI Platform 2025" text1="Global Tech Awards" />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex flex-col h-[290px] items-start left-[575px] pb-px pt-[25px] px-[25px] rounded-[16px] top-[1480px] w-[521px]" data-name="2">
      <BackgroundImage1 />
      <div aria-hidden="true" className="absolute border-[0.777px] border-[rgba(255,255,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <BackgroundImageAndText1 text="Best Workplace" />
      <BackgroundImage text="Top Employer 2025" text1="Fortune Magazine" />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[290px] items-start left-[174px] pb-px pt-[25px] px-[25px] rounded-[16px] top-[2525px] w-[521px]" data-name="3">
      <BackgroundImage1 />
      <div aria-hidden="true" className="absolute border-[0.777px] border-[rgba(255,255,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <BackgroundImageAndText1 text="Customer Choice" />
      <BackgroundImage text="Highest Satisfaction 2025" text1="Gartner Peer Insights" />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[290px] items-start left-[435px] opacity-0 pb-px pt-[25px] px-[25px] rounded-[16px] top-[3748px] w-[521px]" data-name="4">
      <BackgroundImage1 />
      <div aria-hidden="true" className="absolute border-[0.777px] border-[rgba(255,255,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame12 />
    </div>
  );
}

function Desktop1() {
  return <AwardsSection />;
}

function Frame6({ videoModalOpen, onCaseStudiesClick }: { videoModalOpen: () => void; onCaseStudiesClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[200px] items-center relative shrink-0 w-full">
      <Frame5 videoModalOpen={videoModalOpen} onCaseStudiesClick={onCaseStudiesClick} />
      <Desktop1 />
    </div>
  );
}

function EllipseGroup() {
  return (
    <div className="absolute h-[3676.25px] left-[-2030.05px] top-[-1017.55px] w-[4058.041px] dark:opacity-100 light:opacity-40" data-name="Ellipse Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4058.04 3676.25">
        <g id="Ellipse Group">
          <g filter="url(#filter0_i_4_1860)" id="Ellipse 979">
            <path d={svgPaths.pd457b00} fill="url(#paint0_radial_4_1860)" />
          </g>
          <g filter="url(#filter1_i_4_1860)" id="Ellipse 980">
            <path d={svgPaths.p104cda80} fill="url(#paint1_radial_4_1860)" />
          </g>
          <g filter="url(#filter2_i_4_1860)" id="Ellipse 981">
            <path d={svgPaths.p1ae9d400} fill="url(#paint2_radial_4_1860)" />
          </g>
          <g filter="url(#filter3_i_4_1860)" id="Ellipse 987">
            <path d={svgPaths.p162a7ff0} fill="url(#paint3_radial_4_1860)" />
          </g>
          <g filter="url(#filter4_i_4_1860)" id="Ellipse 986">
            <path d={svgPaths.p25cf8640} fill="url(#paint4_radial_4_1860)" />
          </g>
          <g filter="url(#filter5_i_4_1860)" id="Ellipse 982">
            <path d={svgPaths.p1bba1dc0} fill="url(#paint5_radial_4_1860)" />
          </g>
          <g filter="url(#filter6_i_4_1860)" id="Ellipse 988">
            <path d={svgPaths.p3b2a6700} fill="url(#paint6_radial_4_1860)" />
          </g>
          <g filter="url(#filter7_i_4_1860)" id="Ellipse 989">
            <path d={svgPaths.p1f3af680} fill="url(#paint7_radial_4_1860)" />
          </g>
          <g filter="url(#filter8_i_4_1860)" id="Ellipse 983">
            <path d={svgPaths.p1be60500} fill="url(#paint8_radial_4_1860)" />
          </g>
          <g filter="url(#filter9_i_4_1860)" id="Ellipse 985">
            <path d={svgPaths.pad7600} fill="url(#paint9_radial_4_1860)" />
          </g>
          <g filter="url(#filter10_i_4_1860)" id="Ellipse 984">
            <path d={svgPaths.p304e1a80} fill="url(#paint10_radial_4_1860)" />
          </g>
          <g filter="url(#filter11_i_4_1860)" id="Ellipse 967">
            <path d={svgPaths.p35a28800} fill="url(#paint11_radial_4_1860)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter0_i_4_1860" width="2277.51" x="1780.54" y="1773.5">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter1_i_4_1860" width="2277.51" x="1618.67" y="1612.27">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter2_i_4_1860" width="2277.51" x="1456.8" y="1451.04">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter3_i_4_1860" width="2277.51" x="1294.93" y="1289.82">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter4_i_4_1860" width="2277.51" x="1133.07" y="1128.59">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter5_i_4_1860" width="2277.51" x="971.199" y="967.363">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter6_i_4_1860" width="2277.51" x="809.332" y="806.137">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter7_i_4_1860" width="2277.51" x="647.465" y="644.91">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter8_i_4_1860" width="2277.51" x="485.598" y="483.68">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter9_i_4_1860" width="2277.51" x="323.734" y="322.453">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter10_i_4_1860" width="2277.51" x="161.867" y="161.227">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1905.83" id="filter11_i_4_1860" width="2277.51" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="3.08132" />
            <feGaussianBlur stdDeviation="24.6505" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.952941 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_4_1860" />
          </filter>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 3785.66 2122.82)" gradientUnits="userSpaceOnUse" id="paint0_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 3623.79 1961.59)" gradientUnits="userSpaceOnUse" id="paint1_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 3461.92 1800.36)" gradientUnits="userSpaceOnUse" id="paint2_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 3300.06 1639.14)" gradientUnits="userSpaceOnUse" id="paint3_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 3138.19 1477.91)" gradientUnits="userSpaceOnUse" id="paint4_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 2976.32 1316.68)" gradientUnits="userSpaceOnUse" id="paint5_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 2814.46 1155.46)" gradientUnits="userSpaceOnUse" id="paint6_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 2652.59 994.23)" gradientUnits="userSpaceOnUse" id="paint7_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 2490.72 833)" gradientUnits="userSpaceOnUse" id="paint8_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 2328.86 671.773)" gradientUnits="userSpaceOnUse" id="paint9_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 2166.99 510.547)" gradientUnits="userSpaceOnUse" id="paint10_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-1083.53 866.678 -1969.71 -1718.82 2005.12 349.32)" gradientUnits="userSpaceOnUse" id="paint11_radial_4_1860" r="1">
            <stop offset="0.107342" stopColor="#2E1148" />
            <stop offset="0.445591" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function GradientBackground() {
  return (
    <div className="[grid-area:1_/_1] dark:bg-black/80 light:bg-white/90 backdrop-blur-xl dark:border-[rgba(0,0,0,0.75)] light:border-[rgba(139,31,214,0.15)] border border-solid h-[1024px] ml-0 mt-[38px] overflow-clip relative rounded-[40px] dark:shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] light:shadow-[0px_8px_32px_0px_rgba(139,31,214,0.12)] w-[1440px]" data-name="Gradient Background #12">
      <EllipseGroup />
      <div className="absolute dark:bg-black light:bg-purple-100/30 blur-[200px] bottom-[-468.91px] filter h-[759.252px] left-1/2 translate-x-[-50%] w-[2239.887px]" data-name="Background" />
      <div className="absolute bg-repeat bg-size-[1024px_1024px] bg-top-left inset-[calc(-0.01%-1px)_calc(0%-1px)_calc(0.01%-1px)_calc(0%-1px)] mix-blend-overlay dark:opacity-70 light:opacity-30" data-name="texture" style={{ backgroundImage: `url('${imgTexture}')` }} />
      <div className="absolute h-[1024px] left-[-1.03px] dark:opacity-40 light:opacity-20 top-[-0.91px] w-[1440px]" data-name="Noise & Texture">
        <div aria-hidden="true" className="absolute bg-repeat bg-size-[1738.35546875px_1738.35546875px] bg-top-left inset-0 dark:opacity-[0.08] light:opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url('${imgNoiseTexture}')` }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b dark:from-black/10 light:from-purple-500/5 via-transparent dark:to-black/20 light:to-purple-600/10 pointer-events-none" />
    </div>
  );
}

function Icon2() {
  return (
    <IconBackgroundImage3 additionalClassNames="relative shrink-0">
      <path d={svgPaths.p198e7ec0} id="Vector" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p2a7ade40} id="Vector_2" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </IconBackgroundImage3>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(160,32,240,0.1)] content-stretch flex items-center justify-center left-[20px] p-px rounded-[10px] size-[36px] top-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(160,32,240,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon2 />
    </div>
  );
}

function Container22() {
  return (
    <ContainerBackgroundImage3 additionalClassNames="left-[80px] top-[546px]">
      <Container21 />
      <ContainerBackgroundImageAndText text="98%" />
      <ContainerBackgroundImageAndText1 text="Client Satisfaction" />
    </ContainerBackgroundImage3>
  );
}

function Icon3() {
  return (
    <IconBackgroundImage3 additionalClassNames="relative shrink-0">
      <path d={svgPaths.p17627104} id="Vector" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1e2bec00} id="Vector_2" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p13d84a80} id="Vector_3" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.pba83280} id="Vector_4" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </IconBackgroundImage3>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[rgba(160,32,240,0.1)] content-stretch flex items-center justify-center left-[20px] p-px rounded-[10px] size-[36px] top-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(160,32,240,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon3 />
    </div>
  );
}

function Container24() {
  return (
    <ContainerBackgroundImage3 additionalClassNames="left-[calc(16.67%+126px)] top-[546px]">
      <Container23 />
      <ContainerBackgroundImageAndText text="500+" />
      <ContainerBackgroundImageAndText1 text="Enterprise Clients" />
    </ContainerBackgroundImage3>
  );
}

function Icon4() {
  return (
    <IconBackgroundImage3 additionalClassNames="relative shrink-0">
      <path d={svgPaths.p286983f0} id="Vector" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </IconBackgroundImage3>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(160,32,240,0.1)] content-stretch flex items-center justify-center left-[20px] p-px rounded-[10px] size-[36px] top-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(160,32,240,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon4 />
    </div>
  );
}

function Container26() {
  return (
    <ContainerBackgroundImage3 additionalClassNames="left-[80px] top-[712px]">
      <Container25 />
      <ContainerBackgroundImageAndText text="2.5x" />
      <ContainerBackgroundImageAndText1 text="Faster Deployment" />
    </ContainerBackgroundImage3>
  );
}

function Icon5() {
  return (
    <IconBackgroundImage3 additionalClassNames="relative shrink-0">
      <path d={svgPaths.pb794cb2} id="Vector" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </IconBackgroundImage3>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(160,32,240,0.1)] content-stretch flex items-center justify-center left-[20px] p-px rounded-[10px] size-[36px] top-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(160,32,240,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon5 />
    </div>
  );
}

function Container28() {
  return (
    <ContainerBackgroundImage3 additionalClassNames="left-[calc(16.67%+126px)] top-[712px]">
      <Container27 />
      <ContainerBackgroundImageAndText text="100%" />
      <ContainerBackgroundImageAndText1 text="Security Compliant" />
    </ContainerBackgroundImage3>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[52px] top-[174px]" data-name="Container">
      <ButtonBackgroundImageAndText text="API Gateway" additionalClassNames="w-[121px]" />
      <ButtonBackgroundImageAndText text="Security" additionalClassNames="w-[89px]" />
      <ButtonBackgroundImageAndText text="Analytics" additionalClassNames="w-[96px]" />
      <ButtonBackgroundImageAndText text="Developer Portal" additionalClassNames="w-[150px]" />
    </div>
  );
}

function ProductCard({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="absolute contents left-[52px] top-[64px]" data-name="Product Card">
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic text-[36px] text-white top-[64px] w-[441px]">Atlas API Management</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic opacity-60 text-[16px] text-nowrap text-white top-[134px]">Robust platform for managing, securing, and scaling APIs</p>
      <Container29 />
      <ButtonSecondaryBackgroundImageAndText1 
        text="Know More" 
        additionalClassNames="top-[245px]" 
        onClick={() => onProductClick("Atlas API Manager")}
      />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[52px] top-[497.4px]" data-name="Container">
      <ButtonBackgroundImageAndText text="AI Development" additionalClassNames="w-[147px]" />
      <ButtonBackgroundImageAndText text="Automation" additionalClassNames="w-[117px]" />
      <ButtonBackgroundImageAndText text="Integration" additionalClassNames="w-[111px]" />
      <ButtonBackgroundImageAndText text="Monitoring" additionalClassNames="w-[110px]" />
    </div>
  );
}

function ProductCard1({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="absolute contents left-[52px] top-[387.4px]" data-name="Product Card">
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic text-[36px] text-white top-[387.4px] w-[441px]">Agent Studio</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic opacity-60 text-[16px] text-nowrap text-white top-[457.4px]">Powerful environment for developing intelligent agents</p>
      <Container30 />
      <ButtonSecondaryBackgroundImageAndText1 
        text="Know More" 
        additionalClassNames="top-[568.4px]" 
        onClick={() => onProductClick("Agent Studio")}
      />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[52px] top-[820.8px]" data-name="Container">
      <ButtonBackgroundImageAndText text="Live Streaming" additionalClassNames="w-[138px]" />
      <ButtonBackgroundImageAndText text="CDN" additionalClassNames="w-[66px]" />
      <ButtonBackgroundImageAndText text="Analytics" additionalClassNames="w-[96px]" />
      <ButtonBackgroundImageAndText text="Security" additionalClassNames="w-[89px]" />
    </div>
  );
}

function ProductCard2({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="absolute contents left-[52px] top-[710.8px]" data-name="Product Card">
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic text-[36px] text-nowrap text-white top-[710.8px]">Ottohm Video Streaming</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic opacity-60 text-[16px] text-nowrap text-white top-[780.8px]">Comprehensive video content delivery solution</p>
      <Container31 />
      <ButtonSecondaryBackgroundImageAndText1 
        text="Know More" 
        additionalClassNames="top-[891.8px]" 
        onClick={() => onProductClick("Ottohm Video")}
      />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[52px] top-[1144.2px]" data-name="Container">
      <ButtonBackgroundImageAndText text="Ticket Management" additionalClassNames="w-[174px]" />
      <ButtonBackgroundImageAndText text="Workflow" additionalClassNames="w-[99px]" />
      <ButtonBackgroundImageAndText text="Reporting" additionalClassNames="w-[104px]" />
      <ButtonBackgroundImageAndText text="Integration" additionalClassNames="w-[111px]" />
    </div>
  );
}

function ProductCard3({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="absolute contents left-[52px] top-[1034.2px]" data-name="Product Card">
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic text-[36px] text-white top-[1034.2px] w-[441px]">ITSM Ticketing Tool</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic opacity-60 text-[16px] text-nowrap text-white top-[1104.2px]">Cloud-native IT Service Management solution</p>
      <Container32 />
      <ButtonSecondaryBackgroundImageAndText1 
        text="Know More" 
        additionalClassNames="top-[1215.2px]" 
        onClick={() => onProductClick("ITSM Ticketing Tool")}
      />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[52px] top-[1467.61px]" data-name="Container">
      <ButtonBackgroundImageAndText text="Blockchain" additionalClassNames="w-[110px]" />
      <ButtonBackgroundImageAndText text="Automation" additionalClassNames="w-[117px]" />
      <ButtonBackgroundImageAndText text="Security" additionalClassNames="w-[89px]" />
      <ButtonBackgroundImageAndText text="Compliance" additionalClassNames="w-[117px]" />
    </div>
  );
}

function ProductCard4({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="absolute contents left-[52px] top-[1357.61px]" data-name="Product Card">
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic text-[36px] text-white top-[1357.61px] w-[441px]">Smart Contracts</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic opacity-60 text-[16px] text-nowrap text-white top-[1427.61px]">Secure, transparent automated agreements</p>
      <Container33 />
      <ButtonSecondaryBackgroundImageAndText1 
        text="Know More" 
        additionalClassNames="top-[1538.61px]" 
        onClick={() => onProductClick("Smart Contracts")}
      />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(160,32,240,0.3)] content-stretch flex h-[39px] items-center justify-center left-[363px] p-px rounded-[10px] top-[1791.01px] w-[112px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(160,32,240,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[80px]">
        <p className="leading-[22.4px]">Monitoring</p>
      </div>
    </div>
  );
}

function ProductCard5({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="absolute contents left-[52px] top-[1681.01px]" data-name="Product Card">
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic text-[36px] text-white top-[1681.01px] w-[441px]">AI Ops Platform</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(50%-251.5px)] not-italic opacity-60 text-[16px] text-nowrap text-white top-[1751.01px]">Advanced AI-powered IT operations automation</p>
      <BackgroundImageAndText2 text="Predictive Analytics" additionalClassNames="left-[52px] top-[1791.01px] w-[170px]" />
      <BackgroundImageAndText2 text="Automation" additionalClassNames="left-[234px] top-[1791.01px] w-[117px]" />
      <Button2 />
      <BackgroundImageAndText2 text="Optimization" additionalClassNames="left-[52px] top-[1842.01px] w-[125px]" />
      <ButtonSecondaryBackgroundImageAndText1 
        text="Know More" 
        additionalClassNames="top-[1913.01px]" 
        onClick={() => onProductClick("AIOps")}
      />
    </div>
  );
}

function Container34({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="absolute h-[1034px] left-[calc(50%+33px)] overflow-x-clip overflow-y-auto top-[61px] w-[607px]" data-name="Container">
      <ProductCard onProductClick={onProductClick} />
      <ProductCard1 onProductClick={onProductClick} />
      <ProductCard2 onProductClick={onProductClick} />
      <ProductCard3 onProductClick={onProductClick} />
      <ProductCard4 onProductClick={onProductClick} />
      <ProductCard5 onProductClick={onProductClick} />
    </div>
  );
}

function Desktop({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="[grid-area:1_/_1] h-[1023px] ml-0 mt-0 overflow-clip relative w-[1440px]" data-name="Desktop - 15">
      <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[1.5] left-[calc(20.83%-220px)] not-italic text-[16px] text-white top-[430px] w-[441px]">Our commitment to innovation reflected in our suite of proprietary products, designed to solve specific enterprise challenges.</p>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] leading-[1.2] left-[calc(20.83%-220px)] not-italic text-[60px] top-[266px] w-[483px] text-[#ffffff]">
        Innovative Cloud Products
      </p>
      <Container22 />
      <Container24 />
      <Container26 />
      <Container28 />
      <Container34 onProductClick={onProductClick} />
      <div className="absolute flex h-[1010px] items-center justify-center left-[calc(50%-11px)] top-[61px] w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[1010px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1010 1">
                <line id="Line 30" stroke="var(--stroke-0, white)" strokeLinecap="round" x1="0.5" x2="1009.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container35({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-720px)] mt-0 place-items-start relative" data-name="Container">
      <Desktop onProductClick={onProductClick} />
    </div>
  );
}

function Container36({ onProductClick }: { onProductClick: (productTitle: string) => void }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <Container35 onProductClick={onProductClick} />
    </div>
  );
}

function Frame7({ videoModalOpen, onProductClick, onCaseStudiesClick }: { videoModalOpen: () => void; onProductClick: (productTitle: string) => void; onCaseStudiesClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[142px] items-center relative shrink-0 w-full">
      <Frame6 videoModalOpen={videoModalOpen} onCaseStudiesClick={onCaseStudiesClick} />
      <Container36 onProductClick={onProductClick} />
      {/* Mobile-Optimized Products Section */}
      <ProductsSection />
    </div>
  );
}

function ImageCareerOpportunities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:absolute relative md:h-[497px] h-[300px] md:left-0 left-0 md:top-[-1px] top-0 md:w-[720px] w-full mb-8 md:mb-0 rounded-xl overflow-hidden"
      data-name="Image (Career opportunities)"
    >
      <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-xl" src={imgImageCareerOpportunities} />
    </motion.div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p13bf3a00} id="Vector" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3dd5cb00} id="Vector_2" stroke="var(--stroke-0, #A020F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[19.5px] left-[34px] top-[6px] w-[47.195px]" data-name="Text">
      <p className="absolute font-['Graphik_Compact_Trial',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.9)] text-nowrap top-px tracking-normal">Careers</p>
    </div>
  );
}

function Container37() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="absolute bg-gradient-to-r border border-[rgba(255,255,255,0.1)] border-solid from-[rgba(255,255,255,0.08)] h-[33.5px] left-0 rounded-[1.67772e+07px] to-[rgba(255,255,255,0.04)] top-0 w-[95.195px]"
      data-name="Container"
    >
      <Icon6 />
      <Text1 />
    </motion.div>
  );
}

function Heading2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="md:absolute relative md:h-[120px] h-auto md:left-0 left-0 md:top-[57.5px] top-0 md:w-[638px] w-full mt-15 mb-4 md:mt-0 md:mb-0"
      data-name="Heading 2"
    >
      <h2 className="md:absolute relative font-['Graphik_Compact_Trial',sans-serif] font-normal md:leading-[60px] leading-[1.3] md:left-0 left-0 not-italic md:text-[48px] text-[32px] text-white md:top-[0.5px] top-0 tracking-normal md:w-[638px] w-full">Level up your career where innovation never stops.</h2>
    </motion.div>
  );
}

function Paragraph() {
  return <div className="md:absolute relative md:h-[52px] h-auto md:left-0 left-0 md:top-[201.5px] top-0 md:w-[638px] w-full" data-name="Paragraph" />;
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44.5px] items-start left-[61px] top-[17px] w-[210.422px]" data-name="Container">
      <HeadingBackgroundImageAndText text="Continuous Learning" />
      <ParagraphBackgroundImageAndText text="Access to global training programs" />
    </div>
  );
}

function Container39() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.02)] place-self-stretch relative rounded-[14px] shrink-0"
      data-name="Container"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ContainerBackgroundImage1 />
      <Container38 />
    </motion.div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44.5px] items-start left-[61px] top-[17px] w-[201.5px]" data-name="Container">
      <HeadingBackgroundImageAndText text="Global Impact" />
      <ParagraphBackgroundImageAndText text="Work on world-changing projects" />
    </div>
  );
}

function Container41() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.02)] place-self-stretch relative rounded-[14px] shrink-0"
      data-name="Container"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ContainerBackgroundImage1 />
      <Container40 />
    </motion.div>
  );
}

function Container42() {
  return (
    <div className="md:absolute relative gap-10 md:gap-[16px] grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-auto md:h-[86.5px] md:left-0 left-0 pb-0 pt-[8px] px-0 md:top-[266.5px] top-0 mb-6 md:mb-0 w-full md:w-[638px]" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[21px] left-[24px] top-[12px] w-[137.805px]" data-name="Text">
      <p className="absolute font-['Graphik_Compact_Trial',sans-serif] font-normal leading-[21px] left-[69px] not-italic text-[14px] text-center text-nowrap text-white top-0 tracking-normal translate-x-[-50%]">Explore opportunities</p>
    </div>
  );
}

function Icon7() {
  return (
    <IconBackgroundImage3 additionalClassNames="absolute left-[169.8px] top-[14.5px]">
      <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p15a8fe00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </IconBackgroundImage3>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="md:absolute relative bg-[#a020f0] h-[45px] md:left-0 left-0 rounded-full shadow-[0px_10px_15px_-3px_rgba(160,32,240,0.25),0px_4px_6px_-4px_rgba(160,32,240,0.25)] md:top-[377px] top-0 mt-15 md:mt-0 w-full md:w-[209.805px] cursor-pointer flex items-center justify-center gap-2"
      data-name="Button"
    >
      <p className="font-['Graphik_Compact_Trial',sans-serif] font-normal text-[14px] text-white text-nowrap">Explore opportunities</p>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33398 8H12.6673" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p15a8fe00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </motion.div>
  );
}

function Container43({ onCareersClick }: { onCareersClick?: () => void }) {
  return (
    <div className="md:absolute relative md:h-[470px] h-auto md:left-[761px] left-0 md:top-[26px] top-0 md:w-[638px] w-full flex flex-col md:block" data-name="Container">
      <Container37 />
      <Heading2 />
      <Paragraph />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="md:absolute relative font-['Graphik_Compact_Trial',sans-serif] font-normal leading-[26px] md:left-0 left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] md:top-[190px] top-0 mb-6 md:mb-0 tracking-normal md:w-[624px] w-full"
      >
        Step into a global community driven by innovation, collaboration, and a shared mission to shape a better future.
      </motion.p>
      <Container42 />
      <Button3 onClick={onCareersClick} />
    </div>
  );
}

function Component14({ onCareersClick }: { onCareersClick?: () => void }) {
  return (
    <div className="md:h-[500px] h-auto overflow-clip relative shrink-0 md:w-[1440px] w-full md:mt-[200px] mt-[80px] md:mb-[120px] mb-[80px] md:px-0 px-4" data-name="Component 185">
      <ImageCareerOpportunities />
      <Container43 onCareersClick={onCareersClick} />
    </div>
  );
}

function Frame8({ videoModalOpen, onCareersClick, onProductClick, onCaseStudiesClick }: { videoModalOpen: () => void; onCareersClick?: () => void; onProductClick: (productTitle: string) => void; onCaseStudiesClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame7 videoModalOpen={videoModalOpen} onProductClick={onProductClick} onCaseStudiesClick={onCaseStudiesClick} />
      <Component14 onCareersClick={onCareersClick} />
    </div>
  );
}

function Component15() {
  return (
    <div className="[grid-area:1_/_1] h-[284px] ml-0 mt-[110px] overflow-clip relative text-white w-[1440px]" data-name="Component 188">
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Regular',sans-serif] justify-center left-[calc(50%-585px)] not-italic text-[20px] text-center text-nowrap top-[calc(50%-81px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[41.6px]">May 22, 2024</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Regular',sans-serif] justify-center left-[calc(50%+410px)] not-italic text-[20px] text-center text-nowrap top-[calc(50%-81px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[41.6px]">December 20, 2024</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Semibold',sans-serif] justify-center left-[calc(50%+1413.5px)] not-italic text-[20px] text-center text-nowrap top-[calc(50%-99px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[41.6px]">November 22, 2023</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Semibold',sans-serif] justify-center left-[calc(50%+2340px)] not-italic text-[20px] text-center text-nowrap top-[calc(50%-99px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[41.6px]">November 15, 2023</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Medium',sans-serif] justify-center left-[1048px] not-italic text-[40px] top-[166px] translate-y-[-50%] w-[883px]">
        <p className="leading-[60px]">Neo4j and Applied Cloud Computing Forge Strategic Partnership to Revolutionize Data Management</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Semibold','Noto_Sans:SemiBold',sans-serif] justify-center left-[2051px] text-[40px] top-[148px] translate-y-[-50%] w-[807px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
        <p className="leading-[60px]">{`Transforming Businesses with AI: Applied Cloud Computing's Vision and Strategy`}</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Semibold',sans-serif] justify-center left-[2978px] not-italic text-[40px] top-[148px] translate-y-[-50%] w-[807px]">
        <p className="leading-[60px]">Tessell and Applied Cloud Computing Transform Cloud Migration and Modernization Landscape</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Semibold',sans-serif] justify-center left-[calc(50%+3268px)] not-italic text-[20px] text-center text-nowrap top-[calc(50%-99px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[41.6px]">September 19, 2023</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Semibold',sans-serif] justify-center left-[3906px] not-italic text-[40px] top-[148px] translate-y-[-50%] w-[807px]">
        <p className="leading-[60px]">Applied Cloud Computing Appoints Lakhvinder Singh to Head Cloud Practice</p>
      </div>
      <div className="absolute flex flex-col font-['Graphik_Compact_Trial:Medium',sans-serif] justify-center left-[80px] not-italic text-[40px] top-[166px] translate-y-[-50%] w-[848px]">
        <p className="leading-[60px]">Applied Cloud Computing Announces Strategic Partnership with Oracle Inc. and RackWare Inc.</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[16.8px] relative w-[14.4px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 16.8">
        <g id="Component 2">
          <path d={svgPaths.p39b41080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <ContainerBackgroundImage2 additionalClassNames="h-[16.8px] w-[14.4px]">
      <Component4 />
    </ContainerBackgroundImage2>
  );
}

function Background() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Background">
      <Container44 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-[80px] size-[48px]" data-name="Component 3">
      <Background />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative self-stretch shrink-0 w-[0.01px]" data-name="Container">
      <Component5 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Container">
      <ContainerBackgroundImageAndText2 text="1" />
      <ContainerBackgroundImageAndText2 text="/" />
      <ContainerBackgroundImageAndText2 text="6" />
    </div>
  );
}

function Margin6() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-[48px] px-[16px] py-0 top-0 w-[80px]" data-name="Margin">
      <Container46 />
    </div>
  );
}

function Component6() {
  return (
    <ComponentBackgroundImage4>
      <path d={svgPaths.p25b49e80} fill="var(--fill-0, white)" id="Vector" />
    </ComponentBackgroundImage4>
  );
}

function Container47() {
  return (
    <ContainerBackgroundImage2 additionalClassNames="size-[15.97px]">
      <Component6 />
    </ContainerBackgroundImage2>
  );
}

function Background1() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Background">
      <Container47 />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[48px] top-0" data-name="Component 3">
      <Background1 />
    </div>
  );
}

function Component8() {
  return (
    <ComponentBackgroundImage4>
      <path d={svgPaths.p21458b0} fill="var(--fill-0, white)" id="Vector" />
    </ComponentBackgroundImage4>
  );
}

function Container48() {
  return (
    <ContainerBackgroundImage2 additionalClassNames="size-[15.97px]">
      <Component8 />
    </ContainerBackgroundImage2>
  );
}

function Background2() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Background">
      <Container48 />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[128px] size-[48px] top-0" data-name="Component 3">
      <Background2 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative self-stretch shrink-0 w-[176px]" data-name="Container">
      <Margin6 />
      <Component7 />
      <Component9 />
    </div>
  );
}

function Container50() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start justify-between ml-0 mt-[418px] relative w-[1360px]" data-name="Container">
      <Container45 />
      <Container49 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Graphik_Compact_Trial:Semibold',sans-serif] justify-center ml-[219px] mt-[55px] not-italic relative text-[65px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%] text-[#ffffff]">
        <p className="leading-[110px]">Applied Cloud Computing News</p>
      </div>
      <Component15 />
      <Container50 />
    </div>
  );
}

function Frame9({ videoModalOpen, onCareersClick, onProductClick, onCaseStudiesClick }: { videoModalOpen: () => void; onCareersClick?: () => void; onProductClick: (productTitle: string) => void; onCaseStudiesClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame8 videoModalOpen={videoModalOpen} onCareersClick={onCareersClick} onProductClick={onProductClick} onCaseStudiesClick={onCaseStudiesClick} />
      {/* <Group8 /> - Footer removed from home screen */}
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText text="Preference Center" />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText text="Careers" />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText text="About Us" />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText text="Contact Us" />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText text="Locations" />
    </div>
  );
}

function Component10() {
  return <div className="content-stretch flex flex-col items-start shrink-0" data-name="Component 5" />;
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component10 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[224px] items-start relative shrink-0 w-[186px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[32px] py-0 relative self-stretch shrink-0 w-[218px]" data-name="List:margin">
      <List />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText text="Privacy Statement" />
    </div>
  );
}

function Component11() {
  return <BackgroundImage2>{`Terms & Conditions`}</BackgroundImage2>;
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component11 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5">
      <div className="flex flex-col font-['Graphik_Compact_Trial:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[15.3px] text-nowrap text-white tracking-[-0.08px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[24px]">Cookie Policy/Settings</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component12 />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 5">
      <div className="flex flex-col font-['Graphik_Compact_Trial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15.3px] text-nowrap text-white tracking-[-0.08px]">
        <p className="leading-[24px]">Accessibility Statement</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component13 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[186px]" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Container51() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start ml-[4px] mt-[204px] relative w-[628px]" data-name="Container">
      <ListMargin />
      <List1 />
    </div>
  );
}

function ImageFooterSocialItemImg() {
  return (
    <ImageFooterSocialItemImgBackgroundImage>
      <path d={svgPaths.p30337e00} fill="var(--fill-0, white)" id="Vector" />
    </ImageFooterSocialItemImgBackgroundImage>
  );
}

function ImageFooterSocialItemImg1() {
  return (
    <ImageFooterSocialItemImgBackgroundImage>
      <path d={svgPaths.p2d24480} fill="var(--fill-0, white)" id="Vector" />
    </ImageFooterSocialItemImgBackgroundImage>
  );
}

function ImageFooterSocialItemImg2() {
  return (
    <ImageFooterSocialItemImgBackgroundImage>
      <path d={svgPaths.p3f641180} fill="var(--fill-0, white)" id="Vector" />
    </ImageFooterSocialItemImgBackgroundImage>
  );
}

function ImageFooterSocialItemImg3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[26px]" data-name="Image [footer-social__item-img]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 21">
        <g id="Image [footer-social__item-img]">
          <path d={svgPaths.p989c0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFooterSocialItemImg4() {
  return (
    <ImageFooterSocialItemImgBackgroundImage>
      <path d={svgPaths.p1cdcb180} fill="var(--fill-0, white)" id="Vector" />
    </ImageFooterSocialItemImgBackgroundImage>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.07%_11.55%_9.14%_7.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[21.828px_16.546px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8275 16.5458">
        <g id="Group">
          <path d={svgPaths.p2ebd6a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[12.07%_11.55%_9.14%_7.61%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function ImageFooterSocialItemImg5() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-[27px]" data-name="Image [footer-social__item-img]">
      <ClipPathGroup1 />
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center justify-between ml-0 mt-[153.3px] relative w-[281px]" data-name="Social Media Icons">
      <ImageFooterSocialItemImg />
      <ImageFooterSocialItemImg1 />
      <ImageFooterSocialItemImg2 />
      <ImageFooterSocialItemImg3 />
      <ImageFooterSocialItemImg4 />
      <ImageFooterSocialItemImg5 />
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-black h-[161px] overflow-clip relative w-[442px]" data-name="Component 195">
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[220px] left-0 not-italic text-[200px] text-nowrap text-white top-[161px] translate-y-[-50%]">
        <p className="mb-0">ACC</p>
        <p>ACC</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-black h-[111px] overflow-clip relative w-[442px]" data-name="Component 196">
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[220px] left-0 not-italic text-[200px] text-nowrap text-white top-[111px] translate-y-[-50%]">
        <p className="mb-0">ACC</p>
        <p>ACC</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-black h-[75px] overflow-clip relative w-[442px]" data-name="Component 197">
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[220px] left-0 not-italic text-[200px] text-nowrap text-white top-[75px] translate-y-[-50%]">
        <p className="mb-0">ACC</p>
        <p>ACC</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] h-[442px] inline-grid ml-[618px] mt-0 place-items-start relative w-[742px]">
      <BackgroundImage5 additionalClassNames="mt-[267px] w-[220px]">
        <ComponentBackgroundImage3 text="ACC" text1="ACC" additionalClassNames="h-[220px]" />
      </BackgroundImage5>
      <BackgroundImage5 additionalClassNames="mt-[454px] w-[161px]">
        <Component16 />
      </BackgroundImage5>
      <BackgroundImage5 additionalClassNames="mt-[584px] w-[111px]">
        <Component17 />
      </BackgroundImage5>
      <BackgroundImage5 additionalClassNames="mt-[667px] w-[75px]">
        <Component18 />
      </BackgroundImage5>
      <BackgroundImage5 additionalClassNames="mt-[145px] w-[154px]">
        <ComponentBackgroundImage3 text="ACC" text1="ACC" additionalClassNames="h-[154px]" />
      </BackgroundImage5>
      <BackgroundImage5 additionalClassNames="mt-[52px] w-[130px]">
        <ComponentBackgroundImage3 text="ACC" text1="ACC" additionalClassNames="h-[130px]" />
      </BackgroundImage5>
      <BackgroundImage5 additionalClassNames="mt-0 w-[86px]">
        <ComponentBackgroundImage3 text="ACC" text1="ACC" additionalClassNames="h-[86px]" />
      </BackgroundImage5>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Graphik_Compact_Trial:Medium',sans-serif] justify-center ml-0 mt-[85.8px] not-italic relative text-[29.8px] tracking-[-0.64px] translate-y-[-50%] w-[402px] text-[#ffffff]">
        <p className="leading-[38.4px]">Your comprehensive solution provider for digital transformation.</p>
      </div>
      <Container51 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Graphik_Compact_Trial:Regular',sans-serif] justify-center ml-[4px] mt-[470.5px] not-italic relative text-[13.6px] text-nowrap text-white tracking-[-0.07px] translate-y-[-50%]">
        <p className="leading-[21px]">© 2025 Appliedcloudcomputing. All Rights Reserved.</p>
      </div>
      <SocialMediaIcons />
    </div>
  );
}

function Frame10({ videoModalOpen, onCareersClick, onProductClick, onCaseStudiesClick }: { videoModalOpen: () => void; onCareersClick?: () => void; onProductClick: (productTitle: string) => void; onCaseStudiesClick?: () => void }) {
  return (
    <div className="relative content-stretch flex flex-col items-center left-0 md:top-0 top-[60px] w-full">
      <Frame9 videoModalOpen={videoModalOpen} onCareersClick={onCareersClick} onProductClick={onProductClick} onCaseStudiesClick={onCaseStudiesClick} />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[40.639px] ml-0 mt-0 relative w-[112px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 40.6387">
        <g id="Group">
          <path d={svgPaths.p1a137200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.ped4dd00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3({ onLogoClick }: { onLogoClick?: () => void }) {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate('/');
  };
  
  return (
    <div 
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer" 
      data-name="Group"
      onClick={handleLogoClick}
    >
      <Group2 />
    </div>
  );
}

// Services data for "Services" dropdown
const services = [
  {
    title: "Cloud Practice",
    description: "Migration & Infrastructure",
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Digital & Product Engineering",
    description: "Product Development",
    icon: Sparkles,
    gradient: "from-orange-500 to-pink-500"
  },
  // Temporarily hidden
  // {
  //   title: "AI Agents",
  //   description: "Intelligent Automation",
  //   icon: Brain,
  //   gradient: "from-purple-500 to-pink-500"
  // },
  {
    title: "Big Data",
    description: "Analytics & Processing",
    icon: Database,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "App Modernization",
    description: "Legacy Migration",
    icon: RefreshCw,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Security",
    description: "Cybersecurity & Compliance",
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Database Management",
    description: "Optimization & Admin",
    icon: Server,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "ERP & Testing",
    description: "QA & Enterprise Solutions",
    icon: Wrench,
    gradient: "from-red-500 to-orange-500"
  }
];

// Products data for "Products" dropdown
const products = [
  {
    title: "Atlas API Manager",
    description: "Enterprise API Gateway",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Agent Studio",
    description: "Build AI Agents",
    icon: Bot,
    gradient: "from-orange-500 to-pink-500"
  },
  {
    title: "Ottohm Video",
    description: "Video Streaming Platform",
    icon: Video,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "ITSM Ticketing",
    description: "IT Service Management",
    icon: Ticket,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "AI Ops Platform",
    description: "Intelligent Operations",
    icon: Activity,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Smart Contracts",
    description: "Blockchain Solutions",
    icon: FileCode,
    gradient: "from-indigo-500 to-purple-500"
  }
];

function ProductsDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  
  const handleProductClick = (productTitle: string) => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(getProductUrl(productTitle));
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Optimized Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 z-[999] cursor-pointer"
            style={{ willChange: "opacity" }}
            onClick={onClose}
          />
          
          {/* Dropdown Menu - Accenture minimalist style */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[92px] -translate-x-1/2 z-[1000] w-[95vw] max-w-[1280px]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="bg-[#1a1a1a] rounded-[8px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.8)] border border-white/[0.06] overflow-hidden">
              {/* Products Grid - Accenture minimal style */}
              <div className="px-12 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="group cursor-pointer"
                      onClick={() => handleProductClick(product.title)}
                    >
                      {/* Simple text link with hover effect */}
                      <div className="relative">
                        <h3 className="font-['Montserrat:SemiBold',sans-serif] text-white text-[15px] leading-[1.5] mb-1 group-hover:text-white/80 transition-colors duration-200">
                          {product.title}
                        </h3>
                        <p className="font-['Montserrat:Regular',sans-serif] text-white/40 text-[13px] leading-[1.4] group-hover:text-white/50 transition-colors duration-200">
                          {product.description}
                        </p>
                        
                        {/* Subtle underline on hover */}
                        <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const aiPages = [
  {
    title: "BFSI Agents",
    description: "AI agents for banking and financial services"
  },
  {
    title: "Brand Management Agents",
    description: "AI agents for brand strategy and optimization"
  }
];

function AIDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  
  const handleAIClick = (aiPageTitle: string) => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(getAIUrl(aiPageTitle));
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 z-[999] cursor-pointer"
            style={{ willChange: "opacity" }}
            onClick={onClose}
          />
          
          {/* Dropdown Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[92px] -translate-x-1/2 z-[1000] w-auto"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="bg-[#1a1a1a] rounded-[8px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.8)] border border-white/[0.06] overflow-hidden min-w-[400px]">
              <div className="px-8 py-6">
                <div className="flex flex-col gap-4">
                  {aiPages.map((page, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="group cursor-pointer"
                      onClick={() => handleAIClick(page.title)}
                    >
                      <div className="relative p-4 rounded-[6px] hover:bg-white/5 transition-colors duration-200">
                        <h3 className="font-['Montserrat:SemiBold',sans-serif] text-white text-[15px] leading-[1.5] mb-1 group-hover:text-white/80 transition-colors duration-200">
                          {page.title}
                        </h3>
                        <p className="font-['Montserrat:Regular',sans-serif] text-white/40 text-[13px] leading-[1.4] group-hover:text-white/50 transition-colors duration-200">
                          {page.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ServicesDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  
  const handleServiceClick = (serviceTitle: string) => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(getServiceUrl(serviceTitle));
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Optimized Backdrop - reduced blur for performance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 z-[999] cursor-pointer"
            style={{ willChange: "opacity" }}
            onClick={onClose}
          />
          
          {/* Dropdown Menu - Accenture minimalist style */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[92px] -translate-x-1/2 z-[1000] w-[95vw] max-w-[1280px]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="bg-[#1a1a1a] rounded-[8px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.8)] border border-white/[0.06] overflow-hidden">
              {/* Services Grid - Accenture minimal style */}
              <div className="px-12 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="group cursor-pointer"
                      onClick={() => handleServiceClick(service.title)}
                    >
                      {/* Simple text link with hover effect */}
                      <div className="relative">
                        <h3 className="font-['Montserrat:SemiBold',sans-serif] text-white text-[15px] leading-[1.5] mb-1 group-hover:text-white/80 transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="font-['Montserrat:Regular',sans-serif] text-white/40 text-[13px] leading-[1.4] group-hover:text-white/50 transition-colors duration-200">
                          {service.description}
                        </p>
                        
                        {/* Subtle underline on hover */}
                        <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Text3() {
  return (
    <TextBackgroundImage>
      <div className="absolute left-0 top-px flex items-center gap-1">
        <p className="font-['Montserrat:Bold',sans-serif] leading-[19.5px] not-italic text-[13px] text-nowrap text-white tracking-[-0.0762px]">Services</p>
        <ChevronDown className="w-3 h-3 text-white/80" />
      </div>
    </TextBackgroundImage>
  );
}

function Link5({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="h-[31.5px] relative rounded-[8px] cursor-pointer hover:bg-white/10 transition-all duration-200 active:scale-95 px-[12px] flex items-center shrink-0" 
      data-name="Link"
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        <p className="font-['Montserrat:Bold',sans-serif] leading-[19.5px] not-italic text-[13px] text-nowrap text-white tracking-[-0.0762px]">Services</p>
        <ChevronDown className="w-3 h-3 text-white/80" />
      </div>
    </div>
  );
}

function Group5({ onWhatWeCraftClick, onAIClick, onWhatDefinesUsClick, onWhoWeAreClick }: { onWhatWeCraftClick: () => void; onAIClick: () => void; onWhatDefinesUsClick: () => void; onWhoWeAreClick: () => void }) {
  const navigate = useNavigate();
  
  const handleCaseStudiesClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate('/case-studies');
  };
  
  return (
    <div className="flex items-center gap-[32px] relative shrink-0">
      <Link5 onClick={onWhatWeCraftClick} />
      <LinkBackgroundImageAndText text="AI" onClick={onAIClick} hasDropdown />
      <LinkBackgroundImageAndText text="Products" onClick={onWhatDefinesUsClick} hasDropdown />
      <LinkBackgroundImageAndText text="Case Studies" onClick={handleCaseStudiesClick} />
      <LinkBackgroundImageAndText text="Company" onClick={onWhoWeAreClick} hasDropdown />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pd8c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button4({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute content-stretch flex items-center justify-center left-[43.19px] rounded-[10px] size-[32px] top-[0.75px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Button">
      <Icon8 />
    </div>
  );
}

function Container52() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] h-[16px] left-[84px] top-[8.75px] w-px" data-name="Container" />;
}

function Text4() {
  return (
    <TextBackgroundImage>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[42.5px] not-italic text-[13px] text-center text-nowrap text-white top-px tracking-[-0.0762px] translate-x-[-50%]">Contact Us</p>
    </TextBackgroundImage>
  );
}

function Button5({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[33.5px] items-center left-[97px] px-[13px] py-px rounded-[24px] top-0 w-[110.234px] cursor-pointer hover:bg-[rgba(0,0,0,0.7)] transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Text4 />
    </div>
  );
}

function Container53({ onGetStartedClick, onSearchClick }: { onGetStartedClick?: () => void; onSearchClick?: () => void }) {
  return (
    <div className="[grid-area:1_/_1] h-[33.5px] ml-0 mt-0 relative w-[207.234px]" data-name="Container">
      <Button4 onClick={onSearchClick} />
      <Container52 />
      <Button5 onClick={onGetStartedClick} />
    </div>
  );
}

function Group4({ onGetStartedClick, onSearchClick }: { onGetStartedClick?: () => void; onSearchClick?: () => void }) {
  return (
    <div className="flex items-center gap-3 relative shrink-0">
      <Container53 onGetStartedClick={onGetStartedClick} onSearchClick={onSearchClick} />
    </div>
  );
}

function Frame1({ onWhatWeCraftClick, onAIClick, onWhatDefinesUsClick, onWhoWeAreClick, onGetStartedClick, onSearchClick }: { onWhatWeCraftClick: () => void; onAIClick: () => void; onWhatDefinesUsClick: () => void; onWhoWeAreClick: () => void; onGetStartedClick?: () => void; onSearchClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[177px] items-center leading-[0] relative shrink-0">
      <Group5 onWhatWeCraftClick={onWhatWeCraftClick} onAIClick={onAIClick} onWhatDefinesUsClick={onWhatDefinesUsClick} onWhoWeAreClick={onWhoWeAreClick} />
      <Group4 onGetStartedClick={onGetStartedClick} onSearchClick={onSearchClick} />
    </div>
  );
}

function Frame({ onWhatWeCraftClick, onAIClick, onWhatDefinesUsClick, onWhoWeAreClick, onLogoClick, onGetStartedClick, onSearchClick }: { onWhatWeCraftClick: () => void; onAIClick: () => void; onWhatDefinesUsClick: () => void; onWhoWeAreClick: () => void; onLogoClick?: () => void; onGetStartedClick?: () => void; onSearchClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[260px] items-center relative shrink-0">
      <Group3 onLogoClick={onLogoClick} />
      <Frame1 onWhatWeCraftClick={onWhatWeCraftClick} onAIClick={onAIClick} onWhatDefinesUsClick={onWhatDefinesUsClick} onWhoWeAreClick={onWhoWeAreClick} onGetStartedClick={onGetStartedClick} onSearchClick={onSearchClick} />
    </div>
  );
}

function Nav({ onWhoWeAreItemClick, onLogoClick, onGetStartedClick, onSearchClick }: { onWhoWeAreItemClick?: (item: string) => void; onLogoClick?: () => void; onGetStartedClick?: () => void; onSearchClick?: () => void }) {
  const navigate = useNavigate();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAIDropdownOpen, setIsAIDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isWhoWeAreDropdownOpen, setIsWhoWeAreDropdownOpen] = useState(false);

  const handleToggleServicesDropdown = () => {
    const newState = !isServicesDropdownOpen;
    setIsServicesDropdownOpen(newState);
    if (newState) {
      setIsAIDropdownOpen(false);
      setIsProductsDropdownOpen(false);
      setIsWhoWeAreDropdownOpen(false);
    }
  };

  const handleToggleAIDropdown = () => {
    const newState = !isAIDropdownOpen;
    setIsAIDropdownOpen(newState);
    if (newState) {
      setIsServicesDropdownOpen(false);
      setIsProductsDropdownOpen(false);
      setIsWhoWeAreDropdownOpen(false);
    }
  };

  const handleToggleProductsDropdown = () => {
    const newState = !isProductsDropdownOpen;
    setIsProductsDropdownOpen(newState);
    if (newState) {
      setIsServicesDropdownOpen(false);
      setIsAIDropdownOpen(false);
      setIsWhoWeAreDropdownOpen(false);
    }
  };

  const handleToggleWhoWeAreDropdown = () => {
    const newState = !isWhoWeAreDropdownOpen;
    setIsWhoWeAreDropdownOpen(newState);
    if (newState) {
      setIsServicesDropdownOpen(false);
      setIsAIDropdownOpen(false);
      setIsProductsDropdownOpen(false);
    }
  };

  const handleCloseServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  };

  const handleCloseAIDropdown = () => {
    setIsAIDropdownOpen(false);
  };

  const handleCloseProductsDropdown = () => {
    setIsProductsDropdownOpen(false);
  };

  const handleCloseWhoWeAreDropdown = () => {
    setIsWhoWeAreDropdownOpen(false);
  };

  return (
    <>
      <div className="fixed backdrop-blur-[25px] backdrop-filter bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col h-[92px] items-start justify-center left-0 right-0 overflow-visible px-[80px] py-[12px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.05),0px_8px_72px_-5px_rgba(0,0,0,0.1)] top-0 z-[998]" data-name="Nav">
        <Frame onWhatWeCraftClick={handleToggleServicesDropdown} onAIClick={handleToggleAIDropdown} onWhatDefinesUsClick={handleToggleProductsDropdown} onWhoWeAreClick={handleToggleWhoWeAreDropdown} onLogoClick={onLogoClick} onGetStartedClick={onGetStartedClick} onSearchClick={onSearchClick} />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_20px_2px_rgba(53,53,53,0.05)]" />
      </div>
      <ServicesDropdown 
        isOpen={isServicesDropdownOpen} 
        onClose={handleCloseServicesDropdown}
      />
      <AIDropdown 
        isOpen={isAIDropdownOpen} 
        onClose={handleCloseAIDropdown}
      />
      <ProductsDropdown 
        isOpen={isProductsDropdownOpen} 
        onClose={handleCloseProductsDropdown}
      />
      <WhoWeAreDropdown 
        isOpen={isWhoWeAreDropdownOpen} 
        onClose={handleCloseWhoWeAreDropdown}
      />
    </>
  );
}

export default function Desktop2({ onSearchClick }: { onSearchClick?: () => void }) {
  // Performance optimization hooks
  useScrollPerformance();
  useReduceMotionOnMobile();

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showCloudPractice, setShowCloudPractice] = useState(false);
  const [showDigitalEngineering, setShowDigitalEngineering] = useState(false);
  const [showBigData, setShowBigData] = useState(false);
  const [showAppModernization, setShowAppModernization] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showDatabaseManagement, setShowDatabaseManagement] = useState(false);
  const [showERPTesting, setShowERPTesting] = useState(false);
  const [showAIPage, setShowAIPage] = useState(false);
  const [showBFSIAgents, setShowBFSIAgents] = useState(false);
  const [showBrandManagementAgents, setShowBrandManagementAgents] = useState(false);
  const [showAgentStudio, setShowAgentStudio] = useState(false);
  const [showAtlasAPIManager, setShowAtlasAPIManager] = useState(false);
  const [showOttohmVideo, setShowOttohmVideo] = useState(false);
  const [showITSMTicketing, setShowITSMTicketing] = useState(false);
  const [showAIOps, setShowAIOps] = useState(false);
  const [showSmartContracts, setShowSmartContracts] = useState(false);
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [showOurTeam, setShowOurTeam] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showPartners, setShowPartners] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  // Define navigation handlers first
  const handleServiceClick = (serviceTitle: string) => {
    if (serviceTitle === "Cloud Practice") {
      // Close all other pages and open immediately for smooth transition
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowCloudPractice(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (serviceTitle === "Digital & Product Engineering") {
      // Close all other pages and open immediately for smooth transition
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowCloudPractice(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowDigitalEngineering(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (serviceTitle === "Big Data") {
      // Close all other pages and open immediately for smooth transition
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowBigData(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (serviceTitle === "App Modernization") {
      // Close all other pages and open immediately for smooth transition
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAppModernization(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (serviceTitle === "Security") {
      // Close all other pages and open immediately for smooth transition
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowSecurity(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (serviceTitle === "Database Management") {
      // Close all other pages and open immediately for smooth transition
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowERPTesting(false);
      setShowDatabaseManagement(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (serviceTitle === "ERP & Testing") {
      // Close all other pages and open immediately for smooth transition
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleCloseCloudPractice = () => {
    setShowCloudPractice(false);
  };

  const handleCloseDigitalEngineering = () => {
    setShowDigitalEngineering(false);
  };

  const handleCloseBigData = () => {
    setShowBigData(false);
  };

  const handleCloseAppModernization = () => {
    setShowAppModernization(false);
  };

  const handleCloseSecurity = () => {
    setShowSecurity(false);
  };

  const handleCloseDatabaseManagement = () => {
    setShowDatabaseManagement(false);
  };

  const handleCloseERPTesting = () => {
    setShowERPTesting(false);
  };

  const handleAIClick = (aiPageTitle: string) => {
    // Close all other pages first
    setShowCloudPractice(false);
    setShowDigitalEngineering(false);
    setShowBigData(false);
    setShowAppModernization(false);
    setShowSecurity(false);
    setShowDatabaseManagement(false);
    setShowERPTesting(false);
    setShowAgentStudio(false);
    setShowAtlasAPIManager(false);
    setShowOttohmVideo(false);
    setShowITSMTicketing(false);
    setShowAIOps(false);
    setShowSmartContracts(false);
    setShowCaseStudies(false);
    setShowOurTeam(false);
    setShowAboutUs(false);
    setShowPartners(false);
    setShowCareers(false);
    setShowNews(false);
    setShowAIPage(false);
    setShowBFSIAgents(false);
    setShowBrandManagementAgents(false);
    
    // Open the selected AI page
    if (aiPageTitle === "BFSI Agents") {
      setShowBFSIAgents(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (aiPageTitle === "Brand Management Agents") {
      setShowBrandManagementAgents(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleCloseBFSIAgents = () => {
    setShowBFSIAgents(false);
  };

  const handleCloseBrandManagementAgents = () => {
    setShowBrandManagementAgents(false);
  };

  const handleProductClick = (productTitle: string) => {
    if (productTitle === "Agent Studio") {
      // Close all other pages and open immediately for smooth transition
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowAgentStudio(true);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (productTitle === "Atlas API Manager") {
      // Close all other pages and open immediately for smooth transition
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(true);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (productTitle === "Ottohm Video") {
      // Close all other pages and open immediately for smooth transition
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(true);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (productTitle === "ITSM Ticketing Tool" || productTitle === "ITSM Ticketing") {
      // Close all other pages and open immediately for smooth transition
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(true);
      setShowAIOps(false);
      setShowSmartContracts(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (productTitle === "AI Ops Platform") {
      // Close all other pages and open immediately for smooth transition
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(true);
      setShowSmartContracts(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (productTitle === "Smart Contracts") {
      // Close all other pages and open immediately for smooth transition
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleCloseAgentStudio = () => {
    setShowAgentStudio(false);
  };

  const handleCloseAtlasAPIManager = () => {
    setShowAtlasAPIManager(false);
  };

  const handleCloseOttohmVideo = () => {
    setShowOttohmVideo(false);
  };

  const handleCloseITSMTicketing = () => {
    setShowITSMTicketing(false);
  };

  const handleCloseAIOps = () => {
    setShowAIOps(false);
  };

  const handleCloseSmartContracts = () => {
    setShowSmartContracts(false);
  };

  const handleGrowWithUsClick = () => {
    // Close all other pages and open immediately for smooth transition
    setShowCloudPractice(false);
    setShowDigitalEngineering(false);
    setShowBigData(false);
    setShowAppModernization(false);
    setShowSecurity(false);
    setShowDatabaseManagement(false);
    setShowERPTesting(false);
    setShowAIPage(false);
    setShowBFSIAgents(false);
    setShowBrandManagementAgents(false);
    setShowAgentStudio(false);
    setShowAtlasAPIManager(false);
    setShowOttohmVideo(false);
    setShowITSMTicketing(false);
    setShowAIOps(false);
    setShowSmartContracts(false);
    setShowOurTeam(false);
    setShowAboutUs(false);
    setShowPartners(false);
    setShowCareers(false);
    setShowNews(false);
    setShowCaseStudies(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleCloseCaseStudies = () => {
    setShowCaseStudies(false);
  };

  const handleWhoWeAreItemClick = (item: string) => {
    if (item === "Our Team") {
      // Close all other pages and open immediately for smooth transition
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowOurTeam(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (item === "About Us") {
      // Close all other pages and open About Us
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(false);
      setShowAboutUs(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (item === "Partners") {
      // Close all other pages and open Partners
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowCareers(false);
      setShowNews(false);
      setShowPartners(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (item === "Careers") {
      // Close all other pages and open Careers
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(true);
      setShowNews(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (item === "News") {
      // Close all other pages and open News
      setShowCloudPractice(false);
      setShowDigitalEngineering(false);
      setShowBigData(false);
      setShowAppModernization(false);
      setShowSecurity(false);
      setShowDatabaseManagement(false);
      setShowERPTesting(false);
      setShowAIPage(false);
      setShowBFSIAgents(false);
      setShowBrandManagementAgents(false);
      setShowAgentStudio(false);
      setShowAtlasAPIManager(false);
      setShowOttohmVideo(false);
      setShowITSMTicketing(false);
      setShowAIOps(false);
      setShowSmartContracts(false);
      setShowCaseStudies(false);
      setShowOurTeam(false);
      setShowAboutUs(false);
      setShowPartners(false);
      setShowCareers(false);
      setShowNews(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    // Add handlers for other items later
  };

  const handleCloseOurTeam = () => {
    setShowOurTeam(false);
  };

  const handleCloseAboutUs = () => {
    setShowAboutUs(false);
  };

  const handleClosePartners = () => {
    setShowPartners(false);
  };

  const handleCloseCareers = () => {
    setShowCareers(false);
  };

  const handleCloseNews = () => {
    setShowNews(false);
  };

  const handleLogoClick = () => {
    // Close all pages and return to home immediately for smooth transition
    setShowCloudPractice(false);
    setShowDigitalEngineering(false);
    setShowBigData(false);
    setShowAppModernization(false);
    setShowSecurity(false);
    setShowDatabaseManagement(false);
    setShowERPTesting(false);
    setShowAIPage(false);
    setShowBFSIAgents(false);
    setShowBrandManagementAgents(false);
    setShowAgentStudio(false);
    setShowAtlasAPIManager(false);
    setShowOttohmVideo(false);
    setShowITSMTicketing(false);
    setShowAIOps(false);
    setShowSmartContracts(false);
    setShowCaseStudies(false);
    setShowOurTeam(false);
    setShowAboutUs(false);
    setShowPartners(false);
    setShowCareers(false);
    setShowNews(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Event listeners for footer navigation
  useEffect(() => {
    const handleNavigateService = (e: any) => {
      handleServiceClick(e.detail);
    };
    
    const handleNavigateProduct = (e: any) => {
      handleProductClick(e.detail);
    };
    
    const handleNavigateWhoWeAre = (e: any) => {
      handleWhoWeAreItemClick(e.detail);
    };
    
    const handleNavigateHome = () => {
      handleLogoClick();
    };
    
    const handleNavigateAI = (e: any) => {
      handleAIClick(e.detail);
    };
    
    const handleNavigateCaseStudies = () => {
      handleGrowWithUsClick();
    };

    window.addEventListener('navigate-service', handleNavigateService);
    window.addEventListener('navigate-product', handleNavigateProduct);
    window.addEventListener('navigate-whoweare', handleNavigateWhoWeAre);
    window.addEventListener('navigate-home', handleNavigateHome);
    window.addEventListener('navigate-ai', handleNavigateAI);
    window.addEventListener('navigate-casestudies', handleNavigateCaseStudies);

    console.log('[Desktop72] Navigation listeners registered');

    return () => {
      window.removeEventListener('navigate-service', handleNavigateService);
      window.removeEventListener('navigate-product', handleNavigateProduct);
      window.removeEventListener('navigate-whoweare', handleNavigateWhoWeAre);
      window.removeEventListener('navigate-home', handleNavigateHome);
      window.removeEventListener('navigate-ai', handleNavigateAI);
      window.removeEventListener('navigate-casestudies', handleNavigateCaseStudies);
    };
  }, [handleServiceClick, handleProductClick, handleWhoWeAreItemClick, handleLogoClick, handleAIClick, handleGrowWithUsClick]);

  // Determine current page and breadcrumbs for mobile nav
  const getCurrentPageInfo = () => {
    if (showCloudPractice) return { page: 'Cloud Practice', breadcrumbs: [{ label: 'Services' }, { label: 'Cloud Practice' }] };
    if (showDigitalEngineering) return { page: 'Digital & Product Engineering', breadcrumbs: [{ label: 'Services' }, { label: 'Digital & Product Engineering' }] };
    if (showBigData) return { page: 'Big Data', breadcrumbs: [{ label: 'Services' }, { label: 'Big Data' }] };
    if (showAppModernization) return { page: 'App Modernization', breadcrumbs: [{ label: 'Services' }, { label: 'App Modernization' }] };
    if (showSecurity) return { page: 'Security', breadcrumbs: [{ label: 'Services' }, { label: 'Security' }] };
    if (showDatabaseManagement) return { page: 'Database Management', breadcrumbs: [{ label: 'Services' }, { label: 'Database Management' }] };
    if (showERPTesting) return { page: 'ERP & Testing', breadcrumbs: [{ label: 'Services' }, { label: 'ERP & Testing' }] };
    if (showAIPage) return { page: 'AI', breadcrumbs: [{ label: 'AI' }] };
    if (showAgentStudio) return { page: 'Agent Studio', breadcrumbs: [{ label: 'Products' }, { label: 'Agent Studio' }] };
    if (showAtlasAPIManager) return { page: 'Atlas API Manager', breadcrumbs: [{ label: 'Products' }, { label: 'Atlas API Manager' }] };
    if (showOttohmVideo) return { page: 'Ottohm Video', breadcrumbs: [{ label: 'Products' }, { label: 'Ottohm Video' }] };
    if (showCaseStudies) return { page: 'Case Studies', breadcrumbs: [{ label: 'Case Studies' }] };
    if (showOurTeam) return { page: 'Our Team', breadcrumbs: [{ label: 'Company' }, { label: 'Our Team' }] };
    if (showAboutUs) return { page: 'About Us', breadcrumbs: [{ label: 'Company' }, { label: 'About Us' }] };
    if (showPartners) return { page: 'Partners', breadcrumbs: [{ label: 'Company' }, { label: 'Partners' }] };
    if (showCareers) return { page: 'Careers', breadcrumbs: [{ label: 'Company' }, { label: 'Careers' }] };
    if (showNews) return { page: 'News & Updates', breadcrumbs: [{ label: 'Company' }, { label: 'News & Updates' }] };
    return { page: 'Home', breadcrumbs: [] };
  };

  const { page, breadcrumbs } = getCurrentPageInfo();

  return (
    <div 
      className="relative w-full h-auto overflow-x-hidden transition-colors duration-300" 
      style={{ backgroundColor: 'var(--theme-bg-primary)' }}
      data-name="Desktop - 72"
    >
      {/* Mobile Navigation - Only visible on mobile */}
      <MobileNav 
        currentPage={page}
        breadcrumbs={breadcrumbs}
        onLogoClick={handleLogoClick}
        onServiceClick={handleServiceClick}
        onAIClick={handleAIClick}
        onProductClick={handleProductClick}
        onGrowWithUsClick={handleGrowWithUsClick}
        onWhoWeAreItemClick={handleWhoWeAreItemClick}
        onGetStartedClick={() => setShowGetStarted(true)}
      />

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:block relative z-[1200] w-full">
        <Nav onServiceClick={handleServiceClick} onAIClick={handleAIClick} onProductClick={handleProductClick} onGrowWithUsClick={handleGrowWithUsClick} onWhoWeAreItemClick={handleWhoWeAreItemClick} onLogoClick={handleLogoClick} onGetStartedClick={() => setShowGetStarted(true)} onSearchClick={onSearchClick} />
      </div>
      
      {/* Main Content */}
      <div className="relative w-full h-auto">
        <Component19 />
        <Container4 />
        <Frame10 videoModalOpen={() => setIsVideoOpen(true)} onCareersClick={() => handleWhoWeAreItemClick("Careers")} onProductClick={handleProductClick} onCaseStudiesClick={handleGrowWithUsClick} />
      </div>
      
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=hsUEiFOh1UA&t=7s"
      />
      {showCloudPractice && (
        <CloudPracticePage 
          onClose={handleCloseCloudPractice}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showDigitalEngineering && (
        <DigitalEngineeringPage 
          onClose={handleCloseDigitalEngineering}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showBigData && (
        <BigDataPage 
          onClose={handleCloseBigData}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showAppModernization && (
        <AppModernizationPage 
          onClose={handleCloseAppModernization}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showSecurity && (
        <SecurityPage 
          onClose={handleCloseSecurity}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showDatabaseManagement && (
        <DatabaseManagementPage 
          onClose={handleCloseDatabaseManagement}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showERPTesting && (
        <ERPTestingPage 
          onClose={handleCloseERPTesting}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showBFSIAgents && (
        <BFSIAgentsPage 
          onClose={handleCloseBFSIAgents}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showBrandManagementAgents && (
        <BrandManagementPage 
          onClose={handleCloseBrandManagementAgents}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showAIPage && (
        <AIPage 
          onClose={handleCloseAIPage}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showAgentStudio && (
        <AgentStudioPage 
          onClose={handleCloseAgentStudio}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showAtlasAPIManager && (
        <AtlasAPIManagerPage 
          onClose={handleCloseAtlasAPIManager}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showOttohmVideo && (
        <OttohmVideoPage 
          onClose={handleCloseOttohmVideo}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showITSMTicketing && (
        <ITSMTicketingPage 
          onClose={handleCloseITSMTicketing}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showAIOps && (
        <AIOpsPage 
          onClose={handleCloseAIOps}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showSmartContracts && (
        <SmartContractsPage 
          onClose={handleCloseSmartContracts}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showCaseStudies && (
        <CaseStudiesPage 
          onClose={handleCloseCaseStudies}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showOurTeam && (
        <OurTeamPage 
          onClose={handleCloseOurTeam}
          onCareersClick={() => {
            handleCloseOurTeam();
            handleWhoWeAreItemClick("Careers");
          }}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showAboutUs && (
        <AboutUsPage 
          onClose={handleCloseAboutUs}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
          onCareersClick={() => {
            handleCloseAboutUs();
            handleWhoWeAreItemClick("Careers");
          }}
        />
      )}
      {showPartners && (
        <PartnersPage 
          onClose={handleClosePartners}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showCareers && (
        <CareersPage 
          onClose={handleCloseCareers}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      {showNews && (
        <NewsUpdatesPage 
          onClose={handleCloseNews}
          onServiceClick={handleServiceClick}
          onAIClick={handleAIClick}
          onProductClick={handleProductClick}
          onGrowWithUsClick={handleGrowWithUsClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
          onGetStartedClick={() => setShowGetStarted(true)}
        />
      )}
      
      <GetStartedModal 
        isOpen={showGetStarted}
        onClose={() => setShowGetStarted(false)}
      />
    </div>
  );
}

// Export Nav for use in other pages
export { Nav };