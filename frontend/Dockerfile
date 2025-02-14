# Builder stage
FROM node:18-alpine AS builder

WORKDIR /app/frontend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Runner stage
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/frontend/.next /app/./.next
COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/package*.json ./

RUN npm install

ENV NODE_ENV development
EXPOSE 3000
CMD ["npm", "start"]