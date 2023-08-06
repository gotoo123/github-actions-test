FROM node:alpine as builder

# 指定工作目录
RUN mkdir -p /app/client
WORKDIR /app/client

# 复制目录文件
COPY . .

# 安装依赖
RUN npm install --registry=https://registry.npm.taobao.org && npm run build && rm -rf node_modules

FROM nginx:alpine

COPY --from=builder /app/client/dist /usr/share/nginx/html

COPY --from=builder /app/client/BuildScript/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]


