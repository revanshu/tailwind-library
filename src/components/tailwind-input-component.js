import React from 'react';

export default function TailwindInputComponent (props){
    return (
        <div className="w-full py-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-first-name">
                {props.label}
            </label>
            <input className="appearance-none block w-3/4 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:bg-gray-700 border-gray-200" id="grid-first-name" type="text" placeholder="Jane" 
            onChange={(event) => {props.changeCallback(props.propName, event.target.value)}}/>
        </div>
    )
}