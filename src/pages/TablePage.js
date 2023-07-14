import Table from "../components/Table";
import SortableTable from '../components/SortableTable';
import React from 'react'

function TablePage() {
const data = [
    {name:'orange', color:'bg-orange-500', score:'5'},
    {name:'Apple', color:'bg-red-500', score:'3'},
    {name:'Banana', color:'bg-yellow-500', score:'5'},
    {name:'Lime', color:'bg-green-500', score:'2'},

];

const config = [
    {
        label:'Name',
        render: (fruit) => fruit.name,
        sortValue: (fruit) => fruit.name
    },
    {
        label:'Color',
        render: (fruit) => <div className={`p-3 p-2 ${fruit.color}`}/>
    },
    {
        label:'Score',
        render: (fruit) => fruit.score,
        header:()=><th className="p-5">Score</th> ,
        sortValue: (fruit) => fruit.score

    },
   
];

const keyFn = (fruit) =>{
 return fruit.name;
}



  return (
    <div >
        <div>
        <Table data={data} config={config} keyFn={keyFn} />
        </div>
        <div>
        <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
    </div>
  )
}

export default TablePage