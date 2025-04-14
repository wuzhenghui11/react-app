# pnpm i

## pnpm run start

## 利用 craco 启动服务

```shell
#  安装craco
pnpm i craco -D
#  用 craco 启动服务 作用 webpack config
pnpm run dev
```

## serve 命令使用

```shell
# 全局安装 serve
npm i serve -g

serve -s ./build
```

## lazy 函数懒加载

```javascript
import { lazy } from 'react'
const Home = lazy(() => import('..file'))
```

## 包体积可视化分析

```shell
  pnpm i analyze -D

  # 在 package.json scripts 中增加命令
  # "analyze": "source-map-explorer 'build/static/js/*.js"
```

## cdn 配置

再去看文档

jsconfig.json 给vscode用的

## 包体积查看优化
source-map-explorer

## 轻量级的 store
zustand

