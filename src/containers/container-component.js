import React, {Component} from 'react';
import TailwindButtonComponent from '../components/tailwind-button-component';
import Modal from '../components/modal-component';

export default class ContainerComponent extends Component{
    constructor(){
        super();
        this.state = {
            showModal: false,
            query: {
                query: '',
                tagName: '',
                groupByField: '',
                groupFilters: [
                    {
                        groupId: 1,
                        filters: [
                            {
                                id: 1,
                                field: '',
                                condition: '',
                                criteria: ''
                            }
                        ]
                    }
                ]
            }
        }
    }

    toggleModal = () => {
        const {showModal} = this.state;
        this.setState({showModal: !showModal})
    }

    addFilter = (groupId) => {
        console.log('add filter');
        const {query} = this.state;
        const groupFilters = query.groupFilters.map(group => {
            if(group.groupId === groupId){
                group.filters = [
                    ...group.filters,
                    {
                        field: '',
                        condition: '',
                        criteria: ''
                    }
                ]
                return group;
            }
            return group;
        })
        const newQuery = {...query, ...{groupFilters}, ...{query:'some'}}
        this.setState({query: newQuery});
    }

    addGroupFilter = () => {
        console.log('add filter');
        const {query} = this.state;
        const groupFilters = {
            groupFilters: [
                ...query.groupFilters,
                {
                    groupId: query.groupFilters.length + 1,
                    filters: [
                        {
                            field: '',
                            condition: '',
                            criteria: ''
                        }
                    ]
                }
            ]
        }
        const newQuery = {...query, ...groupFilters}
        this.setState({query: newQuery});
    }

    changeCallback = (label, value) => {
        const type = label.split('-')[0];
        if(type === 'parent'){
            const propName = label.split('-')[1]
            const {query} = this.state;
            const obj = {};
            obj[propName] = value;
            const newQuery = {...query, ...obj}
            this.setState({query: newQuery})
        } else if (type === 'filter'){
            const propName = label.split('-')[1];
            const id = label.split('-')[2];
            const {query} = this.state;
            const newFilters = query.groupFilters[0].filters.map((fil) => {
                if(fil.id === Number(id)){
                    fil[propName] = value;
                    return fil;
                }else{
                    return fil;
                }
            })
            const groupObj = {
                groupFilters: [
                    {
                        groupId: 1,
                        filters: newFilters
                    }
                ]
            }
            const queryObj = {
                query: this.getQuery(groupObj)
            }
            const newQuery = {...query, ...groupObj, ...queryObj}
            this.setState({query: newQuery})
        }
        console.log('change', label, value);
      
    }

    getQuery = (group) =>{
        let result = "";
        group.groupFilters[0].filters.forEach(fil => {
            result = `Field: ${fil.field} | Condition: ${fil.condition} | Criteria: ${fil.criteria} ||`;
        })

        return result;
    }

    render(){
        const {showModal, query} = this.state;
        console.log('state', query);
        return (
            <>
                <TailwindButtonComponent name="Open query builder" clickHandler={() => {this.toggleModal()}}/>
                {showModal && <Modal toggleModal={this.toggleModal} query={query} addFilters={this.addFilter} addGroupFilter={this.addGroupFilter} changeCallback={this.changeCallback}/>}
            </>
        )
    }
}