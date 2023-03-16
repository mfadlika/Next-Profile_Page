import Wave from "@/components/Wave";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";
import postAPI from "./api/server";

export default function Home(): ReactElement {
  return (
    <div>
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

  await postAPI(ip);

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
