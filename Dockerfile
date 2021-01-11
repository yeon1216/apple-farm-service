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
# RUN npm run start
EXPOSE 8282
CMD [ "npm", "run", "start" ]

###########
# 도커 명령어
###########

# 이미지 생성
# docker build -t apple-farm-service-dockerizing .

# 컨테이너 생성 및 실행
# docker run -p 8282:8282 -d --name apple-farm-service apple-farm-service-dockerizing