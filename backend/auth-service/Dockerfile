# Use Node.js as the base image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
COPY tsconfig.json ./
# Copy the application code
COPY src ./src
COPY prisma ./prisma
RUN npm install

RUN npm run build

# Expose the port the app runs on
EXPOSE 4081

# Run seed script before starting the service
CMD ["sh", "-c", "npm run migrate && npm run seed && npm run start:dev"]