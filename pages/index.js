import Head from 'next/head'
import data from './json/data.json'
import Link from 'next/link'
import Layout from '../pages/components/layout'

export default function Index() {

  return (
    <Layout>
      <div>
        <Head>
          <title>Withholding Tax App</title>
        </Head>

        <div className='block mb-6'>
          <p className='mb-6'>{data[0].title.intro1}</p>
          <p className='mb-6'>{data[0].title.intro2}</p>
          <div className='block mb-6'>
            <p>{data[1].taxableIncome.label}</p>
            <div className='ml-3'>
              {data[1].taxableIncome.legend.map((income, index) => (
              <div className='mt-3 flex w-auto items-center' key={index}>
                <ul className='list-outside'><li className='list-disc ml-2 text-sm'>{income.income}</li></ul>

              </div>
            
                ))}
            </div>
          </div>
        </div>

        <div className='flex'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Link href='/steps/aboutYou'>Mulai</Link>
          </button>
        </div>

      </div>
    </Layout>
  );
}