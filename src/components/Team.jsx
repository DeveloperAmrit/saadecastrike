import React from 'react';
import Card from './Card';
import { name, tagline } from '../data/decaStrikeTeam';
import { VP, OC, coordinators, members } from '../data/decaStrikeTeam';

const Logo = () => {
  return (
    <div className='flex justify-center items-center transition-transform duration-300 hover:scale-110'>
      <img className='w-56 h-56 rounded-full' src="/assets/images/decastrike-logo.jpg" alt="LION LOGO" />
    </div>
  );
}

export const Seperator = ({ title }) => {
  return (
    <div className='w-full flex justify-center items-center py-10 gap-3'>
      <div className='w-52 bg-gray-500 h-[2px]'></div>
      <div className='text-2xl font-bold'>{title}</div>
      <div className='w-52 bg-gray-500 h-[2px]'></div>
    </div>
  );
}


const Team = () => {
  return (
    <div className='w-full flex flex-col justify-centerv items-center'>
      <div className='w-full flex justify-center gap-10 mt-6'>
        <Logo />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='py-2 text-4xl font-extrabold tracking-tight text-gray-900 transition-transform duration-300 hover:text-gray-950'>{name}</h1>
          <p className='text-lg'>{tagline}</p>
        </div>
        <Logo />
      </div>
      <Seperator title="VICE PRESIDENT" />
      <Card
        title={VP.name}
        imgsrc={VP.imgsrc}
        insta={VP.insta}
        email={VP.email}
        linkedIn={VP.linkedIn}
      />
      <Seperator title="OVERALL COORDINATORS" />
      <div className='w-full flex justify-center gap-10'>
        {OC.map((element) => {
          return (
            <Card
              key={element.email}
              title={element.name}
              imgsrc={element.imgsrc}
              insta={element.insta}
              email={element.email}
              linkedIn={element.linkedIn}
            />
          )
        })}
      </div>
      <Seperator title="SQUADRON LEADERS" />
      <div className='w-full grid grid-flow-row grid-cols-3'>
        {coordinators.map((element) => {
          return (
            <Card
              key={element.email}
              title={element.name}
              imgsrc={element.imgsrc}
              field={element.field}
              insta={element.insta}
              email={element.email}
              linkedIn={element.linkedIn}
            />
          )
        })}
      </div>
      <Seperator title="SPARTANS" />
      <div className='w-full grid grid-flow-row grid-cols-3'>
        {members.map((element) => {
          return (
            <Card
              key={element.email}
              title={element.name}
              imgsrc={element.imgsrc}
              insta={element.insta}
              email={element.email}
              linkedIn={element.linkedIn}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Team