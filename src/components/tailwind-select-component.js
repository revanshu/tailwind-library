import React from 'react';

export default function TailwindSelectComponent (props){
    const {label, options, changeCallback, propName} = props;
    return (
        <div className="w-full py-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-first-name">
                {label}
            </label>
            <select className="appearance-none block w-3/4 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:bg-gray-700 border-gray-200 dark:text-white" id="grid-first-name"
                onChange={(e) => changeCallback(propName, e.target.value)}>
                <option>Select</option>
                {options && options.map((elem) =>(
                    <option key={elem}>{elem}</option>
                ))}
            </select>
        </div>
    )
}
