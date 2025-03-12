import { AlertTriangle, CarTaxiFront, Clock10Icon, RouteIcon } from 'lucide-react'

export const statsHorizontalWithBorder = [
  {
    id: 1,
    title: 'On route vehicles',
    stats: 42,
    trendNumber: 18.2,
    avatarIcon: CarTaxiFront,
    color: '#8c57ff'
  },
  {
    id: 2,
    title: 'Vehicles with errors',
    stats: 8,
    trendNumber: -8.7,
    avatarIcon: AlertTriangle,
    color: '#ffce58'
  },
  {
    id: 3,
    title: 'Deviated from route',
    stats: 27,
    trendNumber: 4.3,
    avatarIcon: RouteIcon,
    color: '#ff4c51'
  },
  {
    id: 4,
    title: 'Late vehicles',
    stats: 13,
    trendNumber: 2.5,
    avatarIcon: Clock10Icon,
    color: '#19b2ff'
  }
]
