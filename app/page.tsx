import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";


import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="absolute top-4 right-4">
        <ThemeSwitch />
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>TWKS&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          twks.net server infrastructure.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.portfolio}
        >
          Portfolio
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        
        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "sm",
            size: "lg",
          })}
          href="https://coolify.twks.net"
        >
          Coolify
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "faded",
            radius: "sm",
            size: "lg",
          })}
          href="https://cloud.twks.net"
        >
          NextCloud
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "sm",
            size: "lg",
          })}
          href="https://console.hetzner.cloud/projects/3644693/dashboard"
        >
          Hetzner
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "faded",
            radius: "sm",
            size: "lg",
          })}
          href="mc.twks.net:25565"
        >
          Minecraft
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "sm",
            size: "lg",
          })}
          href="https://api.twks.net"
        >
          API
        </Link>
      </div>
    </section>
  );
}