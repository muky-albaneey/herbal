# Use the official Node.js image to build the app
FROM node:20.15.0 AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React app (this will generate the 'dist' folder)
RUN npm run build

# Use a lightweight nginx image to serve the static files
FROM nginx:alpine

# Copy the build output from the previous stage to the nginx web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
