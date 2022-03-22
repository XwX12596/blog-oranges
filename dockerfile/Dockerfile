FROM node:latest

MAINTAINER XwX

WORKDIR /hexo

RUN npm install hexo-cli -g\
&& hexo init .\
&& npm install

EXPOSE 4000

CMD ["/bin/bash"]