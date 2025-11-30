import { useEffect, useState } from 'react'
import type { IAlertState } from '@/types/common'

export function useAlerts() {
  const [alerts, setAlert] = useState<IAlertState[]>([])

  function addAlert(type: 'success' | 'error' | 'info', message: string) {
    const id = Date.now()
    const newAlert: IAlertState = { id, type, message }
    setAlert((prevAlerts) => [...prevAlerts, newAlert])
  }

  function removeAlert(id: number) {
    setAlert((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id))
  }

  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        removeAlert(alerts[0].id)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [alerts, removeAlert])

  return {
    alerts,
    addAlert,
    removeAlert,
  }
}
