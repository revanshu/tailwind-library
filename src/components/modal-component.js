import React from "react";
import QueryBuilderComponent from "./query-builder-component";
import TailwindButtonComponent from "./tailwind-button-component";

export default function Modal(props) {
  const {toggleModal, query, addFilters, addGroupFilter, changeCallback} = props;
  return (
    <>
          <div
            className="sm:container sm:mx-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto dark:bg-gray-800">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="items-start justify-between p-5 rounded-t dark:bg-indigo-600">
                  <div className="text-xl font-semibold dark:text-white my-3">
                    {query.query === '' ? 'Create tag query' : 'Build your query'}
                  </div>
                  <div className="text-xs dark:text-white">
                    {query.query === '' ? 
                    'The query you build will be saved in active view' : 
                    <div className="dark:bg-indigo-800 rounded p-3 font-semibold dark:text-white text-md">{query.query}</div>}
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => toggleModal()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-6 dark:bg-gray-900 p-3 overscroll-auto overflow-auto max-h-96">
                    <QueryBuilderComponent query={query} addFilters={addFilters} addGroupFilter={addGroupFilter} changeCallback={changeCallback}/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 rounded-b dark:bg-gray-900">
                  <TailwindButtonComponent name='Close' clickHandler={() => toggleModal()}/>
                  <TailwindButtonComponent name='Finish' clickHandler={() => toggleModal()}/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}