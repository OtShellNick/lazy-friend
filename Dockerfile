# Stage 1 - the build process
FROM node:18-alpine as build-deps
WORKDIR /front
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM node:18-alpine
WORKDIR /front
COPY --from=build-deps /front .
EXPOSE 3000
CMD ["yarn", "start"]