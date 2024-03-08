import Container from '@/components/Container'
import React from 'react'

const NotFound = () => {
  return (
    <Container className='flex items-center justify-center py-32 sm:pt-32'>
      <div className="flex flex-col items-center gap-5">
      <p className='text-base font-semibold text-zinc-400 dark:text-zinc-500'>
        404
      </p>
      <h1 className='mt-4 text-4xl font-extrabold text-zinc-00 dark:text-zinc-400'>
        Page not found
      </h1>
      <p className='text-base font-semibold text-zinc-400 dark:text-zinc-500'>
        Sorry, we couldnt find the page youre looking for.
      </p>
       <button className="mt-4 border border-teal-700 text-teal-500 border-1 m-4 p-4 rounded-full  hover:text-teal-400 dark:hover:text-teal-100">
        Go back home
      </button>
      </div>
    </Container>
  )
}

export default NotFound
