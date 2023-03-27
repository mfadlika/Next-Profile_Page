import Eyes from "@/components/Eyes";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import postAPI from "./api/server";

export default function About() {
  return (
    <div className="h-max lg:pt-16 lg:px-20 md:pt-12 md:px-6 pt-9 px-4 dark:bg-gray-900">
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <p className="font-bold text-5xl leading-3 text-indigo-700 my-5 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer pb-2">
            About
          </p>
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9">
            Hello friends! This page is about me, the owner of this webiste.
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Welcome to my Profile
            Website. Let me introduce you to a Full Stack Web Developer who
            really is passionate about making eye-catching website and
            application. My standard of art and design is seriously high, but
            unfortunately I&#8217;m a bit lack in UI/UX skill, so great chance
            in a few months from now you may see a lot of changes of appearance
            of this website as I gain more and more art references that catch my
            eyes as I will always continue learning and updating my skills.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Skills that I have
            achieved this far is making a responsive website with React
            Framework and Tailwind, for the website itself, I&#8217;m using one
            of React JS Library, Next JS for both server and client side. My
            other skills are Node JS, Express JS and Django for server side.
            I&#8217;m really good in some programming languages such as
            Javacsript, TypeScript, Python and C++ and still counting because I
            love to learn new stuff.
          </p>
        </div>
        <div className="w-full flex justify-center lg:w-6/12">
          <Eyes></Eyes>
        </div>
      </div>

      <div className="relative mt-2 max-sm:hidden">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <svg
              style={{ fill: "white" }}
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" />
            </svg>
          </div>
          <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <svg
              style={{ fill: "white" }}
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z" />
            </svg>
          </div>

          <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <svg
              style={{ fill: "white" }}
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
            </svg>
          </div>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200 max-sm:hidden" />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4 mb-8 max-sm:hidden">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
            Founded
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            The idea of making this website is started with amazement of{" "}
            <Link
              href="https://www.superrb.com"
              className="underline font-bold"
            >
              SUPERRB
            </Link>{" "}
            website and make me wonder could I ever make a good website like
            that.
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
            All over the World
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            Visitors across the world with more than 20 countries and 50 cities.
          </p>
        </div>
        <div className="sm:block hidden">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
            350+ Visitors
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            Hundreds visitors a day and keep adding up every day. Calm down!
            This website will never collect your sensitive data, collect only
            your public IP for statistic purpose of this website.
          </p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ip =
    ctx.req.headers["x-forwarded-for"] ||
    (ctx.req.socket.remoteAddress as string);

  await postAPI(ip, "about");

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
