const secret = process.env.SECRET_DEMO;

function main() {

  if (!secret) {
    throw new Error("Unable to fetch SECRET_DEMO env variable");
  }

  console.log("Hello this is a sample app that uses a secret from 1password cli");
  console.log(`Secret is: ${secret}`);
}

main();
