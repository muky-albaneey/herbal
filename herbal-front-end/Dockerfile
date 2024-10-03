
# Use the official Node.js 20.15.0 image as the base image
FROM node:20.15.0

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the React app for production (assuming it's a React app)
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose the port that will be dynamically set via the ENV variable
EXPOSE 3000

# Ensure the dist folder is used and bind to the PORT environment variable
CMD ["sh", "-c", "serve -s build -l ${PORT:-3000}"]