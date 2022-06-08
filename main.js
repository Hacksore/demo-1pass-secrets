function main() {
  console.log("Hello this is a sample app that uses a secret from 1password cli");
  console.log(`Secret is: ${process.env.SECRET_DEMO}`);
}

main();
