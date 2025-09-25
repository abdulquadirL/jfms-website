# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies (package.json + lock file first for better caching)
COPY package*.json ./
RUN npm ci

# Copy the full source code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# Next.js needs this to properly serve SSR pages
ENV PORT=3000

# Copy only the built files and node_modules from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port
EXPOSE 3000

# Run the production server
CMD ["npm", "run", "start"]
