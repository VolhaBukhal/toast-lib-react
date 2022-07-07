import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export const useToastPortal = () => {
  const [loaded, setLoaded] = useState(false)
  const [portalId] = useState(`${uuid()}`)

  useEffect(() => {
    const div = document.createElement('div')
    div.setAttribute('id', portalId)
    document.getElementsByTagName('body')[0].prepend(div)
    setLoaded(true)

    return () => {
      document.getElementsByTagName('body')[0].removeChild(div)
    }
  }, [portalId])

  return { loaded, portalId }
}
