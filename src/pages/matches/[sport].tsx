import React from 'react'
import FeaturedMatch from '../../modules/Sportspage/FeaturedMatch'
import Leauges from '../../modules/Sportspage/Leauges'
import Matches from '../../modules/Sportspage/Matches'
import SportsPageBanner from '../../modules/Sportspage/SportsPageBanner'

const Sport = () => {
  const soccerData  = [
    {leauge:"Premiere Leauge",matches:[
    {team1:"Chelsea",team2:"Liverpool",time : "20:00 Tomorrow",Odd1:2.5 ,Odd:1.58 ,Odd2:2.56},
    {team1:"Everton",team2:"Manchester United",time : "21:00 Today",Odd1:1.25 ,Odd:1.58 ,Odd2:1.56},
    {team1:"Arsenal",team2:"Manchester City",time : "18:00 Today",Odd1:1.25 ,Odd:1.58 ,Odd2:1.56},

  ]},
  {leauge:"La liga",matches:[
    {team1:"Barcelon",team2:"Athletico Madrid",time : "20:00 Tomorrow",Odd1:2.5 ,Odd:1.58 ,Odd2:2.56},
    {team1:"Real Madrid",team2:"Celtica",time : "21:00 Today",Odd1:1.25 ,Odd:1.58 ,Odd2:1.56},
    {team1:"Villarial",team2:"Sevilla",time : "18:00 Today",Odd1:1.25 ,Odd:1.58 ,Odd2:1.56},

  ]},
] 
  return (
    <main >
    <div className='grid grid-cols-3'>
        <div className='col-span-1 mx-4 mt-4  '>
            <FeaturedMatch />
            <Leauges />
        </div>

        <div className='col-span-2  mx-2 mt-9 '>
            <SportsPageBanner />
            <Matches />
        </div>
    </div>
</main>
  )
}

export default Sport
