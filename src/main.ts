import { config } from "./config";

import { AppDataSource } from "./data-source";

import { Command } from "commander";

import { serve } from "./service";

import pkg from "../package.json";

const program = new Command();

program.name(pkg.name).description("Ummon dev backend app").version(pkg.version);

program
  .command("serve")
  .description("Start the API service")
  .action(() => {
    void serve();
  });

async function main() {
  await AppDataSource.initialize();
  await program.parseAsync();
}

void main();
