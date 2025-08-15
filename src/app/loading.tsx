import { Square } from 'lucide-react'
import React from 'react'

function Loading() {
  return (
    <section className='page-height p-5 flex items-center justify-center'>
        Loading
        <Square className="animate-spin ml-2 text-blue-800" />
    </section>
  )
}

export default Loading