'use client'
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const RadarCities=()=>{


    const data = [
        {
          subject: 'Rabat',
          A: 150,
          fullMark: 150,
        },
        {
          subject: 'Casablanca',
          A: 150,
          fullMark: 150,
        },
        {
          subject: 'Tanger',
          A: 100,
          fullMark: 150,
        },
        {
            subject: 'Marrakech',
            A: 130,
            fullMark: 150,
          },
          {
            subject: 'Agadir',
            A: 100,
            fullMark: 150,
          },
          {
            subject: 'Kenitra',
            A: 120,
            fullMark: 150,
          },
          {
            subject: 'Mohmmedia',
            A: 130,
            fullMark: 150,
          },
          {
            subject: 'Temara',
            A: 150,
            fullMark: 150,
          },
          {
            subject: 'El Jadida',
            A: 90,
            fullMark: 150,
          },
          {
            subject: 'Salé',
            A: 140,
            fullMark: 150,
          },
          {
            subject: 'Fes',
            A: 80,
            fullMark: 150,
          },
          {
            subject: 'Oujda',
            A: 70,
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



export default RadarCities