import executeQuery from "../../../lib/db";

export default async function postAPI(ip: string | string[]) {
  await executeQuery({
    query: "INSERT INTO server_visitor (ip) VALUES(?)",
    values: ip,
  });
}
