import { ArrowRight, Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

const EMAIL = "mailto:christianto_chen@live.com";

const socialLinks: {
  label: string;
  href: string;
  icon: IconType | typeof Mail;
}[] = [
  { label: "GitHub", href: "https://github.com/christiantochen", icon: RiGithubFill },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christiantochen", icon: RiLinkedinBoxFill },
  { label: "X", href: "https://x.com/christiantochen", icon: RiTwitterXFill },
  { label: "Email", href: EMAIL, icon: Mail },
];

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="w-full max-w-[560px] px-6 py-16">
        <p className="text-base text-muted-foreground">Hello there,</p>
        <h1 className="mt-1.5 font-serif text-[clamp(40px,9vw,56px)] leading-[1.1] font-medium tracking-[-0.01em] text-foreground">
          I&apos;m Christianto Chen.
        </h1>
        <p className="mt-5 text-lg leading-[1.7] text-body">
          Thanks for visiting my page. I&apos;m a software engineer based in Indonesia. If you&apos;d
          like to work together or just say hi, I&apos;d love to hear from you.
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
    </main>
  );
}
