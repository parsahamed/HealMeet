# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install


# Copy the application code
COPY . .

RUN npm run build

# Expose the port the app runs on
EXPOSE 4001

# Run seed script before starting the service
CMD ["sh", "-c", "npm run seed && npm run start:dev"]