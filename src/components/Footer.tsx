import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      id="footer"
      className="sticky p-0 bg-black shadow xl:mx-auto md:px-6 md:py-4 dark:bg-gray-900 z-50"
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-0 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            fadlim.space
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-3 mt-3 text-sm text-gray-500 sm:mb-6 dark:text-gray-400">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
              {t("header.about")}
            </Link>
          </li>
          <li>
            <Link href="/policy" className="mr-4 hover:underline md:mr-6">
              {t("header.policy")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              {t("header.contact")}
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-0 border-gray-200 sm:mx-auto dark:border-gray-700 sm:my-2" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link href="/" className="hover:underline">
          fadlim™
        </Link>
        . {t("other.rightsText")}.
      </span>
    </footer>
  );
}
