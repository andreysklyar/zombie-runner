# Specify Node Version and Image
FROM node:16-alpine AS development

# Specify the working dir
WORKDIR /zombie-runner/src/backend

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./
COPY ../.env ./

RUN npm ci
RUN npm run build

EXPOSE 3031

# ...

# In the `production` stage
FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /zombie-runner/src/backend

# Copy files from the development stage
COPY --from=development /zombie-runner/src/backend/node_modules ./node_modules
COPY --from=development /zombie-runner/src/backend/dist ./dist

EXPOSE 3031

CMD ["node", "dist/main"]
