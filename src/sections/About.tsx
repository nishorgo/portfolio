"use client"

import BootstrapIcon from "@/assets/icons/bootstrap.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import CssIcon from "@/assets/icons/css3.svg";
import DjangoIcon from "@/assets/icons/django.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import GitIcon from "@/assets/icons/git.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import JavaIcon from "@/assets/icons/java.svg";
import MongodbIcon from "@/assets/icons/mongodb.svg";
import MysqlIcon from "@/assets/icons/mysql.svg";
import NodeIcon from "@/assets/icons/node.svg";
import OpenaiIcon from "@/assets/icons/openai.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";
import PythonIcon from "@/assets/icons/python.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import ZustandIcon from "@/assets/icons/zustand.svg";

import bookImage from "@/assets/images/book.png";
import mapImage from "@/assets/images/map2.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const backendTools = [
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "MySQL",
    iconType: MysqlIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgresqlIcon,
  },
  {
    title: "MongoDB",
    iconType: MongodbIcon,
  },
  {
    title: "Django",
    iconType: DjangoIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "Express.js",
    iconType: ExpressIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "Pandas",
    iconType: PandasIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Google APIs",
    iconType: GoogleIcon,
  },
  {
    title: "OpenAI APIs",
    iconType: OpenaiIcon,
  },
];

const frontendTools = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Zustand",
    iconType: ZustandIcon,
  },
  {
    title: "Bootstrap",
    iconType: BootstrapIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Cinema",
    emoji: "🎬",
    left: "7%",
    top: "5%",
  },
  {
    title: "Writing",
    emoji: "✍️",
    left: "45%",
    top: "5%",
  },
  {
    title: "Travel",
    emoji: "🏔️",
    left: "40%",
    top: "35%",
  },
  {
    title: "Video Game",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Geopolitics",
    emoji: "🌏",
    left: "65%",
    top: "35%",
  },
  {
    title: "History",
    emoji: "🏛️",
    left: "73%",
    top: "5%",
  },
  {
    title: "Macroeconomics",
    emoji: "💹",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="More about what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image className="" src={bookImage} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Technologies and tools I use to turn ideas into
              digital experiences."
                className=""
              />
              <ToolboxItems
                items={frontendTools}
                className=""
                itemsWrapperClassname="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={backendTools}
                className="mt-6"
                itemsWrapperClassname="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="My interests and hobbies beyond the software realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
