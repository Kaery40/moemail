"use client"

import { usePathname } from "next/navigation"

export function FloatMenu() {
  const pathname = usePathname()
  
  // 在分享页面隐藏GitHub悬浮框
  if (pathname.includes("/shared/")) {
    return null
  }
  
  return null
} 
