# demo-1pass-secrets
A simple demo of how to load secrets from 1password cli to your program

### Config file
```bash
SECRET_DEMO="op://secrets/demo secret/credential"
```

### Helper shell function
```bash
# added to my $HOME/.zshrc file
# you may chose to call this function anything you'd like as well
function sec {
  # see if we are logged in, will return exit code > 0 if not
  op whoami

  # if we are logged skip if not ask for master password
  if [[ $? != 0 ]]; then 
    eval $(op signin)
  fi

  # this will inject the env vars we defined in our .env file
  op run --env-file=$HOME/personal/.env -- $@
}
```
