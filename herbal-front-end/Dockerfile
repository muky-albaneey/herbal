# Use an official Node.js image as a base
FROM node:20.15.0

# Create and set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app code
COPY . .

# Build the app
RUN npm run build

# Install a simple static server to serve the app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the app using serve
CMD ["serve", "-s", "dist"]
