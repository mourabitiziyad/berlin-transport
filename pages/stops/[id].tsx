import React from 'react'
import { useRouter } from 'next/router'

export default function Stop() {
  const { id } = useRouter().query
  return (
    <div>{id}</div>
  )
}
