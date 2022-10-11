import React from 'react';
import './Option.css'

const Option = ({option,correctAnswer}) => {
    const options =option;
    //console.log(options);

    function handleChange(event) {
      //  console.log(event.target.value);
        if(event.target.value === correctAnswer){
            console.log("Currect answer");
        }else{
            console.log("Worng answer");
        }
      }
   
    return (
        <div>

            <div className="questions-options" onChange={handleChange}>
                {/* <input type="radio" id="html" name="fav_language" value={options}    />
                <label for={options}>{options}</label><br/> */}
                <input type="radio" value={options} name="gender" /> {options}

            </div>           
        </div>
    );
};

export default Option;