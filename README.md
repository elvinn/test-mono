# 境外支付前端公共代码库

通过 monorepo + lerna + pnpm 管理的境外支付前端公共代码库。

## 本地开发

1. 全局安装 pnpm： `npm install -g pnpm`
2. 项目根目录安装依赖：`tnpm install`
3. 修改包 packageX 代码，更新相应的文档与测试用例
4. 在 packageX 目录下，执行 `npm link`，接着在业务代码仓库中执行 `npm link packageX` 进行验证。
5. 确认无误后，发起 MR。合并到 master 时会自动触发蓝盾流水线，并根据 [Conventional Commits](https://www.conventionalcommits.org/en/) 更新版本号。



## 参考链接

1. [Github - ts-monorepo](https://github.com/NiGhTTraX/ts-monorepo/)
