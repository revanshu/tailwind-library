import React from 'react';
import FilterComponent from './filter-component';

export default function GroupFilterComponent(props){
    const {groupId, filters, changeCallback} = props;
    return (
        <div className="p-3 my-3 border border-gray-700 rounded dark:bg-gray-800">
            {filters && filters.map(filter => (
                <FilterComponent filter={filter} id={filter.id} changeCallback={changeCallback}/>
            ))}
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded dark:bg-indigo-600" 
                type="button"
                onClick={() => {props.addFilters(groupId)}}>
                Add filter
            </button>
        </div>
    );
}