import React from 'react';

export default function TailwindButtonComponent (props){
    return (
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded dark:bg-indigo-600" 
        type="button"
        onClick={props.clickHandler}>
            {props.name}
        </button>
    )
}