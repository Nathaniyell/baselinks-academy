'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <main className="min-h-[70vh] w-full flex items-center justify-center text-titles">
        
            <div className='max-w-[500px] w-[97%] hover:shadow-md flex flex-col items-center justify-center gap-5 p-4 rounded-md'>
            
                <h1 className="font-bold text-3xl md:text-4xl">Unknown Error</h1>
                
                <p className='md:text-lg text-center'>Something went wrong</p>

                <button className='bg-backgrounds text-white hover:bg-opacity-20 rounded-md p-3 transition-all duration-300' onClick={() => reset()}>Try again</button>
                
            </div>
            
        </main>
  )
}