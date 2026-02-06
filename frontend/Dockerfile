# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
# Copy deps manifests and install
COPY package.json package-lock.json ./
# Avoid BuildKit-only syntax so the image can be built reliably even if BuildKit
# is disabled/unstable on the host.
RUN npm ci
# Copy source and build
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Next standalone server defaults `hostname` to process.env.HOSTNAME, which is set by Docker
# to the container id. Bind explicitly to 0.0.0.0 so Traefik can reach the container.
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Use Next.js "standalone" output to avoid copying full node_modules (faster + smaller image).
# next.config.mjs already sets `output: 'standalone'`.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node","server.js"]
