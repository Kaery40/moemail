"use client"

import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function FloatMenu() {
  const t = useTranslations("common")
  const pathname = usePathname()
  
  // 在分享页面隐藏GitHub悬浮框
  if (pathname.includes("/shared/")) {
    return null
  }
} 
