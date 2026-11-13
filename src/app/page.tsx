import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

import { FogtrailPreview, ToolsPreview } from "@/components/previews";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const EMAIL = "mailto:christianto_chen@live.com";

const socialLinks: {
  label: string;
  href: string;
  icon: IconType | typeof Mail;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/christiantochen",
    icon: RiGithubFill,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christiantochen",
    icon: RiLinkedinBoxFill,
  },
  { label: "X", href: "https://x.com/christiantochen", icon: RiTwitterXFill },
  { label: "Email", href: EMAIL, icon: Mail },
];

const projects: {
  name: string;
  description: string;
  meta: string;
  href: string;
  Preview: ComponentType;
}[] = [
  {
    name: "Tools",
    description: "Small tools for everyday dev chores. Paste something in, get something useful out.",
    meta: "JSON · SQL · Text · Image · Security",
    href: "https://tools.christiantochen.com",
    Preview: ToolsPreview,
  },
  {
    name: "Fogtrail",
    description: "A fast desktop browser for Redis and MySQL. Read-only, so it never changes your data.",
    meta: "Desktop app · macOS · Windows",
    href: "https://tools.christiantochen.com/fogtrail",
    Preview: FogtrailPreview,
  },
];

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center">
      <div className="absolute top-4 right-4 md:top-6 md:right-6">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-[880px] px-6 py-16">
        <div className="max-w-[560px]">
          <p className="text-base text-muted-foreground">Hello there,</p>
          <h1 className="mt-1.5 font-serif text-[clamp(40px,9vw,56px)] leading-[1.1] font-medium tracking-[-0.01em] text-foreground">
            I&apos;m Kristianto Chen.
          </h1>
          <p className="mt-5 text-lg leading-[1.7] text-body">
            Thanks for visiting my page. I&apos;m a software engineer based in Indonesia. If you&apos;d like
            to work together or just say hi, I&apos;d love to hear from you.
          </p>

          <Button
            asChild
            className={`group mt-8 h-12 gap-2.5 rounded-full px-6 text-base font-semibold hover:bg-primary-hover has-[>svg]:px-6 motion-reduce:transition-none ${focusRing}`}
          >
            <a href={EMAIL}>
              Get in touch
              <ArrowRight
                aria-hidden="true"
                className="size-[18px] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              />
            </a>
          </Button>

          <nav aria-label="Social links" className="mt-7 -ml-[11px]">
            <ul className="flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => {
                const external = href.startsWith("http");
                return (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`flex size-11 items-center justify-center rounded-full text-body transition-colors hover:bg-accent/10 hover:text-accent motion-reduce:transition-none ${focusRing}`}
                    >
                      <Icon aria-hidden="true" className="size-[22px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <section aria-labelledby="made-heading" className="mt-16">
          <h2
            id="made-heading"
            className="text-[13px] font-medium tracking-[0.08em] text-muted-foreground uppercase"
          >
            Things I&apos;ve made
          </h2>
          <ul className="mt-4 grid gap-5 md:grid-cols-2">
            {projects.map(({ name, description, meta, href, Preview }) => (
              <li key={name} className="flex">
                <a
                  href={href}
                  className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-foreground transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
                >
                  <div className="flex h-36 items-center justify-center border-b border-border bg-secondary p-4 md:h-44 md:p-[18px]">
                    <Preview />
                  </div>
                  <div className="flex flex-col gap-2.5 px-[22px] pt-5 pb-[22px]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xl font-semibold">{name}</span>
                      <ArrowUpRight aria-hidden="true" className="size-5" />
                    </div>
                    <span className="text-[15px] leading-normal text-body">{description}</span>
                    <span className="text-[13px] text-muted-foreground">{meta}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
