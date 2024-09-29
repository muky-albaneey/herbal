# # Use the official Node.js image as the build stage
# FROM node:20.15.0 AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install production dependencies
# RUN npm install --production

# # Copy the rest of your application code
# COPY . .

# # Build the React app for production
# RUN npm run build

# # Use a lightweight web server to serve the app
# FROM nginx:alpine

# # Copy the build files to the Nginx server
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]
# Base image
FROM node:20.15.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies, including Vite
RUN npm install

# Ensure Vite is installed globally (optional, but recommended)
RUN npm install -g vite

# Copy the rest of the application to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the app
RUN npm install -g serve

# Expose port 3000 to be accessible to the outside world
EXPOSE 3000

# Serve the build directory
CMD ["serve", "-s", "dist", "-l", "3000"]
