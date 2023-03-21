import Stars from "@/components/Stars";
import Wave from "@/components/Wave";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "next-themes";
import { ReactElement } from "react";
import postAPI from "./api/server";

export default function Home(): ReactElement {
  const { theme } = useTheme();
  return (
    <div id="home" className="pt-16">
      {theme === "light" ? null : <Stars></Stars>}
      <div className="flex justify-center items-center text-8xl max-sm:text-7xl">
        <span className="tagline linear-wipe">THROUGH</span>
      </div>
      <div className="flex justify-center items-center text-8xl max-sm:text-7xl">
        <span className="tagline linear-wipe">THE WAVES</span>
      </div>
      <Wave></Wave>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ip =
    ctx.req.headers["x-forwarded-for"] ||
    (ctx.req.socket.remoteAddress as string);

  await postAPI(ip, "index");

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
