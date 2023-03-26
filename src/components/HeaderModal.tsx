import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { MouseEventHandler, ReactElement, useEffect, useState } from "react";
import Flag from "./FlagSVG";
import Stars from "./Stars";
import { ToggleButton } from "./ToggleButton";
import Wave from "./Wave";

interface Props {
  isClicked: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

interface EnumNavLink {
  href: string;
  anchor: string;
}

interface EnumNavLinks extends Array<EnumNavLink> {}

export default function HeaderModal({ isClicked, onClick }: Props) {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState<boolean>(true);

  const router: NextRouter = useRouter();

  const { pathname, query, asPath } = router;

  const navLink: EnumNavLinks = [
    {
      href: "/works",
      anchor: t("header.works"),
    },
    {
      href: "/about",
      anchor: t("header.about"),
    },
    {
      href: "/contact",
      anchor: t("header.contact"),
    },
    {
      href: "/blog",
      anchor: t("header.blog"),
    },
    {
      href: "/stats",
      anchor: t("header.stats"),
    },
  ];

  const styles: { [key: string]: string } = {
    nav: `absolute animate__animated ${
      isClicked ? "animate__bounceInDown" : "hidden"
    } bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 h-screen w-full`,
    ul: "mt-10 mb-4 space-y-14 md:mb-0 max-md:mx-auto max-md:text-center",
    a: `animate__animated ${
      isClicked ? "animate__fadeInUp" : "hidden"
    } hover:underline`,
    aBox: "mt-10 p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken",
    button:
      "inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white rounded-lg hover:bg-slate-700 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700",
    dPath:
      "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
  };

  useEffect(() => {
    if (theme === "dark" || theme === "system") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [theme]);

  return (
    <nav className={styles.nav}>
      <div
        id="mega-menu-full-image-dropdown"
        className="bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 h-full"
      >
        {isDark ? <Stars></Stars> : null}
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul className={styles.ul}>
            {navLink.slice(0, 3).map((props: EnumNavLink): ReactElement => {
              return (
                <li key={props.anchor}>
                  <Link
                    href={props.href}
                    className={styles.a}
                    onClick={onClick}
                  >
                    <span className="animate-shine">{props.anchor}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className={`${styles.ul} hidden md:block`}>
            {navLink.slice(3, 5).map((props: EnumNavLink): ReactElement => {
              return (
                <li key={props.anchor}>
                  <Link
                    href={props.href}
                    className={styles.a}
                    onClick={onClick}
                  >
                    <span className="animate-shine">{props.anchor}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.aBox}>
            <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
              {t("header.switchLanguage")}
            </p>
            <div className="flex justify-between mx-auto">
              <button type="button" className={styles.button}>
                <Link href={{ pathname, query }} as={asPath} locale={"en"}>
                  {Flag.ukFlag}
                </Link>
              </button>
              <button type="button" className={styles.button}>
                <Link href={{ pathname, query }} as={asPath} locale={"id"}>
                  {Flag.idFlag}
                </Link>
              </button>
              <button type="button" className={styles.button}>
                <Link href={{ pathname, query }} as={asPath} locale={"de"}>
                  {Flag.deFlag}
                </Link>
              </button>
            </div>
            <div className="flex justify-center mt-8">
              <ToggleButton
                value="Dark Mode"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                params={theme === "light" ? false : true}
              ></ToggleButton>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-20">
        <Wave></Wave>
      </div>
    </nav>
  );
}
