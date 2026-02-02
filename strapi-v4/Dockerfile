FROM node:20-alpine

WORKDIR /srv/app

# Install build deps for better-sqlite3 and Strapi
RUN apk add --no-cache python3 make g++ libc6-compat

COPY package*.json ./
# Install all dependencies for build (including dev deps needed for admin panel build)
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

RUN npm run build

# Run Strapi in development mode (watch mode)
ENV NODE_ENV=development
EXPOSE 1337

CMD ["npm","run","develop"]
