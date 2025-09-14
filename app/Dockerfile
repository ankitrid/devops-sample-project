# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all app source
COPY . .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
