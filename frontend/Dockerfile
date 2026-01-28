# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
# Copy deps manifests and install
COPY package.json package-lock.json ./
RUN npm ci
# Copy source and build
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# Copy public assets if present (not all templates include /public)
# Using wildcard to avoid missing dir errors
# No-op if none
EXPOSE 3000
CMD ["npm","start"]
