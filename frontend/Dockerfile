# Use the official Node.js image from the Docker Hub
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose the port
EXPOSE 5000

# Run the application
CMD ["serve", "-s", "build"]
