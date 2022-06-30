FROM cypress/included:10.3.0

WORKDIR /app


COPY ./package.json .

COPY ./package-lock.json .

RUN npm install --silent

COPY . .

RUN npm run cypress:run