import React from 'react'
import { Seperator } from './Team'
import { achievements } from '../data/decaStrikeAcheivements';

const WorkCard = ({imgsrc,title,description,ytlink,insta,date}) => {
    return (
        <div className='w-full max-w-96 pb-3 flex flex-col items-center border-2 border-gray-400 rounded-sm'>
            <div className='w-full'>
                <img className='w-full h-72 transition-transform duration-300 hover:scale-110' src={imgsrc} alt="MEET PIC" />
            </div>
            <h1 className='text-xl sm:text-2xl py-3 font-semibold p-3'>{title}</h1>
            <p className='p-3 '>{description}</p>
            <div className='w-full py-3 flex justify-evenly items-center'>
                {ytlink && <a className='px-2 py-3 bg-rose-500 text-white rounded-sm hover:bg-rose-600 active:bg-rose-800 transition-transform duration-300 hover:scale-110' href={ytlink} target='__blank'>Full Interview</a>}
                {insta && <a className='px-2 py-3 bg-pink-500 text-white rounded-sm hover:bg-pink-600 active:bg-pink-800 transition-transform duration-300 hover:scale-110' href={insta} target='__blank'>Instagram Post</a>}
            </div>
            <p className='p-3'>{date}</p>
        </div>
    );
}

const WorkDone = () => {
    return (
        <div className='flex flex-col items-center'>
            <Seperator title="ACHIEVEMENTS" />
            <div className='md:w-full grid grid-flow-row grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
                {achievements.map((element)=>{
                    return <WorkCard key={element.imgsrc} imgsrc={element.imgsrc} title={element.title} description={element.description} ytlink={element.ytlink} insta={element.insta} date={element.date}/>
                })}
            </div>
        </div>
    )
}

export default WorkDone