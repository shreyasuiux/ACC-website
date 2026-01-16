import React, { useState, useRef } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
} from "motion/react";
import {
  Heart,
  Zap,
  User,
  Shield,
  X,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";
import {
  nileshImage,
  roginImage,
  shubhoImage,
  ghanshyamImage,
  mithunImage,
  reemaImage,
  priyankaImage,
  sachinImage,
} from "../../assets/images";

// ACC Leadership data
const leaders = [
  {
    id: 1,
    name: "Nilesh Satpute",
    role: "CEO and Cloud Delivery",
    image: nileshImage,
    story:
      "Founder of ACC, Nilesh transformed a small garage vision into a global technology company. Through resilience, innovation, and people-first leadership, he built ACC into a 450+ member organization serving some of the largest BFSI and enterprise clients. His journey reflects empathy toward people, humility in success, and an unwavering commitment to hard work.",
    expertise: ["Founder & CEO", "Cloud Strategy & Leadership"],
    yearsAtACC: 9,
    linkedin: "nsatpute",
    email: "nilesh@acc.com",
  },
  {
    id: 2,
    name: "Rogin Rappai",
    role: "Head of Sales & Marketing",
    image: roginImage,
    story:
      "With five years at ACC and prior experience at Oracle, Rogin built the sales and marketing function from the ground up. Known for his honesty and relentless pursuit of client success, he has led ACC into marquee BFSI and enterprise accounts. His leadership blends strategic thinking with humility and team spirit.",
    expertise: [
      "Sales & Marketing Strategy",
      "Client Success",
      "Enterprise Accounts",
    ],
    yearsAtACC: 5,
    linkedin: "rrappai",
    email: "rogin@acc.com",
  },
  {
    id: 3,
    name: "Shubho Pramanik",
    role: "Head of Application & Product Delivery",
    image: shubhoImage,
    story:
      "An MCA graduate who joined ACC as a fresher 11 years ago, Shubho embodies the never-give-up spirit. From his first project to leading large-scale banking transformations, he has shown that dedication, honesty, and empathy can turn fresh talent into a cornerstone of product and application delivery.",
    expertise: [
      "Application & Product Delivery",
      "Banking Transformations",
      "Team Leadership",
    ],
    yearsAtACC: 11,
    linkedin: "spramanik",
    email: "shubho@acc.com",
  },
  {
    id: 4,
    name: "Ghanshyam Pawar",
    role: "Head of Operations & Chief of Staff",
    image: ghanshyamImage,
    story:
      "Joining ACC after his MBA, Ghanshyam quickly rose to lead operations, alliances, and RFPs. In just four years, he has established operational excellence across the company. His humility and focus on teamwork have made him an empathetic leader and a trusted Chief of Staff.",
    expertise: ["Operations & Strategic Planning"],
    yearsAtACC: 4,
    linkedin: "gpawar",
    email: "ghanshyam@acc.com",
  },
  {
    id: 5,
    name: "Mithun Kadam",
    role: "Head of Data & AI Delivery",
    image: mithunImage,
    story:
      "An MCA graduate who also joined ACC as a fresher 11 years ago, Mithun has been central to building ACC's data and AI practice. His hard work and never-give-up attitude helped the company pioneer intelligent automation projects. Known for being humble and approachable, he inspires his teams to push boundaries.",
    expertise: [
      "Data & AI Solutions",
      "Intelligent Automation",
      "Team Inspiration",
    ],
    yearsAtACC: 11,
    linkedin: "mkadam",
    email: "mithun@acc.com",
  },
  {
    id: 6,
    name: "Reema Masson",
    role: "Head of Human Resources",
    image: reemaImage,
    story:
      "Reema re-entered the corporate world after a five-year career break, starting as a hiring executive. With resilience and empathy, she built a strong HR function that reflects ACC's people-first values. Her journey is a testament to hard work, humility, and the belief that every individual deserves opportunity and respect.",
    expertise: ["HR Leadership", "People & Culture"],
    yearsAtACC: 6,
    linkedin: "rmasson",
    email: "reema@acc.com",
  },
  {
    id: 7,
    name: "Priyanka Hegde",
    role: "Head of Project Management Office (PMO)",
    image: priyankaImage,
    story:
      "A Collegey topper with a MSC in Bioinformatics, Priyanka joined ACC as a fresher. Through determination and empathy, she built the PMO practice from scratch, ensuring discipline, governance, and client trust in every project. Her humility and hard work define the culture of ACC's delivery excellence.",
    expertise: [
      "PMO Leadership",
      "Project Management & Governance",
    ],
    yearsAtACC: 7,
    linkedin: "phegde",
    email: "priyanka@acc.com",
  },
  {
    id: 8,
    name: "Sachin Gunjal",
    role: "Head of Finance",
    image: sachinImage,
    story:
      "A Chartered Accountant, Sachin serves as ACC's On-Demand CFO. He is agile, frugal, and passionate about simplifying finance. By creating a lean and effective finance function, he ensures transparency and financial discipline while supporting rapid growth. Known for his humility and straightforward approach, Sachin exemplifies hard work and honesty, making finance a true enabler of ACC's journey.",
    expertise: [
      "Chartered Accountant",
      "Financial Strategy & Operations",
    ],
    yearsAtACC: 5,
    linkedin: "sgunjal",
    email: "sachin@acc.com",
  },
];

const values = [
  {
    title: "Empathy",
    description:
      "We care with compassion, listening deeply, understanding, and showing kindness to build meaningful connections with our team and clients.",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1758518729912-bf3a84c400e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGdyb3d0aHxlbnwxfHx8fDE3NjgyMTQzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Hard Work",
    description:
      "Success comes from dedication, persistence, going the extra mile, and putting in continuous effort to achieve excellence.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1758520145178-29eafeda9908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBsYXRlJTIwbmlnaHR8ZW58MXx8fHwxNjY4MjE0MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Humility",
    description:
      "We stay grounded, learn constantly, respect everyone, and celebrate collective wins, knowing success is a team effort.",
    icon: User,
    image:
      "https://images.unsplash.com/photo-1764726354660-5e64ffbffe79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNjY4MjAwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Integrity",
    description:
      "We uphold transparency, honesty, and trust, making ethical decisions and staying true to our values in every situation.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgxOTY0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

// Section 1: Hero
function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950/20 via-black to-black">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[48px] md:text-[72px] leading-[1.1] text-white mb-6">
            ACC Leadership Team
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-['Montserrat:Bold',sans-serif] text-[20px] text-purple-300 mb-4 italic">
            Real leaders who built from scratch
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-['Montserrat:Regular',sans-serif] text-[15px] text-white/70 max-w-[1100px] mx-auto leading-[1.7]">
            At ACC, leadership is built on real values — it's
            about leading with empathy, perseverance, and
            integrity. Our team members are more than just
            leaders; they are builders, doers, and visionaries
            who believe in working hard and staying true to the
            mission that has shaped ACC into a trusted partner
            for enterprise worldwide.
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      
    </section>
  );
}

// Section 2: Leadership Values
function ValuesSection() {
  return (
    <section className="relative py-24 bg-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[42px] text-white mb-4">
            Our Values
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            The principles that guide how we build, lead, and
            serve
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const [isHovered, setIsHovered] =
              React.useState(false);

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] h-[400px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={value.image}
                    alt={value.title}
                    className="absolute h-full w-full object-cover origin-bottom-right"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    animate={
                      isHovered
                        ? { scale: 1.15, filter: "blur(4px)" }
                        : { scale: 1, filter: "blur(0px)" }
                    }
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Purple overlay */}
                <div className="absolute inset-0 bg-purple-900 opacity-30" />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(-34.0744deg, rgba(0, 0, 0, 0) 19.705%, rgba(0, 0, 0, 0.6) 67.225%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Top: Icon badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex p-4 rounded-[16px] bg-gradient-to-br from-purple-500 to-blue-500 self-start"
                  >
                    <value.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </motion.div>

                  {/* Bottom content */}
                  <div>
                    {/* Title */}
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white mb-4 leading-[1.2]">
                      {value.title}
                    </h3>

                    {/* Description - slides in on hover */}
                    <motion.div
                      initial={{ x: 320, opacity: 0 }}
                      animate={
                        isHovered
                          ? { x: 0, opacity: 1 }
                          : { x: 320, opacity: 0 }
                      }
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80 leading-[1.6]">
                        {value.description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Subtle border */}
                <div className="absolute inset-0 rounded-[24px] border border-white/[0.1] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Leader Profile Modal
function LeaderModal({
  leader,
  onClose,
}: {
  leader: (typeof leaders)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.12] rounded-[32px] p-8 md:p-12 overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="font-['Montserrat:Bold',sans-serif] text-[32px] text-white mb-2">
              {leader.name}
            </h3>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-purple-300 mb-4">
              {leader.role}
            </p>

            <p className="font-['Montserrat:Regular',sans-serif] text-[15px] text-white/80 leading-[1.7] mb-6">
              {leader.story}
            </p>

            {/* Expertise */}
            <div className="mb-6">
              <p className="font-['Montserrat:Bold',sans-serif] text-[12px] text-white/50 uppercase tracking-wider mb-3">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {leader.expertise.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 font-['Montserrat:Regular',sans-serif] text-[12px] text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-3">
              <a
                href={`https://www.linkedin.com/in/${leader.linkedin}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/[0.12] hover:border-purple-500/50 transition-all"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href={`mailto:${leader.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/[0.12] hover:border-purple-500/50 transition-all"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Section 3: Meet Our Leaders
function LeadersSection() {
  const [selectedLeader, setSelectedLeader] = useState<
    (typeof leaders)[0] | null
  >(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-purple-950/5 to-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[42px] text-white mb-4">
            Meet Our Leaders
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            The people behind ACC's vision and values
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: (index % 2) * 0.1,
              }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedLeader(leader)}
              className="group relative cursor-pointer"
            >
              <div className="relative p-8 rounded-[24px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex gap-6 items-start">
                  {/* Portrait */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/[0.12] group-hover:border-purple-500/50 transition-all duration-500"
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-purple-400 mb-4">
                      {leader.role}
                    </p>

                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6] mb-4 line-clamp-3">
                      {leader.story}
                    </p>

                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {leader.expertise
                        .slice(0, 2)
                        .map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] font-['Montserrat:Regular',sans-serif] text-[11px] text-white/60"
                          >
                            {skill}
                          </span>
                        ))}
                      {leader.expertise.length > 2 && (
                        <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] font-['Montserrat:Regular',sans-serif] text-[11px] text-white/60">
                          +{leader.expertise.length - 2}
                        </span>
                      )}
                    </div>

                    {/* View profile hint */}
                    <div className="flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-['Montserrat:Bold',sans-serif] text-[12px]">
                        View Full Profile
                      </span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Shadow depth on hover */}
                <motion.div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(168,85,247,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leader Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <LeaderModal
            leader={selectedLeader}
            onClose={() => setSelectedLeader(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Section 4: Leadership Journey Timeline
function JourneySection() {
  const milestones = [
    {
      year: 2014,
      title: "Founded ACC",
      description: "3 people, 1 garage, infinite ambition",
    },
    {
      year: 2018,
      title: "First Enterprise Client",
      description: "Trust earned through delivery",
    },
    {
      year: 2020,
      title: "Team of 100",
      description: "Culture built on values, not perks",
    },
    {
      year: 2022,
      title: "AI Practice Launch",
      description: "Leading the transformation wave",
    },
    {
      year: 2024,
      title: "500+ Team Members",
      description: "Scaling with empathy and excellence",
    },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[42px] text-white mb-4">
            Our Journey
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            Building something meaningful takes time, trust, and
            perseverance
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute top-0 left-0 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-8 md:pl-0`}
                >
                  <div className="inline-block p-6 rounded-[20px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]">
                    <p className="font-['Montserrat:Bold',sans-serif] text-[24px] text-purple-400 mb-2">
                      {milestone.year}
                    </p>
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Pulse dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 z-10"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-500/20 z-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 5: Join Our Journey CTA
function CTASection({ onCareersClick, onGetStartedClick }: { onCareersClick?: () => void; onGetStartedClick?: () => void }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden mb-20">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      {/* Purple-black gradient band */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0a0a0f] to-[#0a0a0f]" />

      {/* Animated glow waves */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Montserrat',sans-serif] font-bold text-[44px] md:text-[56px] leading-[1.15] text-[#f0f0f2] mb-6">
            Be part of a team built on empathy, hard work,
            humility, and honesty
          </h2>
          <p className="font-['Montserrat',sans-serif] text-[17px] text-gray-400 mb-12 max-w-[640px] mx-auto leading-[1.7]">
            We're always looking for passionate people who share
            our values
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={onCareersClick}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Careers
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              onClick={onGetStartedClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-4 md:py-5 bg-white/5 border border-white/20 text-gray-300 rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Component
export function OurTeamPage({
  onClose,
  onCareersClick,
  onGetStartedClick,
}: {
  onClose: () => void;
  onCareersClick?: () => void;
  onGetStartedClick?: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[1100] overflow-y-auto bg-black">
      {/* Navigation Header */}
      <div className="relative z-[1200]">
        <Nav
          onServiceClick={() => {}}
          onAIClick={() => {}}
          onProductClick={() => {}}
          onGrowWithUsClick={() => {}}
          onWhoWeAreItemClick={() => {}}
          onLogoClick={onClose}
        />
      </div>

      <div className="w-full pt-[92px]">
        <HeroSection />
        <ValuesSection />
        <LeadersSection />
        <JourneySection />
        <CTASection onCareersClick={onCareersClick} onGetStartedClick={onGetStartedClick} />
      </div>

      <Footer />
    </div>
  );
}