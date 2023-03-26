import Card from "@/components/Card";
import "chart.js/auto";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRef } from "react";
import { Line } from "react-chartjs-2";
import { getStat } from "./api/server";

interface DataProps {
  the_date: number;
  count: number;
}

interface DataArrayProps extends Array<DataProps> {}

export default function Stats(props: any) {
  const { t } = useTranslation();
  const ref = useRef();

  const graph: DataArrayProps = props.graph;

  const labels: number[] = [];
  const count: number[] = [];

  console.log(props.stats[0]["total_visitors"]);

  for (var val of graph) {
    labels.push(val.the_date);
    count.push(val.count);
  }

  const chart = {
    labels: [...labels],
    datasets: [
      {
        label: "Visitor",
        data: [...count],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="w-screen p-4 dark:bg-gray-800">
      <div className="w-full mx-auto text-center text-6xl font-extrabold mb-8 text-gray-700 dark:text-gray-100">
        {t("header.stats")}
      </div>
      <div className="grid grid-cols-2 gap-2 px-8 lg:grid-cols-4 md:gap-4">
        <Card
          label="Total Visitors"
          className="text-rose-500"
          count={props.stats[0]["total_visitors"]}
        ></Card>
        <Card
          label="Unique Visitors"
          className="text-sky-500"
          count={props.stats[0]["unique_visitors"]}
        ></Card>
        <Card
          label="Visitors Today"
          className="text-fuchsia-500"
          count={props.stats[0]["today_visitors"]}
        ></Card>
        <Card
          label="Visitors This Week"
          className="text-indigo-500"
          count={props.stats[0]["weekly_visitors"]}
        ></Card>
      </div>

      <div className="py-8">
        <Line
          ref={ref}
          data={chart}
          height={400}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
      {/* <div>
        <Pie ref={ref} data={chart} height={100} />
      </div> */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ip =
    ctx.req.headers["x-forwarded-for"] ||
    (ctx.req.socket.remoteAddress as string);

  var { graph, stats }: any = await getStat(ip, "stats");

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
      graph,
      stats,
    },
  };
};
