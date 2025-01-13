'use client';

import { Button, Link } from "@nextui-org/react";
import { GoSmiley } from "react-icons/go";

/**
 * 首页组件
 * 展示网站的主页内容，包含欢迎信息和导航按钮
 */
export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello World</h1>
      {/* 使用 NextUI 的 Button 组件，配置为链接形式 */}
      <Button 
        as={Link}
        href="/members"
        color="danger" 
        variant="shadow" 
        className="mt-4"
        startContent={<GoSmiley />} // 按钮前置图标
      >
        Click me
      </Button>
    </div>
  );
}
