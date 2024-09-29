# FROM node:20.15.0

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install dependencies, including Vite
# RUN npm install

# # Ensure Vite is installed globally (optional, but recommended)
# RUN npm install -g vite

# # Copy the rest of the application to the container
# COPY . .

# # Build the React app for production
# RUN npm run build

# # Use a lightweight web server to serve the app
# RUN npm install -g serve

# # Expose port 3000 to be accessible to the outside world
# EXPOSE 3000

# # Serve the build directory
# CMD ["serve", "-s", "dist", "-l", "3000"]
FROM node:20.15.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose the port, but let it be dynamically set via the ENV variable
EXPOSE 3000

# Serve the build directory and use the PORT environment variable
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
