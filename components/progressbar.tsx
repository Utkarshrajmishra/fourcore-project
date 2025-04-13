"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

type ProgressBarProps={
    color:string,
    backgroundColor:string
    totalProgress:number,
}

export function ProgressBar({color, backgroundColor, totalProgress}:ProgressBarProps) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(totalProgress), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className={`w-[100%] h-1 ${color} ${backgroundColor}`} />
}
