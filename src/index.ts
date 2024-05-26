import { MikroORM, Options } from "@mikro-orm/core";
import { Migrator } from "@mikro-orm/migrations";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import path from "node:path";

const config: Options<PostgreSqlDriver> = {
  metadataProvider: TsMorphMetadataProvider,
  driver: PostgreSqlDriver,
  extensions: [Migrator],
  user: "postgres",
  password: "postgres",
  dbName: "postgres",
  host: "localhost",
  port: 5432,
  entities: [path.join(__dirname, "./models/*.js")],
  entitiesTs: ["src/models/*.ts"],
  debug: false,
};

async function main() {
  await MikroORM.init<PostgreSqlDriver>(config);

  console.log(
    "Hello there! If you can read this message, everything works fine :).",
  );
}

main()
  .then(() => process.exit())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
