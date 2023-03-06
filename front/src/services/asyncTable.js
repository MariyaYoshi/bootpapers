const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "1",
  host: "localhost",
  port: 5432,
  database: "postgres"
});

export function getDataPool() {
  return (
    client
      .connect()
      .then(() => console.log("Connection successfully"))
      .then(() => client.query("select * from ktsos_tab_dest"))
      //.then(results => (dataPool = results.rows))
      .catch(e => console.log(e))
      .finally(() => client.end())
  );
}
// dataPool = execute(dataPool);

// async function execute(dataPool) {
//   try {
//     await client.connect();
//     console.log("Connected successfully");
//     const results = await client.query("select * from ktsos_tab_dest");
//     dataPool = results.rows;
//     await client.end();
//     console.log("Client disconnected Successfully");
//     console.log(dataPool);
//     return dataPool;
//   } catch (ex) {
//     console.log("Something wrong happend {ex}");
//   }
// }
