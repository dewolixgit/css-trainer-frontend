FROM node:18 as build

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:latest as prod

COPY --from=build /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
