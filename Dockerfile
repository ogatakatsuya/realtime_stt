FROM node:latest

WORKDIR /app/

COPY ./package*.json /app/

RUN npm install

# sox をインストール
RUN apt-get update && \
    apt-get install -y sox libsox-fmt-all && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

CMD ["npm", "run", "dev"]