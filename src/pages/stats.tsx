import Card from "@/components/Card";
import "chart.js/auto";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Line, Pie } from "react-chartjs-2";
import { getStat } from "./api/server";

const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(32, 133, 236, 0.2)",
  "rgba(132, 100, 160, 0.2)",
  "rgba(206, 169, 188, 0.2)",
  "rgba(10, 65, 122, 0.2)",
];

const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(32, 133, 236, 1)",
  "rgba(132, 100, 160, 1)",
  "rgba(206, 169, 188, 1)",
  "rgba(10, 65, 122, 1)",
];

interface DataProps {
  city: string;
  country: string;
  the_date: number;
  count: number;
}

interface DataArrayProps extends Array<DataProps> {}

export default function Stats(props: any) {
  const { t } = useTranslation();

  const graph: DataArrayProps = props.graph;
  const city: DataArrayProps = props.city;
  const country: DataArrayProps = props.country;

  var labels: number[] = [];
  var cityLabels: string[] = [];
  var count: number[] = [];
  var cityCount: number[] = [];
  var cityTotal: number = 0;
  var countryLabels: string[] = [];
  var countryCount: number[] = [];
  var countryTotal: number = 0;

  for (var val of graph) {
    labels.push(val.the_date);
    count.push(val.count);
    cityTotal += val.count;
  }

  for (var val of city) {
    cityLabels.push(val.city);
    cityCount.push(val.count);
    countryTotal += val.count;
  }

  for (var val of country) {
    countryLabels.push(val.country);
    countryCount.push(val.count);
  }

  const chart = {
    labels: [...labels],
    datasets: [
      {
        label: "Visitors",
        data: [...count],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const pieChartCity = {
    labels: [...cityLabels, "Other Cities"],
    datasets: [
      {
        label: "Visitors",
        data: [...cityCount, props.stats[0]["total_visitors"] - cityTotal],
        fill: true,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const pieChartCountry = {
    labels: [...countryLabels, "Other Countries"],
    datasets: [
      {
        label: "Visitors",
        data: [...countryCount, props.stats[0]["total_visitors"] - countryTotal],
        fill: true,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-screen p-4 dark:bg-gray-800">
      <div className="w-full mx-auto text-center text-6xl font-extrabold mb-8 text-gray-700 dark:text-gray-100">
        {t("header.stats")}
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 md:gap-4 px-8">
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

      <div className="mt-4 py-8 border shadow">
        <Line
          data={chart}
          height={400}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
      <div className="w-full grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2 py-8">
        <div className="border shadow pb-4">
          <Pie
            data={pieChartCity}
            height={400}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
        <div className="border shadow pb-4">
          <Pie
            data={pieChartCountry}
            height={400}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ip =
    ctx.req.headers["x-forwarded-for"] ||
    (ctx.req.socket.remoteAddress as string);

  var { graph, stats, city, country }: any = await getStat(ip, "stats");

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
      graph,
      stats,
      city,
      country,
    },
  };
};
