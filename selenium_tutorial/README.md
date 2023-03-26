# Considerations

If you want to run selenium test and look into the VNC (port 5900) the interaction, you need to add the next `google-chrome args`:

- `"--start-maximized"` 
- `"--no-sandbox"`

And you must assign to chrome.Options() `goog:chromeOptions`. On the other hand, if you just want that test run, use the next args:

- `"--headless"` 
- `"--no-sandbox"`

## Ports

- 4444: Selenium server 
    - http://localhost:4444/ui: From local machine you can access to server dashboard where you can see nodes avaliables, enqueue and current sessions and the number of concurrency session allows.
    - http://selenium_server:4444/wd/hub: Url server to use it.
- 7900: NoVCN
    - http://localhost:7900: NoVNC web viewer (*Note: Validate that the WebSocket port was 5900*)
- 5900: VNC port
    - localhost:5900: Within VNC Viewer you can access to UI container system.

## Use example

Open 2 terminals:

- Terminal 1:

    ~~~
    bash commands.sh run selenium_server
    ~~~

- Terminal 2:

    ~~~
    bash commands.sh bash cucumber_selenium
    npm start
    ~~~