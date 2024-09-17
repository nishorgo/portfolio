import findnestLandingPage from "@/assets/images/findnest.png";
import cocreateLandingPage from "@/assets/images/cocreate.png";
import gamedbLandingPage from "@/assets/images/gamedb.png";
import snakeMockup from "@/assets/images/snake.png";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "FindNest",
    year: "",
    title: "Rent or buy homes",
    results: [
      { title: "✦ RESTful endpoints for users, posts, notifications and chat" },
      {
        title:
          "✦ Responsive interface for advanced search filters, property details, location map, real-time chat, etc.",
      },
    ],
    code: "https://github.com/nishorgo/findnest",
    image: findnestLandingPage,
  },
  {
    company: "Co-Create",
    year: "",
    title: "A live collaboration platform",
    results: [
      {
        title:
          "✦ Live collaboration between users, instantly reflecting changes for all participants",
      },
      {
        title:
          "✦ Can create, edit, and style shapes, text, and freeform drawings, with real-time chat and reactions",
      },
    ],
    live: "https://co-create-board.vercel.app/",
    code: "https://github.com/nishorgo/CoCreate",
    image: cocreateLandingPage,
  },
  {
    company: "GameDB",
    year: "",
    title: "IMDb for video games",
    results: [
      {
        title:
          "✦ RESTful endpoints for game data actions alongside user reviews and wishlists",
      },
      { title: "✦ Optimized API performance with Celery and Redis" },
      {
        title:
          "✦ Built a responsive React frontend with Zustand for lightweight state management",
      },
    ],
    live: "https://gamedb-indol.vercel.app/",
    code: "https://github.com/nishorgo/GameDB",
    image: gamedbLandingPage,
  },
  {
    company: "chatty snake and ladders",
    year: "",
    title: "Online Snake and Ladders Game",
    results: [
      {
        title:
          "✦ Multiplayer Snake and Ladder game with real-time player interactions using socket programming",
      },
      {
        title:
          "✦ Built a client-server system for seamless game synchronization",
      },
    ],
    code: "https://github.com/nishorgo/ChattySnakeLadders",
    image: snakeMockup,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.live && <a href={project.live}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 mr-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>}
                  {project.code && <a href={project.code}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Code</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
