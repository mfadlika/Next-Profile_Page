import executeQuery from "../../../lib/db";

export default async function postAPI(ip: string | string[], site: string) {
  try {
    await executeQuery({
      query: "INSERT INTO server_visitor (ip, site) VALUES(?, ?)",
      values: [ip, site],
    });
  } catch (error) {
    console.log(error);
  }
}
