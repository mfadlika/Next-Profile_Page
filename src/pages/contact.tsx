import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useReducer } from "react";
import postAPI from "./api/server";

enum ActionKind {
  UpdateName = "updateName",
  UpdateEmail = "updateEmail",
  UpdateMessage = "updateMessage",
}

interface Action {
  type: ActionKind;
  payload: string;
}
interface State {
  name: string;
  email: string;
  message: string;
}

function stateReducer(state: State, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.UpdateName:
      return {
        ...state,
        value: (state.name = payload),
      };
    case ActionKind.UpdateEmail:
      return {
        ...state,
        value: (state.email = payload),
      };
    case ActionKind.UpdateMessage:
      return {
        ...state,
        value: (state.message = payload),
      };
    default:
      return state;
  }
}

export default function Contact() {
  const { t } = useTranslation();
  const [state, updateState] = useReducer(stateReducer, {
    name: "Your name",
    email: "example@email.com",
    message: "Your message",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    window.open(
      `mailto:mfadlika@outlook.com?subject=${state.name}&body=${state.message}`
    );
  }
  return (
    <div className="py-4 lg:py-8 relative bg-white dark:bg-gray-600">
      <div className="xl:mx-auto xl:container relative">
        <div className="flex flex-wrap xl:mx-auto xl:container">
          <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0">
            <div className="w-full flex flex-col items-start xl:justify-start relative z-20 xl:px-0 px-4 xl:py-0 py-4">
              <div className="w-full 2xl:pl-48 xl:pt-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-800 dark:text-white">
                  {t("contact.greeting")}
                </h1>
                <div className="w-full md:w-10/12 mt-3">
                  <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider dark:text-white">
                    {t("contact.sentence")}
                  </h2>
                  <div className="mt-4 md:mt-8">
                    <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                      {t("header.contact")}
                    </h2>
                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2 dark:text-white">
                      +62 811 1771 161 (Whatsapp)
                    </h2>
                  </div>
                  <div className="mt-4 md:mt-8">
                    <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                      {t("contact.email")}
                    </h2>
                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2 dark:text-white">
                      mfadlika@outlook.com
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:pt-10 lg:pl-24">
            <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700">
                {t("contact.talk")}
              </h1>
              <div className="w-full 2xl:w-8/12 mt-3" role="form">
                <h2 className="text-gray-800 dark:text-white text-base md:text-lg leading-8 tracking-wider">
                  {t("contact.enquiries")}
                </h2>
                <div className="mt-4 md:mt-8">
                  <p className="text-gray-800 dark:text-white text-base font-medium">
                    {t("contact.name")}
                  </p>
                  <input
                    className="mt-3 text-base dark:bg-gray-800 border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800 dark:text-white"
                    type="text"
                    placeholder={`${t("contact.placeHolderName")}`}
                    aria-label="enter your name input"
                    onChange={(e) =>
                      updateState({
                        type: ActionKind.UpdateName,
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-4 md:mt-8">
                  <p className="text-gray-800 dark:text-white text-base font-medium">
                    {t("contact.emailAddress")}
                  </p>
                  <input
                    className="mt-3 text-base dark:bg-gray-800 border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800 dark:text-white"
                    type="email"
                    placeholder="example@mail.com"
                    aria-label="enter your email input"
                    onChange={(e) =>
                      updateState({
                        type: ActionKind.UpdateEmail,
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-4 md:mt-8">
                  <p className="text-gray-800 dark:text-white text-base font-medium">
                    {t("contact.message")}
                  </p>
                  <textarea
                    className="mt-3 text-base dark:bg-gray-800 border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800 dark:text-white"
                    placeholder={`${t("contact.placeHolderEmail")}`}
                    aria-label="enter your message input"
                    onChange={(e) =>
                      updateState({
                        type: ActionKind.UpdateMessage,
                        payload: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="py-5">
                  <button
                    onClick={handleSubmit}
                    className="py-3 md:py-5 dark:bg-white dark:text-gray-800 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    {t("contact.send")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ip =
    ctx.req.headers["x-forwarded-for"] ||
    (ctx.req.socket.remoteAddress as string);

  await postAPI(ip, "contact");

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
