"use client"; // 声明这是一个客户端组件

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "@nextui-org/react"; // 导入 NextUI 组件
import React from "react";
import { GiPadlock } from "react-icons/gi"; // 导入锁图标
import { useForm } from "react-hook-form"; // 移除未使用的 SubmitHandler
import { LoginSchema, loginSchema } from "@/lib/schemas/LoginSchema"; // 导入登录表单验证模式
import { zodResolver } from "@hookform/resolvers/zod"; // 导入 zod 解析器

export default function LoginForm() {
  // 初始化表单，配置验证规则
  const {
    register, // 注册表单字段
    handleSubmit, // 处理表单提交
    formState: { isValid, errors }, // 获取表单状态：是否有效、错误信息
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema), // 使用 zod 验证器
    // mode: "onTouched", // 触摸时验证模式（已注释）
  });

  // 表单提交处理函数
  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <Card className="w-3/5 max-w-md mx-auto mt-[100px]">
      {/* 卡片头部：展示登录标题和欢迎信息 */}
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-default">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <p className="text-neutral-500">Welcome back to Cupid!</p>
        </div>
      </CardHeader>

      {/* 卡片主体：登录表单 */}
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* 邮箱输入框 */}
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
              {...register("email")} // 注册邮箱字段
              isInvalid={!!errors.email} // 显示验证错误状态
              errorMessage={errors.email?.message as string} // 显示错误信息
            />
            {/* 密码输入框 */}
            <Input
              defaultValue=""
              label="Password"
              variant="bordered"
              type="password"
              {...register("password")} // 注册密码字段
              isInvalid={!!errors.password} // 显示验证错误状态
              errorMessage={errors.password?.message as string} // 显示错误信息
            />
            {/* 登录按钮 */}
            <Button
              fullWidth
              color="default"
              type="submit"
              isDisabled={!isValid} // 表单无效时禁用按钮
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}