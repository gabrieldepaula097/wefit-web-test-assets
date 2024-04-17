import { useState, useEffect } from 'react'

const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent)

      if (isMobile) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    handleDeviceDetection()
    window.addEventListener('resize', handleDeviceDetection)

    return () => {
      window.removeEventListener('resize', handleDeviceDetection)
    }
  }, [])

  return isMobile
}

export default useDeviceDetection
