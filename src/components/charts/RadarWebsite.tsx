'use client'
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const RadarWebsite=()=>{


    const data = [
        {
          subject: 'Avito',
          A: 130,
          fullMark: 150,
        },
        {
          subject: 'Mubawab',
          A: 10,
          fullMark: 150,
        },
        {
          subject: 'Masaken',
          A: 10,
          fullMark: 150,
        },
      
      ];

    return (
        <ResponsiveContainer width="100%" height={180}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
}



export default RadarWebsite