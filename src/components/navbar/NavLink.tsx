"use client";

import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

/**
 * 导航链接组件的属性接口
 */
interface Props {
  href: string;   // 链接地址
  label: string;  // 链接文本
}

/**
 * 导航链接组件
 * 根据当前路径自动高亮显示激活状态的导航项
 * 
 * @param {Props} props - 组件属性
 * @returns {JSX.Element} 返回导航项组件
 */
export default function NavLink({
    href,
    label,
  }: Props) {
    const pathname = usePathname();  // 获取当前路径
  
    return (
      <NavbarItem
        isActive={pathname === href}  // 根据当前路径判断是否激活
        as={Link}
        href={href}
      >
        <span>{label}</span>
      </NavbarItem>
    );
  }