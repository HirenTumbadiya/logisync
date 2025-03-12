import { LucideIcon } from "lucide-react"

export type CardStatsHorizontalWithBorderProps = {
  id: number
  title: string
  stats: number
  trendNumber: number
  avatarIcon: LucideIcon
  color: string
}

export type CardStatsType = {
  statsHorizontalWithBorder: CardStatsHorizontalWithBorderProps[]
}
