import { env } from "./env";

function main() {
  console.log(
    "Hello this is a sample app that uses a secret from 1password cli"
  );
  console.log(`Secret is: ${env.SECRET_DEMO}`);
}

main();
