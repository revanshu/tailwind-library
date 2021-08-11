import React from 'react';
import TailwindSelectComponent from './tailwind-select-component';

export default function FilterComponent(props){
    const fields = ['Theme', 'Sub Theme', 'Reason', 'Language'];
    const conditions = ['Does not equal', 'Equals', 'Like', 'Not like', 'Is'];
    const criterias = ['Performance', 'Platform', 'Product Feedback'];
    const {changeCallback, id} = props;
    return (
        <div className="flex">
            <TailwindSelectComponent label="Field" options={fields} changeCallback={changeCallback} propName={"filter-field-"+id}/>
            <TailwindSelectComponent label="Condition" options={conditions} changeCallback={changeCallback} propName={"filter-condition-"+id}/>
            <TailwindSelectComponent label="Criteria" options={criterias} changeCallback={changeCallback} propName={"filter-criteria-"+id}/>
        </div>
    );
}