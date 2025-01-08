import Link from "next/link";
import Socials from "./socials";
import LocaleText from "./ui/localeText";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
      <Socials />
      <section className="mt-8 sm:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          <LocaleText name="footer.copyright" />{" "}
          <Link className="link" href="/">
            sinicalukasz-it.pl
          </Link>
          {" | "}
          <Link className="link font-bold" href="/privacy">
            <LocaleText name="footer.privacy" />
          </Link>
        </p>
      </section>
    </footer>
  );
}