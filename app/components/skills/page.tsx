'use client'
import { useEffect, useState } from "react"

export default function Skills() {
  const skills = ['Vue3', 'React', 'TypeScript', 'Tailwind CSS', 'Next', 'Nuxt', 'Performance Optimization', 'Bootstrap', 'Ant Design']
  const getRam = () => (Math.random() * 100) >> 0
  const getRamLoc = (): { x: number, y: number } => {
    const x = getRam(), y = getRam()
    if (
      Math.abs(x - y) < 20 &&
      (40 < x && x < 60) &&
      (40 < y && y < 60)
    ) return getRamLoc()
    return { x, y }
  }
  const locations: any = []
  for (let i = 0; i < skills.length; i++) locations.push(getRamLoc())
  useEffect(() => {
    const domList = document.querySelectorAll('.skill-dom')
    domList.forEach((dom: any, idx) => {
      dom.style.left = `${locations[idx].x}%`
      dom.style.top = `${locations[idx].y}%`
    })
  })
  return (
    <div className="h-screen w-full flex items-center justify-center gap-20" id="Skills">
      <div className="relative h-1/2 aspect-square">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[...Array(11)].map((_, idx) => (<path d={`M${idx * 10} 0 V100`} stroke="rgba(255, 255, 255, .1)" strokeWidth="1" />))}
          {[...Array(11)].map((_, idx) => (<path d={`M0 ${idx * 10} H100`} stroke="rgba(255, 255, 255, .1)" strokeWidth="1" />))}
          <circle cx="50" cy="50" r="10" fill="transparent" stroke="#fff" />
          {
            locations.map(loc =>
              <path d={`M50 50 L${loc.x} ${loc.y}`} stroke="rgba(255, 255, 255)" strokeWidth="1" />
            )
          }
        </svg>
        {
          skills.map(
            sk => <div className="skill-dom absolute bg-cyan-500 aspect-square w-4 text-nowrap">{sk}</div>
          )
        }
      </div>
    </div>
  );
}