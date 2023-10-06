FROM node:20-alpine3.17
RUN npm install -g json-server
WORKDIR /data
VOLUME /data
COPY ../basket.json db.json
EXPOSE 80
ADD run.sh /run.sh
ENTRYPOINT ["bash", "/run.sh"]
CMD []
