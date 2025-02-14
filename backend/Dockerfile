# Builder stage
FROM node:18-alpine AS builder

WORKDIR /app/backend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Runner stage
FROM node:18-alpine AS runner

WORKDIR /app/backend

COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/package*.json ./
RUN npm install

ENV NODE_ENV development 

EXPOSE 8080
CMD ["node", "dist/index.js"]