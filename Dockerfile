# Use a lightweight Node.js base image.
# We specify a version to avoid unexpected changes.
FROM node:18-alpine

# Set the working directory inside the container.
WORKDIR /app

# Copy package.json and pnpm-lock.yaml first to leverage Docker's build cache.
# This way, if only your source code changes, Docker doesn't re-run the npm install.
COPY package*.json ./

# Install dependencies.
# The logs show you're using `pnpm` so you might want to use `pnpm install` instead of `npm install`. 
# Let's stick with `npm install` for now since the logs show it's used in the Nixpacks plan.
# However, you can change this to `pnpm install` if that's what you intend to use.
RUN npm install

# Copy the rest of the application files.
COPY . .

# Run the build command as defined in your package.json.
# This creates the production-ready static files.
RUN npm run build

# The default command to run when the container starts.
# The logs show `npm run serve`, so we'll use that.
CMD ["npm", "run", "serve"]

# Expose the port that the application listens on (e.g., 3000).
# The logs show that your application serves on port 3000.
EXPOSE 3002