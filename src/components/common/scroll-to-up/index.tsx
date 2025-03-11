'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react' // Importing an icon (optional)
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300) // Show after scrolling 300px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='fixed bottom-5 right-5'
    >
      <Button
        onClick={scrollToTop}
        aria-label='Scroll to top'
        className='p-3 text-white rounded-full shadow-lg transition'
      >
        <ArrowUp size={24} />
      </Button>
    </motion.div>
  )
}

export default ScrollToTop
