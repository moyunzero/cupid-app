'use client';

import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

/**
 * Providers 组件：全局 UI 提供者
 * 
 * @component
 * @param {object} props - 组件属性
 * @param {ReactNode} props.children - 子组件，将被包裹在 NextUI 提供的上下文中
 * @returns {JSX.Element} 返回包含 NextUI 上下文的组件树
 * 
 * 这个组件的主要作用是：
 * 1. 为整个应用提供 NextUI 的主题和样式上下文
 * 2. 确保所有子组件都能访问到 NextUI 的功能和样式
 */
export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  );
}
