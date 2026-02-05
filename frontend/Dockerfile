# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
# Copy deps manifests and install
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
# Copy source and build
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Use Next.js "standalone" output to avoid copying full node_modules (faster + smaller image).
# next.config.mjs already sets `output: 'standalone'`.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node","server.js"]
