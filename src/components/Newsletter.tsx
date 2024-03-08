import React from 'react'
import { IoMdMailUnread } from 'react-icons/io'
import { Button } from './Button'

const Newsletter = () => {
  return (
    <form action='/thank-you'
    className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <IoMdMailUnread className="text-xl" />{" "}
        <span className='ml-3'>Stay up to date</span>
      </h2>
      <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-100'>
        Get the latest articles to your inbox. No spam. Unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <label htmlFor='email' className='sr-only'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
          placeholder='Your email'
        />
        <Button type='submit' className='ml-4 flex-none'>
          Join
        </Button>
      </div>
    </form>
  )
}

export default Newsletter
