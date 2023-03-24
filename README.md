# Cucumber

This project is to learn about cucumber.

## Restrictions

1. Cucumber works with Node.js versions: 14 || 16 || 18>=.
2. To run cucumber tests, you can use the next 2 commands:
    - `npx cucumber-js`: native form
    - `npm test`: in this case you need setup your `package.json` file in the script `"test"` option, change the current value to `node ./node_modules/@cucumber/cucumber/bin/cucumber-js ./features`

## Commands

To execute any project (folder docker enviroment), it was created a `commands.sh` file where this file has define some actions to manage the execution of projects

### List command options
~~~
bash commands.sh
~~~

### Run docker service container bash
~~~
bash commands.sh bash <docker-service-name>
~~~

### Build projects images
~~~
bash commands.sh build
~~~

## References

1. https://docs.npmjs.com/updating-packages-downloaded-from-the-registry
2. https://stackoverflow.com/questions/46961026/cucumber-js-how-to-run-the-features-windows
3. https://www.freecodecamp.org/news/git-delete-remote-branch/#:~:text=To%20completely%20remove%20a%20remote,origin%20%2Dd%20branch%2Dname%20.