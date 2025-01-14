import { z } from 'zod';

// 定义登录表单的验证模式
// 使用 Zod 库进行类型验证和运行时检查
export const loginSchema = z.object({
    // 验证邮箱字段
    // - 必须是有效的邮箱格式
    email: z.string().email({
        message: '请输入有效的邮箱地址' // 添加中文错误提示
    }),

    // 验证密码字段
    // - 最少6个字符
    password: z.string().min(6, {
        message: '密码长度至少为6个字符' // 添加中文错误提示
    })
})

// 导出登录表单的 TypeScript 类型
// 通过 Zod 的 infer 功能自动推导出类型
export type LoginSchema = z.infer<typeof loginSchema>