import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface Props {
  text: String;
}

export default function ComingSoon({ text }: Props) {
  const { t } = useTranslation();
  const router = useRouter();

  const { locale: activeLocale } = router;

  return (
    <div className="flex items-center justify-center h-max">
      <div className="container">
        <div className="p-5 md:p-20 mx-2">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              {activeLocale == "id"
                ? `${t("other.page")}`
                : `${t(`header.${text}`)}`}
              <span className="text-indigo-600">
                {" "}
                {activeLocale == "id"
                  ? `${t(`header.${text}`)}`
                  : `${t("other.page")}`}
              </span>
            </h2>
            <div className="linear-wipe text-4xl mt-10">
              {t("other.comingSoon")}
            </div>
            <p className="text-md md:text-xl mt-10">{t("other.waitText")}</p>
          </div>
          <div className="flex flex-wrap mt-10 justify-center">
            <div className="m-3">
              <Link
                href="https://linkedin.com/in/mfadlika"
                title="Linkedin"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">Linkedin</span>
              </Link>
            </div>
            <div className="m-3">
              <Link
                href="https://github.com/mfadlika"
                title="Github"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">Github</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
