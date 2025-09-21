# Step 1: Build React app (Vite)
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy build output from Vite (/dist)
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: custom nginx config (only if you created one)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
