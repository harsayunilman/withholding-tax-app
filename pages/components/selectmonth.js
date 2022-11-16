import { useState } from 'react';
import data from '../json/data.json';

export default function SelectMonth ({ label, updateMonthOption, required, optionName}) {

    return (

      <div className='w-auto block'>
        <label 
          htmlFor={optionName}
          className='block'>{label}
        </label>
        <div className='inline-block'>
          <select
            id={optionName} 
            name={optionName} 
            className='w-30 inline-block mt-2 border-gray-700 border h-10 pl-4' 
            onChange={updateMonthOption} 
            required={required}
            >
            {data[8].month.legend.map((month, index) => (
              <option key={index} value={month.value}>{month.month}</option>
            ))}
          </select>
        </div>
      </div>



    )
}