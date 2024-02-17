# Real world demo of `opx`

If you got here from the [previous dev.to article](https://dev.to/hacksore/using-1password-cli-for-secrets-locally-326e) please adopt the rust based solution [opx](https://github.com/Hacksore/opx).

Once you create `.env` files in both `apps/demo` and `apps/other-app` you can then start the application with `opx`.

This will yield the following output if all goes well and your secrets exist.

```
$ opx start                                                                                                                                                                                          1 ↵
[OPX] using package manager yarn
[OPX] Forcing terminal colors with FORCE_COLOR=1
[OPX] parsing env file apps/demo/.env
[OPX] parsing env file apps/other-app/.env
[OPX] op run --env-file=/Users/hacksore/code/opensource/demo-1pass-secrets/apps/demo/.env --env-file=/Users/hacksore/code/opensource/demo-1pass-secrets/apps/other-app/.env -- yarn start
yarn run v1.22.19
$ turbo run start
• Packages in scope: demo, eslint-config-custom, other-app, tsconfig
• Running start in 4 packages
• Remote caching disabled
other-app:start: cache bypass, force executing 16d3367cc34e4c94
demo:start: cache bypass, force executing 5b8e453008979d12
$ tsx main.ts
$ tsx main.ts
other-app:start: Hello this is a sample app that uses a secret from 1password cli
other-app:start: Secret is: <concealed by 1Password>
demo:start: Hello this is a sample app that uses a secret from 1password cli
demo:start: Secret is: <concealed by 1Password>

 Tasks:    2 successful, 2 total
Cached:    0 cached, 2 total
  Time:    453ms 

Done in 0.61s.
```
