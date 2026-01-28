FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Create data directory for SQLite
RUN mkdir -p /app/data

EXPOSE 8080

CMD ["npm", "start"]





