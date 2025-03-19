"use client"; // 声明这是一个客户端组件

import {
  registerSchema,
  RegisterSchema,
} from "@/lib/schemas/RegisterSchema"; // 导入注册表单验证模式

import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
} from "@nextui-org/react"; // 导入 NextUI 组件
import React from "react"; // 移除未使用的 useState
import {
  useForm,
} from "react-hook-form"; // 导入表单钩子
import { zodResolver } from "@hookform/resolvers/zod"; // 导入 zod 解析器

export default function RegisterForm() {
    // 初始化表单，配置验证规则
    const {
        register, // 注册表单字段
        handleSubmit, // 处理表单提交
        formState: { 
            errors, // 表单错误信息
            isValid, // 表单是否有效
            isSubmitting // 表单是否正在提交
        },
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema), // 使用 zod 验证器
        mode:"onTouched" // 字段被触摸时进行验证
    });

    // 表单提交处理函数
    const onSubmit = (data: RegisterSchema) => {
        console.log(data);
    };

    return (
       <Card className="w-3/5 max-w-md mx-auto mt-[100px]">
        {/* 卡片头部：注册标题 */}
        <CardHeader className="flex flex-col items-center justify-center">
            <h1>注册</h1>
        </CardHeader>
        {/* 卡片主体：注册表单 */}
        <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    {/* 用户名输入框 */}
                    <Input 
                        label="Name"
                        variant="bordered"
                        {...register("name")} // 注册用户名字段
                        isInvalid={!!errors.name} // 显示验证错误状态
                        errorMessage={errors.name?.message as string} // 显示错误信息
                    />
                    {/* 邮箱输入框 */}
                    <Input 
                        label="Email"
                        variant="bordered"
                        {...register("email")} // 注册邮箱字段
                        isInvalid={!!errors.email} // 显示验证错误状态
                        errorMessage={errors.email?.message as string} // 显示错误信息
                    />
                    {/* 密码输入框 */}
                    <Input 
                        label="Password"
                        variant="bordered"
                        type="password"
                        {...register("password")} // 注册密码字段
                        isInvalid={!!errors.password} // 显示验证错误状态
                        errorMessage={errors.password?.message as string} // 显示错误信息
                    />
                    {/* 注册按钮 */}
                    <Button
                        isLoading={isSubmitting} // 提交时显示加载状态
                        isDisabled={!isValid} // 表单无效时禁用按钮
                        type="submit"
                        fullWidth
                        color="default"
                    >
                        Register
                    </Button>
                </div>
            </form>
        </CardBody>
       </Card>
    );
}