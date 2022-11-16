import Head from 'next/head';
import Layout from '../components/layout';
import { useState } from 'react';
import data from '../json/data.json';
import Link from 'next/link'

export default function AboutYou() {

  const [selectedOption, setSelectedOption] = useState(false)
  const [selectedModel, setSelectedModel] = useState(0)

  return (
    <Layout>

      <div className='mb-12'>
        <Head>
          <title>{data[0].title.heading}</title>
        </Head>

        <div className='block mb-6 pb-6'>
          <h2 className='text-2xl font-bold fade-in'>{data[0].title.aboutYou}</h2>
          <form action='#' class='w-full' novalidate>
            <div className='block fade-in'>
              <fieldset className='mt-6'>
                <label>{data[2].domicile.label}</label>
                <div>
                  {data[2].domicile.legend.map((isWNI, index) => (

                    <div className='radio mt-3 flex w-auto items-center' key={index}>
                      <input type='radio' 
                            className='input' 
                            name='option'
                            value={isWNI.isWNI}              
                            onChange={e=>setSelectedOption(e.target.value)}
                            >
                      </input>
                      <label className='ml-2 text-sm'>{isWNI.option}</label>
                    </div>
            
                ))}
                </div>
              </fieldset>
            </div>
          </form>
        </div> 

        {
        selectedOption === "true" && 
        <div className='block mb-6 pb-6'>

          <h2 className='text-2xl font-bold fade-in'>{data[4].taxObject.title}</h2>
          <form action='#' class='w-full' novalidate>
            <div className='block fade-in mb-6'>
              <fieldset className='mt-6'>
                <label>{data[4].taxObject.label}</label>
                <div>
                  {data[4].taxObject.legend.map((model, index) => (

                    <div className='radio mt-3 flex w-auto items-center' key={index}>
                      <input type='radio' 
                            className='input' 
                            name='option'
                            value={model.model}              
                            onChange={e=>setSelectedModel(e.target.value)}
                            >
                      </input>
                      <label className='ml-2 text-sm'>{model.object}</label>
                    </div>
            
                ))}
                </div>
              </fieldset>
            </div>
          </form>

          <div className='flex'>
                       
              {
                selectedModel === "0" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model0'>Next</Link>
                </button>
              }

              {         
                selectedModel === "1" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model1'>Next</Link>
                </button>
              }

              {
                selectedModel === "2" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model2'>Next</Link>
                </button>
              }

              {
                selectedModel === "3" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model3'>Next</Link>
                </button>
              }

              {
                selectedModel === "4" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model4'>Next</Link>
                </button>
              }


              {
                selectedModel === "5" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model5'>Next</Link>
                </button>
              }

              { 
                selectedModel === "6" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model6'>Next</Link>
                </button>
              }

              {
                selectedModel === "7" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model7'>Next</Link>
                </button>
              }

              {
                selectedModel === "8" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model8'>Next</Link>
                </button>
              }

              {
                selectedModel === "9" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model9'>Next</Link>
                </button>
              }

              {
                selectedModel === "10" &&
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link href='/steps/model10'>Next</Link>
                </button>
              }

          </div>

        </div>
        }

        {
        selectedOption === "false" &&
        <div className='block mb-6 pb-6'>

          <h2 className='text-2xl font-bold fade-in'>{data[3].wnaTitle}</h2>
          <div className='block mt-6 mb-6'>
            <p className='mt-3'>{data[3].wnaIntro}</p>
            <div className='ml-3'>
              {data[3].wnaException.map((exception, index) => (
              <div className='list mt-3 flex w-auto items-center' key={index} >
                <ul classname='list-outside'>
                  <li className='text-sm list-disc ml-2'>{exception.exception}</li>
                </ul>
              </div>
              ))}
            </div>
          </div>
          
          <div className='flex'>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <Link href='/steps/model11'>Next</Link>
            </button>
          </div>

        </div>
        }

      </div>

    </Layout>
  );
}