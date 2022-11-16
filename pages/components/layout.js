import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import data from '../json/data.json';

export default function Layout({ children }) {

  return (
    <div className='bg-zinc-900/75'>
      <Navbar/>
      <main role='main' className='pt-10 px-40 mx-auto max-w-screen-xl'>
        <h1 className='text-4xl font-bold mb-3'>{data[0].title.label}</h1>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8'></hr>

        {children}
        
        </main>
      <Footer/>
    </div>
  )
}