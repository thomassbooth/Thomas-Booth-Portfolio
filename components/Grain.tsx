'use client'

import { useGlobalContext } from "@/app/Providers/GlobalProvider"

const Grain = () => {

  const { loading } = useGlobalContext()

  return !loading && (
    <div className = 'noiseOverlay'/>
  )
}

export default Grain