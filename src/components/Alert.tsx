import {
  Alert as AlertComponent,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { motion } from 'framer-motion'

export function Alert({
  type,
  children,
  id,
}: {
  type: string
  children: React.ReactNode
  id: number
}) {
  const animation = {
    initial: { opacity: 0, y: 50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  }

  const renderAlert = () => {
    switch (type) {
      case 'success':
        return (
          <AlertComponent variant="default" className="border-green-400">
            <AlertTitle className="text-green-500">Success!</AlertTitle>
            <AlertDescription className="text-green-500">
              {children}
            </AlertDescription>
          </AlertComponent>
        )

      case 'error':
        return (
          <AlertComponent
            variant="destructive"
            className="border-red-400 text-red-500"
          >
            <AlertTitle className="text-red-500">Error.</AlertTitle>
            <AlertDescription className="text-red-500">
              {children}
            </AlertDescription>
          </AlertComponent>
        )

      case 'info':
        return (
          <AlertComponent variant="default">
            <AlertTitle>{children}</AlertTitle>
          </AlertComponent>
        )
    }
  }

  return (
    <motion.div
      layout
      key={id}
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-sm shadow-lg rounded-lg overflow-hidden pointer-events-auto"
    >
      {renderAlert()}
    </motion.div>
  )
}
