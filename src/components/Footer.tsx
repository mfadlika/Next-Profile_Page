import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="p-4 bg-white shadow xl:mx-auto md:px-6 md:py-4 dark:bg-gray-900 z-50"
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            fadlim.space
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/policy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 sm:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link href="https://flowbite.com/" className="hover:underline">
          fadlim™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
