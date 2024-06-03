import { envSchema } from "env-schema";

import addFormats from "ajv-formats";

interface Config {
  /**
   * Wether the service is running in a development or production environment
   *
   * Default: "production"
   */
  NODE_ENV: "production" | "development";

  /**
   * The path to the db file
   */
  DATABASE_PATH: string;

  /**
   * The listen port for the API
   */
  API_PORT: number;
}

const required = [
  "DATABASE_PATH",
] as const;

const properties = {
  NODE_ENV: {
    type: "string",
    enum: ["production", "development"],
    default: "production",
  },
  DATABASE_PATH: {
    type: "string",
  },
  API_PORT: {
    type: "number",
    minimum: 0,
    maximum: 65535,
    default: 80,
  },
} as const;

function loadConfig(): Config {
  try {
    return envSchema({
      schema: {
        type: "object",
        required,
        properties,
      },
      dotenv: true,
      ajv: {
        customOptions(ajvInstance) {
          addFormats(ajvInstance);
          return ajvInstance;
        },
      },
    });
  } catch (e) {
    console.error("Invalid configuration");
    console.error(e.message.replaceAll(", ", "\n"));
    process.exit(1);
  }
}

const config: Config = loadConfig();

export default config;
export { config };
