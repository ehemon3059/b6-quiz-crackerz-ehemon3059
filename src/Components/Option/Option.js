import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Option.css'

const Option = ({option,correctAnswer}) => {
    const options =option;
    //console.log(options);

    function handleChange(event) {
      //  console.log(event.target.value);
        if(event.target.value === correctAnswer){
             console.log("Correct answer");
            toast.success('Correct answer!')
        }else{
             console.log("Worng answer");
            toast.error("Wrong answer.")
        }
      }
   
    return (
        <div>
            <div><Toaster/></div>
            <div className="questions-options" onChange={handleChange}>
       

                <label className='radio-container'>
                       
                    <input type="radio" name="name" value={options}  />  {options}
                    <span class="checkmark"></span>
                </label>

            </div>           
        </div>
    );
};

export default Option;