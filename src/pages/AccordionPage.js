import React from 'react';
import Accordion from '../components/Accordion';
function AccordionPage() {
    const items = [
        {
            id: 'cvb',
            label: 'can I use React on a project' ,
            content: ' you can use any project on react'
        },
        {
            id: 'hg',
            label: 'Can i use Javascript on a project',
            content: 'you can use any project on react'
        },
        {
            id: 'kjhg',
            label: 'Can I use CSS on a project',
            content: 'you can use any project on react'
        }
    ]
return (<Accordion items={items}/>)
}

export default AccordionPage;