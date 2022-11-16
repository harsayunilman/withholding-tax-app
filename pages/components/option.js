export default function Option ({label, content, nullContent, onChosen, required, optionName, isChosen, idYes, idNo}) {

    return (
        <div className='mb-5'>
            <div className='block mb-5'>
                <span>{label}</span>
                <div className='flex items-center mt-3'>
                    <input
                        id={idYes}
                        name={optionName}
                        type='radio' 
                        value='true'
                        className='input h-5 w-5'            
                        onChange={onChosen}
                        required={required}
                        >
                    </input>
                    <label 
                        htmlFor={idYes} 
                        className='ml-2'
                        >Ya
                    </label>
                </div>
                <div className='flex items-center mt-3'>
                    <input
                        id={idNo}
                        name={optionName} 
                        type='radio'
                        value='false' 
                        className='input h-5 w-5'             
                        onChange={onChosen}
                        required={required}
                        >
                    </input>
                    <label 
                        htmlFor={idNo} 
                        className='ml-2'
                        >Tidak
                    </label>
                </div>
            </div>

            <div className={`${isChosen == 'true' ? '' : 'hidden'}`}>{content}</div>

            <div className={`${isChosen == 'false' ? '' : 'hidden'}`}>{nullContent}</div>

        </div>
    )
}