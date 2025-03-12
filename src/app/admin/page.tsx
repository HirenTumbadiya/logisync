import { Avatar } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { statsHorizontalWithBorder } from '@/data/card-data/widget'
import { CardStatsHorizontalWithBorderProps } from '@/types/widgetTypes'

export default function AdminDashboard() {
  return (
    <div className='my-5 px-5 md:px-0'>
      <div className='grid'>
        <div className='grid md:grid-cols-4 gap-5'>
          {statsHorizontalWithBorder.map((field: CardStatsHorizontalWithBorderProps) => {
            const { title, stats, trendNumber, id, avatarIcon, color } = field
            const IconComponent = avatarIcon
            return (
              <Card key={id}>
                <CardContent className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4 align-middle'>
                    <Avatar className='flex justify-center items-center'>
                      <IconComponent className='w-5 h-5' color={color} />
                    </Avatar>
                    <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>{stats}</h4>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <div>{title}</div>
                    <div className='flex items-center gap-2'>
                      <p className='font-medium'>{`${trendNumber > 0 ? '+' : ''}${trendNumber}%`}</p>
                      <p>than last week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
