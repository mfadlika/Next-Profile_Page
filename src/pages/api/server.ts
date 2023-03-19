import axios from "axios";
import executeQuery from "../../../lib/db";

export default async function postAPI(ip: string | string[], site: string) {
  try {
    const { data } = await axios.get(`http://ip-api.com/json/${ip}`);

    console.log(data);
    await executeQuery({
      query:
        "INSERT INTO server_visitor (ip, site, country, city) VALUES(?, ?)",
      values: [ip, site, data["country"], data["city"]],
    });
  } catch (error) {
    console.log(error);
  }
}
