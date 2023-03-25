FROM ubuntu:22.04

# Arguments to execute dockerfile - Chromedriver
ARG CUCUMBER_JSRL_CHROMEDRIVER_VERSION
ARG CUCUMBER_JSRL_CHROMEDRIVER_FILE

# Arguments to execute dockerfile - Selenium server
ARG CUCUMBER_JSRL_SELENIUM_SERVER_VERSION
ARG CUCUMBER_JSRL_SELENIUM_SERVER_FILE

# Arguments to execute dockerfile - Selenium http jdk client
ARG CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_VERSION
ARG CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_FILE

# Add args as enviroment values - Chromedriver
ENV CUCUMBER_JSRL_CHROMEDRIVER_VERSION=${CUCUMBER_JSRL_CHROMEDRIVER_VERSION}
ENV CUCUMBER_JSRL_CHROMEDRIVER_FILE=${CUCUMBER_JSRL_CHROMEDRIVER_FILE}

# Add args as enviroment values - Selenium server
ENV CUCUMBER_JSRL_SELENIUM_SERVER_VERSION=${CUCUMBER_JSRL_SELENIUM_SERVER_VERSION}
ENV CUCUMBER_JSRL_SELENIUM_SERVER_FILE=${CUCUMBER_JSRL_SELENIUM_SERVER_FILE}

# Add args as enviroment values - Selenium http jdk client
ENV CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_VERSION=${CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_VERSION}
ENV CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_FILE=${CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_FILE}

# Install needed dependencies to create selenium standalone server
RUN apt update -y && apt upgrade -y
RUN apt install -y default-jdk \
                   curl \
                   wget \
                   unzip \
                   xvfb \ 
                   libxi6 \
                   libgconf-2-4

# Install google chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb 
RUN apt -y update 
RUN apt install -y ./google-chrome-stable_current_amd64.deb

# Download chromedriver define by user into enviroment variables and configure in path
WORKDIR /usr/src/chromedriver
RUN curl -O -L "https://chromedriver.storage.googleapis.com/${CUCUMBER_JSRL_CHROMEDRIVER_VERSION}/${CUCUMBER_JSRL_CHROMEDRIVER_FILE}"
RUN unzip chromedriver_linux64.zip

# Move chromedriver to user executables
RUN cp chromedriver /usr/bin/chromedriver
RUN chmod +x /usr/bin/chromedriver 

# Download selenium-server.jar file
WORKDIR /usr/src/selenium-server
RUN curl -O -L "https://github.com/SeleniumHQ/selenium/releases/download/${CUCUMBER_JSRL_SELENIUM_SERVER_VERSION}/${CUCUMBER_JSRL_SELENIUM_SERVER_FILE}"
RUN curl -O -L "https://repo1.maven.org/maven2/org/seleniumhq/selenium/selenium-http-jdk-client/${CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_VERSION}/${CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_FILE}"

# Config selenium-conf
COPY config.toml .

# Avaliable bash terminal
SHELL [ "/bin/bash", "-c" ]

# Execute standalone server
CMD java -Dwebdriver.http.factory=jdk-http-client \
                  -jar ${CUCUMBER_JSRL_SELENIUM_SERVER_FILE} \
                  --ext ${CUCUMBER_JSRL_SELENIUM_HTTP_JDK_CLIENT_FILE} standalone \
                  --config /usr/src/selenium-server/config.toml 