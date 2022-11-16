import Head from 'next/head'
import Layout from '../components/layout'
import { useState } from 'react'
import data from '../json/data.json'
import Accordion from '../components/accordion'
import Checkbox from '../components/checkbox'
import Option from '../components/option'
import SelectMonth from '../components/selectmonth'
import {useRouter} from 'next/router'

export default function Model0() {

  const router = useRouter()

  const [isChosen1, setIsChosen1] = useState (false);
  const [isChosen2, setIsChosen2] = useState (false);
  const [isChosen3, setIsChosen3] = useState (false);
  const [isChosen4, setIsChosen4] = useState (false);
  const [isChosen5, setIsChosen5] = useState (false);
  const [isChosen6, setIsChosen6] = useState (false);
  const [isChosen7, setIsChosen7] = useState (false);
  const [isChosen8, setIsChosen8] = useState (false);

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedStartMonth, setSelectedStartMonth] = useState('');
  const [selectedPensionMonth, setSelectedPensionMonth] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const report0 = {
      taxMonth: event.target.taxMonth?.value,
      startMonth: event.target.startMonth?.value,
      pensionMonth: event.target.pensionMonth?.value,
      
      marriageType: event.target.marriageType?.value,
      dependentNo: event.target.dependentNo?.value,
      isNewJob: event.target.isNewJob?.value,
      isNewTaxSubject: event.target.isNewTaxSubject?.value,
      isResigned: event.target.isResigned?.value,
      isNoLongerTaxSubject: event.target.isNoLongerTaxSubject?.value,
      isGoingToRetire: event.target.isGoingToRetire?.value,
      IsRetirementDateKnown: event.target.IsRetirementDateKnown?.value,
      isNPWP: event.target.isNPWP?.value,

      mSumBaseSalary: event.target.mSum0?.value,
      mSumPPhAllowance: event.target.mSum1?.value,
      mSumOtherAllowance: event.target.mSum2?.value,
      mSumOvertime: event.target.mSum3?.value,
      mSumJKK: event.target.mSum4?.value,
      mSumJKM: event.target.mSum5?.value,
      mSumJPK: event.target.mSum6?.value,
      mSumInsurance: event.target.mSum7?.value,

      mSumSharedProfit: event.target.mSum8?.value,
      mSumTantiem: event.target.mSum9?.value,
      mSumGratification: event.target.mSum10?.value,
      mSumBonus: event.target.mSum11?.value,
      mSumPremium: event.target.mSum12?.value,
      mSumIDAllowance: event.target.mSum13?.value,
      mSumOthers: event.target.mSum14?.value,

      cSumBaseSalary: event.target.cSum0?.value,
      cSumPPhAllowance: event.target.cSum1?.value,
      cSumOtherAllowance: event.target.cSum2?.value,
      cSumOvertime: event.target.cSum3?.value,
      cSumJKK: event.target.cSum4?.value,
      cSumJKM: event.target.cSum5?.value,
      cSumJPK: event.target.cSum6?.value,
      cSumInsurance: event.target.cSum7?.value,

      cSumSharedProfit: event.target.cSum8?.value,
      cSumTantiem: event.target.cSum9?.value,
      cSumGratification: event.target.cSum10?.value,
      cSumBonus: event.target.cSum11?.value,
      cSumPremium: event.target.cSum12?.value,
      cSumIDAllowance: event.target.cSum13?.value,
      cSumOthers: event.target.cSum14?.value, 
    }

    const JSONdata = JSON.stringify(report0)

    sessionStorage.setItem('report0Items', JSONdata)

    /*   
    const endpoint = '/api/form' 
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }  
    const response = await fetch(endpoint, options);
    const result = await response.json()
    */

    router.push('/steps/result0')
    }

  return (
    <Layout>

      <div className='mb-12'>
        <Head>
          <title>{data[0].title.heading}</title>
        </Head>

      <div>
        <form 
          className= 'w-full' 
          action='/steps/result0'
          method='POST'
          onSubmit={handleSubmit} >

          {/* Masa Pajak */}
          <Accordion
            isExpanded={isExpanded1}
            toggle={e=>setIsExpanded1(current => !current)} 
            title='Masa Pajak'
            content={        
              <div className='w-auto block mb-5'>
                <label
                  htmlFor='taxMonth' 
                  className='block'>Pilih bulan yang pajaknya akan dihitung:
                </label>
                <div className='inline-block'>
                  <select 
                    name='taxMonth'
                    id='taxMonth'
                    required
                    className='w-30 inline-block mt-2 border-gray-700 border h-10 pl-4' 
                    onChange={e=>setSelectedMonth(e.target.value)} 
                    >
                    {data[8].month.legend.map((month, index) => (
                      <option key={index} value={month.value}>{month.month}</option>
                    ))}
                  </select>
                </div>
              </div>    
              }>
            </Accordion>

          {/* Masa Bekerja */}
          <Accordion
            isExpanded={isExpanded2}
            toggle={e=>setIsExpanded2(current => !current)} 
            title='Masa Bekerja'
            content={
              <div>
                <div className='mt-1'>              
                  <Option
                    idYes='isNewJob'
                    idNo='notANewJob'
                    optionName='isNewJob'
                    required={true}
                    isChosen={isChosen1}
                    onChosen={e=>setIsChosen1(e.target.value)}
                    label='Apakah pekerja mulai bekerja di dalam tahun pajak yang berjalan?'
                    content={
                      <div>                  
                        <SelectMonth 
                          optionName='startMonth'
                          label='Masukan bulan mulai bekerja:' 
                          updateMonthOption={e=>setSelectedStartMonth(e.target.value)} 
                        ></SelectMonth>
                          <div className='mt-5'>              
                            <Option
                              idYes='notANewTaxSubject'
                              idNo='isNewTaxSubject'
                              optionName='isNewTaxSubject'
                              isChosen={isChosen2}
                              onChosen={e=>setIsChosen2(e.target.value)}
                              label='Apakah pekerja sudah memiliki kewajiban pajak subjektif pada saat awal tahun pajak?'
                            >
                            </Option>
                          </div>
                    </div>
                    }>
                  </Option>
                </div>            
                <div className='mt-5'>              
                  <Option
                    idYes='Resigned'
                    idNo='notResigned'
                    optionName='isResigned'
                    required={true}
                    label='Apakah pekerja berhenti bekerja di dalam bulan yang berjalan?'
                    isChosen={isChosen3}
                    onChosen={e=>setIsChosen3(e.target.value)}
                    content={              
                      <div className='mt-5'>              
                        <Option
                          idYes='isNoLongerTaxSubject'
                          idNo='stillATaxSubject'
                          optionName='isNoLongerTaxSubject'
                          isChosen={isChosen4}
                          onChosen={e=>setIsChosen4(e.target.value)}
                          label='Apakah kewajiban pajak subjektif pekerja juga berakhir pada saat berhenti bekerja?'
                        >
                        </Option>
                      </div>
                    }
                    nullContent={
                      <div className='mt-5'>              
                        <Option
                          idYes='isGoingToRetire'
                          idNo='notGoingToRetire'
                          optionName='isGoingToRetire'
                          isChosen={isChosen7}
                          onChosen={e=>setIsChosen7(e.target.value)}
                          label='Apakah pekerja akan memasuki masa pensiun di dalam tahun pajak berjalan?'
                          content={
                            <div className='mt-5'>              
                            <Option
                              idYes='retirementDateKnown'
                              idNo='retirementDateNotKnown'
                              optionName='IsRetirementDateKnown'
                              isChosen={isChosen8}
                              onChosen={e=>setIsChosen8(e.target.value)}
                              label='Apakah waktu pekerja akan memasuki masa pensiun dapat diketahui dengan pasti pada saat awal tahun pajak?'
                              content={
                                <SelectMonth 
                                  optionName='pensionMonth' 
                                  label='Masukan bulan waktu pekerja akan pensiun:' 
                                  updateMonthOption={e=>setSelectedPensionMonth(e.target.value)} 
                                ></SelectMonth>
                              }>
                            </Option>
                          </div>
                          }
                          >
                        </Option>
                      </div>
                    }>
                  </Option>
                </div>
              </div>
            }>
          </Accordion>

          {/* MPenghasilan Teratur */}
          <Accordion
            isExpanded={isExpanded3}
            toggle={e=>setIsExpanded3(current => !current)}   
            title={data[6].regularIncome.title}
            content={            
              <div>{data[6].regularIncome.legend.map((regularIncomeType, index) => (
                <Checkbox
                  mSumName={regularIncomeType.mSum}
                  cSumName={regularIncomeType.cSum}
                  updatedMonth={selectedMonth} 
                  key={index} 
                  label={regularIncomeType.regularIncomeType}
                  ></Checkbox>))}
              </div>
            }>
            </Accordion>
          
          {/* Penghasilan Tidak Teratur */}
          <Accordion 
            isExpanded={isExpanded4}
            toggle={e=>setIsExpanded4(current => !current)} 
            title={data[7].irregularIncome.title}
            content={            
              <div>{data[7].irregularIncome.legend.map((irregularIncomeType, index) => (
                <Checkbox
                  mSumName={irregularIncomeType.mSum}
                  cSumName={irregularIncomeType.cSum} 
                  updatedMonth={selectedMonth} 
                  key={index} 
                  label={irregularIncomeType.irregularIncomeType}
                ></Checkbox>))}
              </div>
            }>
          </Accordion>

          {/* Informasi Keluarga */}
          <Accordion
            isExpanded={isExpanded5}
            toggle={e=>setIsExpanded5(current => !current)}
            title='Informasi Keluarga'
            content={
              <div>
                <div className='mb-5'>
                  <label>{data[9].marriageStatus.label}</label>
                  <div>
                    {data[9].marriageStatus.legend.map((marriageType, index) => (
                      <div className='radio mt-3 flex w-auto items-center' key={index}>
                        <input
                          id={marriageType.value}
                          name='marriageType' 
                          type='radio'
                          required={true}
                          className='input h-5 w-5' 
                          value={marriageType.value}            
                          onChange={e=>setIsChosen5(e.target.value)}
                        ></input>
                        <label
                          htmlFor={marriageType.value} 
                          className='ml-2'
                          >{marriageType.marriageType}
                        </label>
                        </div>
                      ))}
                    </div>
                  </div>
                <div className='mb-5'>
                  <label>{data[10].dependent.label}</label>
                  <div>
                    {data[10].dependent.legend.map((dependentNo, index) => (
                      <div className='radio mt-3 flex w-auto items-center' key={index}>
                        <input
                          id={dependentNo.id}
                          type='radio'
                          required={true}
                          className='input h-5 w-5' 
                          name='dependentNo'
                          value={dependentNo.dependentNo}            
                          onChange={e=>setIsChosen5(e.target.value)}
                        ></input>
                        <label
                          htmlFor={dependentNo.id} 
                          className='ml-2'
                          >{dependentNo.dependentNo}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
            ></Accordion>

          {/* NPWP */}
            <Accordion
              isExpanded={isExpanded6}
              toggle={e=>setIsExpanded6(current => !current)}
              title='NPWP'
              content={ 
                <Option
                  idYes='yesNPWP'
                  idNo='noNPWP'
                  optionName='isNPWP'
                  required={true}
                  isChosen={isChosen6}
                  onChosen={e=>setIsChosen6(e.target.value)}
                  label='Apakah pekerja sudah memiliki Nomor Pokok Wajib Pajak (NPWP)?'
                ></Option>
              }>

            </Accordion>
          
          {/* Submit Button */}
            <div className='flex'>
              <button
                id='submit0'
                name='submit0' 
                type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 mr-2 mb-20 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
               Masukan
              </button>
            </div>

          </form>
        </div>

      </div>
    </Layout>
  );
}