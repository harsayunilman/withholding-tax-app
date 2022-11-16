import { useState, useEffect } from 'react';

export default function Checkbox ({label, updatedMonth = 1, mSumName, cSumName, mSumChange, cSumChange, mValue, cValue}) {

    const [isChecked, setIsChecked] = useState(false);

    const Toggle = () => {
        setIsChecked(current => !current);
    };

    useEffect(() => {
        console.log('isChecked is: ', isChecked);
      }, [isChecked]
    );
    
    return ( 

            <div className='mb-5 block'>
                <div className='mt-1'>
                    <div className='flex flex-row items-center'>
                        <label>
                            <input type='checkbox' onClick={Toggle}/>
                            <span className='ml-3'>{label}</span>
                        </label>
                    </div>
                </div>

                <div className={`ml-6 ${isChecked ? '' : 'hidden'}`}>
                    <div className='mt-2'>
                    
                        <div className={`w-auto mt-6 ${updatedMonth == 12 ? 'hidden' : ''}`}>
                            <label
                                htmlFor={mSumName}  
                                className='block'>Masukan jumlah per bulan</label>
                            <div className='inline-block'>
                                <input
                                    id={mSumName} 
                                    name={mSumName} 
                                    type='number'
                                    className='w-auto inline-block mt-2 border-gray-700 border h-10 px-4 py-3' value={mValue} 
                                    placeholder='Enter amount...' 
                                    onChange={mSumChange}/>
                            </div>
                        </div>

                        <div className={`w-auto mt-6 ${updatedMonth == 12 ? '' : 'hidden'}`}>
                            <label
                                htmlFor={cSumName} 
                                className='block'>Masukan jumlah kumulatif di tahun pajak berjalan</label>
                            <div className='inline-block'>
                                <input
                                    id={cSumName}  
                                    name={cSumName}  
                                    type='number' 
                                    className='w-auto inline-block mt-2 border-gray-700 border h-10 px-4 py-3' value={cValue} 
                                    placeholder='Enter amount...' 
                                    onChange={cSumChange}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           


    );
}
