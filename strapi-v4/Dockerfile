FROM node:20-bullseye-slim

WORKDIR /srv/app

# Install build deps for better-sqlite3 and Strapi
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# Install all dependencies for build (including dev deps needed for admin panel build)
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

RUN npm run build

# Run Strapi in development mode (watch mode)
ENV NODE_ENV=development
EXPOSE 1337

CMD ["npm","run","develop"]
