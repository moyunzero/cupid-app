import { z } from 'zod';
// import { calculateAge } from '../util';

// 注册表单的基础验证模式
export const registerSchema = z.object({
    // 用户名验证：最少3个字符
    name: z.string().min(3),
    // 邮箱验证：必须是有效的邮箱格式
    email: z.string().email(),
    // 密码验证：最少6个字符
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters'
    })
})

// 用户个人资料的验证模式
// export const profileSchema = z.object({
//     // 性别验证：不能为空
//     gender: z.string().min(1),
//     // 个人描述验证：不能为空
//     description: z.string().min(1),
//     // 城市验证：不能为空
//     city: z.string().min(1),
//     // 国家验证：不能为空
//     country: z.string().min(1),
//     // 出生日期验证
//     dateOfBirth: z.string().min(1, {
//         message: 'Date of birth is required'
//     }).refine(dateString => {
//         // 使用 calculateAge 函数计算年龄，确保用户年满18岁
//         const age = calculateAge(new Date(dateString));
//         return age >= 18;
//     }, {
//         message: 'You must be at least 18 to use this app'
//     }),
// });

// // 合并注册表单和个人资料的验证模式
// export const combinedRegisterSchema = registerSchema.and(profileSchema);

// // 导出个人资料的 TypeScript 类型
// export type ProfileSchema = z.infer<typeof profileSchema>;

// 导出完整注册表单的 TypeScript 类型
export type RegisterSchema = z.infer<typeof registerSchema>