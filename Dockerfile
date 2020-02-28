FROM node:13.8

ARG PX_ROOT_DIR=/px

RUN mkdir -p $PX_ROOT_DIR
WORKDIR $PX_ROOT_DIR

RUN apt update

RUN apt -y install wget

ENV DISPLAY=:99
ENV DISPLAY_CONFIGURATION=1024x768x24
RUN echo "Install Xvfb"
RUN apt -y install xvfb

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# copy scripts
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
RUN npm install

COPY ./browser.js browser.js
COPY ./index.js index.js
COPY ./proto proto

WORKDIR /

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod a+x /usr/local/bin/entrypoint.sh

EXPOSE 50000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]