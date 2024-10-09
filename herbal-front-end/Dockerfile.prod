# Use the specified Node.js version as the base image
FROM node:20.15.0

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code to the container image
COPY . .

# Build the application (Vite will create a 'dist' folder)
RUN npm run build

# Prune dev dependencies to reduce image size
RUN npm prune --production

# Install 'serve' to serve the static files from the 'dist' folder
RUN npm install -g serve

# Remove source files if needed
RUN rm -rf ./src

# Document that the service listens on port 3000
EXPOSE 3000

# Start the application using 'serve' to serve the 'dist' folder
CMD ["serve", "-s", "dist", "-l", "3000"]
