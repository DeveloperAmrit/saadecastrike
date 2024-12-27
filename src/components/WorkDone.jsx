import React from 'react'
import { Seperator } from './Team'
import { achievements } from '../data/decaStrikeAcheivements';

const WorkCard = ({imgsrc,title,description,ytlink,insta}) => {
    return (
        <div className='w-96 pb-3 flex flex-col items-center border-2 border-gray-400 rounded-sm'>
            <div className='w-full'>
                <img className='w-full h-72 transition-transform duration-300 hover:scale-110' src={imgsrc} alt="MEET PIC" />
            </div>
            <h1 className='text-2xl py-3 font-semibold p-3'>{title}</h1>
            <p className='p-3'>{description}</p>
            <div className='w-full py-3 flex justify-evenly items-center'>
                {ytlink && <a className='px-2 py-3 bg-rose-500 text-white rounded-sm hover:bg-rose-600' href={ytlink}>Full Interview</a>}
                {insta && <a className='px-2 py-3 bg-pink-500 text-white rounded-sm hover:bg-pink-600' href={insta}>Instagram Post</a>}
            </div>
        </div>
    );
}

const WorkDone = () => {
    return (
        <div>
            <Seperator title="ACHIEVEMENTS" />
            {achievements.map((element)=>{
                return <WorkCard key={element.imgsrc} imgsrc={element.imgsrc} title={element.title} description={element.description} ytlink={element.ytlink} insta={element.insta} />
            })}
        </div>
    )
}

export default WorkDone