import { resources } from '../ressurser'
import React from 'react'

export default function Categorypage(props) {
    const category = props.category;
    const categoryFilter = resources.filter(info => info.category === category)
    {/*Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples*/}

    return(
        <div className="tabcontent">
            <h2>Ressurser for {category}</h2>
            <ul>
                {categoryFilter.map((info, index) => (
                    <li key={index}><a href={info.url}>{info.title}</a></li>
                ))}
            </ul>
        </div>
        /*Kilde: GitCollab https://github.com/ackarlse/gitcollab*/
    )
}