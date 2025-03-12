import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/common/sidebar/app-sidebar'
import { ModeToggle } from '@/components/common/theme/mode-toggle'
import Notification from '@/components/common/notification'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='md:mx-10'>
        <header className='flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border px-4 shadow'>
          <div className='flex items-center gap-2 px-3 w-full'>
            <SidebarTrigger className='-ml-1' />
            <div className='flex justify-end w-full gap-3'>
              <ModeToggle />
              <Notification />
            </div>
          </div>
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
