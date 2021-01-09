FROM node:12

# 앱 디렉터리 생성
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 추가
COPY . .

# 앱 실행
RUN npm run start