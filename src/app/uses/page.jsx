import { Card } from "@/components/Card"
import { Section } from "@/components/Section"
import { SimpleLayout } from "@/components/SimpleLayout"

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: "Uses",
  description: "Software I use, gadgets I love, and other things I recommend.",
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, i7, 16GB RAM (2019)">
            I'm a fan of the 2019 MacBook Pro for its impressive blend of power
            and portability. Its robust performance, crisp Retina display, and
            sleek design make it a dependable companion for both work and
            leisure, allowing me to tackle demanding tasks with ease while
            enjoying a premium user experience.
          </Tool>
          <Tool title="Apple Magic Keyboard">
            The Apple Magic Keyboard stands out for its exceptional typing
            experience. Its tactile feedback, low-profile design, and
            comfortable key spacing make it a pleasure to use for extended
            periods. Plus, the seamless integration with Apple devices and its
            rechargeable battery add to its convenience, making it my preferred
            choice for typing tasks.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            I appreciate Visual Studio Code (VS Code) for its versatility and
            efficiency. It offers a wide range of extensions that cater to
            various programming languages and tools, enhancing my workflow. Its
            lightweight yet powerful design, coupled with features like
            IntelliSense and Git integration, make coding a seamless and
            enjoyable experience.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
          <Tool title="Miro">
            Miro is a fantastic collaboration tool that I admire for its
            intuitive interface and robust feature set. It simplifies visual
            collaboration, allowing teams to brainstorm, plan, and innovate
            effortlessly. Its real-time collaboration, vast library of
            templates, and integration capabilities make it an essential tool
            for fostering creativity and productivity in remote or distributed
            teams.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
