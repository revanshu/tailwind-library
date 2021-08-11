import React from 'react';
import GroupFilterComponent from './group-filter-component';
import TailwindInputComponent from './tailwind-input-component';
import TailwindSelectComponent from './tailwind-select-component';
import TailwindButtonComponent from './tailwind-button-component';

export default function QueryBuilderComponent (props){
    const {query, addFilters, addGroupFilter, changeCallback} = props;
    return (
      <div className="md:container ">
            <div>
                <div className="md:w-1/4"><TailwindInputComponent label="Tag name" value={query.tagName} propName='parent-tagName' changeCallback={changeCallback}/></div>
                <div className="md:w-1/4"><TailwindSelectComponent label="Group by field" value={query.groupByField} propName='parent-groupByField' changeCallback={changeCallback}/></div>
            </div>
            {query.groupFilters && query.groupFilters.map(group => (
                <GroupFilterComponent groupId={group.groupId} filters={group.filters} addFilters={addFilters} changeCallback={changeCallback}/>
            ))}
            <div className="py-5 md:w-1/4">
                <TailwindButtonComponent name='Add group' clickHandler={addGroupFilter}/>
            </div>
        </div>
    )
}