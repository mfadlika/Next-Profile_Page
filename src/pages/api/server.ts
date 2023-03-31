import axios from "axios";
import executeQuery from "../../../lib/db";

export default async function postAPI(ip: string | string[], site: string) {
  try {
    const { data } = await axios.get(`https://ipapi.co/${ip}/json/`);

    // await executeQuery({
    //   query:
    //     "INSERT INTO server_visitor (ip, site, country, city) VALUES(?, ?, ?, ?)",
    //   values: [ip, site, data["country_name"], data["city"]],
    // });
  } catch (error) {
    console.log(error);
  }
}

export async function getStat(ip: string | string[], site: string) {
  try {
    postAPI(ip, site);

    var graph = await executeQuery({
      query:
        "SELECT DATE_FORMAT(created_at, '%m-%d') AS the_date, COUNT(*) AS count FROM server_visitor WHERE created_at BETWEEN DATE_FORMAT(DATE(NOW() - INTERVAL 14 DAY), '%Y-%m-%d') AND DATE_FORMAT(DATE(NOW()), '%Y-%m-%d') GROUP BY the_date",
      values: [],
    });
    var stats = await executeQuery({
      query:
        "SELECT COUNT(*) AS total_visitors, COUNT(DISTINCT(server_visitor.ip)) as unique_visitors, sum(CASE WHEN DATE_FORMAT(created_at, '%d') = DATE_FORMAT(DATE(NOW()), '%d') THEN 1 ELSE 0 END) AS today_visitors, sum(CASE WHEN created_at BETWEEN DATE_FORMAT(DATE(NOW() - INTERVAL 7 DAY), '%Y-%m-%d') AND DATE_FORMAT(DATE(NOW()), '%Y-%m-%d') THEN 1 ELSE 0 END) AS weekly_visitors FROM server_visitor",
      values: [],
    });
    var city = await executeQuery({
      query:
        "SELECT CONCAT(city, ', ', country) AS city, count(*) AS count FROM `server_visitor` GROUP BY city ORDER BY count DESC LIMIT 9",
      values: [],
    });

    var country = await executeQuery({
      query:
        "SELECT country, count(*) AS count FROM `server_visitor` GROUP BY country ORDER BY count DESC LIMIT 9",
      values: [],
    });

    graph = JSON.stringify(graph);
    stats = JSON.stringify(stats);
    city = JSON.stringify(city);
    country = JSON.stringify(country);
    const data = {
      graph: JSON.parse(graph),
      stats: JSON.parse(stats),
      city: JSON.parse(city),
      country: JSON.parse(country),
    };
    return data;
  } catch (error) {
    console.log(error);
  }
}
