FROM node:current-alpine3.16 as build

RUN addgroup -S app && adduser -S app -G app
RUN mkdir /app
WORKDIR /app
ADD . .
RUN chown -R app:app /app
USER app
RUN ls -hl .
RUN npm install
RUN npm run build


FROM node:current-alpine3.16

RUN addgroup -S app && adduser -S app -G app
RUN mkdir /app && chown app:app /app
USER app
WORKDIR /app
COPY --from=build /app/package*.json .
RUN npm install --production
COPY --from=build /app/build build

EXPOSE 3000
CMD ["node", "/app/build/index.js"]
