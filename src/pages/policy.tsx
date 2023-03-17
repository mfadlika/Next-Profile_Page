import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ComingSoon from "../components/ComingSoon";
import postAPI from "./api/server";

export default function Policy() {
  return (
    <div>
      <ComingSoon text="policy"></ComingSoon>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ip =
    ctx.req.headers["x-forwarded-for"] ||
    (ctx.req.socket.remoteAddress as string);

  await postAPI(ip, "policy");

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
