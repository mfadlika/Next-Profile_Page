import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ComingSoon from "../components/ComingSoon";

export default function License() {
  return (
    <div>
      <ComingSoon text="license"></ComingSoon>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(ctx.locale as string, [
      "common",
      "header",
    ])),
  },
});
