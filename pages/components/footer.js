import Link from 'next/link'

export function Footer() {
  return (

<footer className='p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 bottom-0 w-full'>
    <div className='sm:flex sm:items-center sm:justify-center'>
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
                <Link href='#' className='mr-4 hover:underline md:mr-6 '>About</Link>
            </li>
            <li>
                <Link href='#' className='mr-4 hover:underline md:mr-6'>Privacy Policy</Link>
            </li>
            <li>
                <Link href='#' className='mr-4 hover:underline md:mr-6 '>Licensing</Link>
            </li>
            <li>
                <Link href='#' className='hover:underline'>Contact</Link>
            </li>
        </ul>
    </div>
    <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8'></hr>
    <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>2022 © Harsa Yunilman. All Rights Reserved.
    </span>
</footer>

  )
}