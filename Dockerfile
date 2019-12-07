FROM node:slim
MAINTAINER Steven Yang <yangzhaofengsteven@gmail.com>

RUN npm install cidr-tools

COPY cidrmerge.sh /
COPY main.js /

CMD ["/cidrmerge.sh"]
