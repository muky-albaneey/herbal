# Use the specified Node.js version as the base image
FROM node:20.15.0

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Build the application
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Run the web service on container startup
CMD ["serve", "-s", "dist"]