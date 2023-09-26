import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { Container } from "@/components/Container"
import {
  GitHubIcon,
  TwitterIcon,
} from "@/components/SocialIcons"
import portraitImage from "@/images/portrait.png"

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: "About",
  description:
    "I’m Connor Fitzgerald. I live in New York City, where I design the future.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Connor Fitzgerald from Ottawa, Ontario
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className="text-2xl text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              About Me
            </h2>
            <p>
              I am a passionate creator and explorer in the digital world and
              beyond. I thrive on turning ideas into reality through web
              development and application design. When I'm not immersed in the
              world of coding and technology, you can find me engaging in my
              other great loves.
            </p>
            <h2 className="text-2xl text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Web Developer & App Enthusiast
            </h2>
            <p>
              I have a deep-seated passion for web development and application
              design. Crafting intuitive user experiences and bringing
              innovative ideas to life is my forte. I relish the challenge of
              creating seamless, functional, and visually appealing digital
              solutions. Whether it's building websites from scratch or
              developing applications that streamline processes, I'm always
              eager to tackle new projects.
            </p>
            <h2 className="text-2xl text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Gamer at Heart
            </h2>

            <p>
              Beyond the screen of code, I'm an avid gamer with a soft spot for
              titles like Counter-Strike and League of Legends. I find joy in
              the camaraderie of multiplayer battles and the thrill of
              competition. Gaming isn't just a pastime for me; it's a way to
              unwind, strategize, and connect with like-minded individuals from
              around the world.
            </p>
            <h2 className="text-2xl text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Wanderer and Guitarist
            </h2>
            <p>
              I'm not just confined to the digital realm. I have an insatiable
              wanderlust, and I often find myself exploring new places and
              cultures. Whether it's hiking in nature, discovering hidden gems
              in urban landscapes, or embarking on epic road trips, I'm always
              up for an adventure.
            </p>
            <p>
              Additionally, I have a deep appreciation for the melodic world of
              music. I'm a guitar enthusiast, and strumming a tune is my way of
              expressing creativity and emotion. Music, like technology, is a
              universal language that transcends boundaries.
            </p>
            <h2 className="text-2xl text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Join Me on My Journey
            </h2>
            <p>
              If you share any of my passions or simply want to connect, feel
              free to follow my journey. Whether it's discussing the latest
              developments in web design, strategizing for a victorious gaming
              session, swapping travel stories, or even jamming on the guitar,
              I'm excited to connect with fellow enthusiasts and like-minded
              individuals.
            </p>
            <p>
              Let's embark on this exciting journey together and explore the
              boundless possibilities of the digital and real worlds!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/ConnorFitzDev"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/ConnorFitzgerald17"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:connorfitzgerald17@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              connorfitzgerald17@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
