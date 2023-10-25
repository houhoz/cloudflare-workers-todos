# cloudflare-workers-todos


## 技术栈

使用cloudflare functions + KV + React

https://developers.cloudflare.com/pages/platform/functions/routing/

```bash
# 创建项目
npx wrangler init cloudflare-workers-todos

# 之后选择web—app，前端框架选择react

# 本地启动

HOST=127.0.0.1  DANGEROUSLY_DISABLE_HOST_CHECK=true  yarn start


# 部署

yarn pages:deploy

```

