# Cupid App

Cupid App 是一款全栈约会应用，采用最新的技术栈构建，旨在为用户提供流畅且个性化的约会体验。以下是该应用的主要特点和技术栈：

## 技术栈

- 前端框架：Next.js 14，利用其高效的服务器端渲染和静态生成能力，提升页面加载速度和 SEO 性能
- UI 框架：NextUI v2 + TailwindCSS，提供现代化的 UI 组件和灵活的样式定制能力
- 动画效果：Framer Motion，实现流畅的页面过渡和交互动画
- 数据库：Prisma 作为 ORM 工具，简化数据库操作，支持多种数据库，本项目使用 PostgreSQL 作为后端数据库
- 认证：NextAuth (Auth.js)，提供安全、灵活的用户认证解决方案，支持多种登录方式
- 实时通信：Pusher，用于实现应用中的实时功能，如聊天消息推送、在线状态更新等
- 云存储：Cloudinary，用于存储和管理用户上传的图片、视频等媒体文件，支持丰富的图像处理功能
- 部署平台：Vercel，提供快速、可靠的云托管服务，支持自动部署和持续集成
- 表单处理：React Hook Form，简化表单的创建和管理，提高表单的响应速度和易用性
- 数据验证：Zod Validation，用于对用户输入的数据进行严格验证，确保数据的准确性和安全性
- 状态管理：Zustand，轻量级的状态管理库，方便在应用中进行状态的共享和管理
- 编程语言：TypeScript，为项目提供类型检查和代码提示，增强代码的可维护性和可读性

## 项目结构

```
src/
├── app/                    # Next.js 应用主目录
│   ├── page.tsx           # 首页组件
│   ├── layout.tsx         # 全局布局组件
│   └── globals.css        # 全局样式文件
├── components/            # 可复用组件目录
├── lib/                   # 工具函数和配置文件
└── types/                 # TypeScript 类型定义
```

## 开发指南

### 环境要求

- Node.js >= 18.0.0
- yarn 或 npm
- PostgreSQL 数据库实例

### 本地开发

1. 克隆项目并安装依赖：
```bash
git clone <repository-url>
cd cupid-app
yarn install
```

2. 配置环境变量：
```bash
cp .env.example .env.local
# 编辑 .env.local 文件，填入必要的环境变量
```

3. 启动开发服务器：
```bash
yarn dev
```

4. 打开浏览器访问 http://localhost:3000

### 构建部署

```bash
yarn build   # 构建生产环境代码
yarn start   # 启动生产环境服务器
```

## 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 TypeScript 严格模式
- 组件采用函数式编程范式
- 使用 TailwindCSS 进行样式管理

## 性能优化

- 图片优化：使用 Next.js 内置的图片组件进行自动优化
- 代码分割：页面级别的自动代码分割
- 静态生成：适当使用静态生成提升加载速度
- 缓存策略：实现合理的数据缓存机制

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## License

本项目采用 MIT License 开源许可协议 - 详情请查看 [LICENSE](LICENSE) 文件。
