import React from 'react';
import Link from 'next/link';

export default function pages() {
  return (
    <div>
        <h3 className='text-3xl'>
            这是成员页面
        </h3>
        <Link href="/">
            返回首页
        </Link>
    </div>
  );
}