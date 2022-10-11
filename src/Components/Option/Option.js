import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Option.css'

const Option = ({option,correctAnswer}) => {
    const options =option;
    //console.log(options);

    function handleChange(event) {
      //  console.log(event.target.value);
        if(event.target.value === correctAnswer){
             console.log("Currect answer");
            toast.success('Successfully toasted!')
        }else{
             console.log("Worng answer");
            toast.error("This didn't work.")
        }
      }
   
    return (
        <div>
            <div><Toaster/></div>
            <div className="questions-options" onChange={handleChange}>
                {/* <input type="radio" id="html" name="fav_language" value={options}    />
                <label for={options}>{options}</label><br/> */}
                <input type="radio" value={options} name="gender" /> {options}

            </div>           
        </div>
    );
};

export default Option;