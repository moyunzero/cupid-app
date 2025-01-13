# Cupid App

Cupid App 是一款全栈约会应用，采用最新的技术栈构建，旨在为用户提供流畅且个性化的约会体验。

## 技术栈

### 核心框架
- **前端框架**: Next.js 14 (App Router)
- **UI 框架**: NextUI v2 + TailwindCSS
- **状态管理**: Zustand
- **表单处理**: React Hook Form + Zod Validation

### 开发工具
- **开发语言**: TypeScript
- **代码规范**: ESLint + Prettier
- **构建工具**: Turbopack (开发环境)

### 性能优化
- **图片优化**: Next.js Image 组件
- **字体优化**: Next.js Font System
- **动画效果**: Framer Motion

## 项目结构

```
src/
├── app/                    # Next.js App Router 目录
│   ├── (auth)/            # 认证相关页面
│   │   ├── login/         # 登录页面
│   │   └── register/      # 注册页面
│   ├── messages/          # 消息页面
│   ├── lists/            # 列表页面
│   ├── page.tsx          # 首页
│   └── layout.tsx        # 根布局
├── components/           # 可复用组件
│   ├── navbar/          # 导航组件
│   │   ├── NavLink.tsx  # 导航链接
│   │   └── TopNav.tsx   # 顶部导航栏
│   └── Providers.tsx    # 全局提供者
├── lib/                 # 工具函数和配置
└── types/              # TypeScript 类型定义
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

- **图片优化**：使用 Next.js 内置的图片组件进行自动优化
- **代码分割**：页面级别的自动代码分割
- **静态生成**：适当使用静态生成提升加载速度
- **缓存策略**：实现合理的数据缓存机制

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## License

本项目采用 MIT License 开源许可协议 - 详情请查看 [LICENSE](LICENSE) 文件。
