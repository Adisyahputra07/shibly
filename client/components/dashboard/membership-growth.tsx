"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "01/05", anggota: 120 },
  { date: "02/05", anggota: 132 },
  { date: "03/05", anggota: 145 },
  { date: "04/05", anggota: 160 },
  { date: "05/05", anggota: 178 },
  { date: "06/05", anggota: 190 },
  { date: "07/05", anggota: 205 },
  { date: "08/05", anggota: 220 },
  { date: "09/05", anggota: 234 },
  { date: "10/05", anggota: 245 },
  { date: "11/05", anggota: 258 },
  { date: "12/05", anggota: 270 },
  { date: "13/05", anggota: 285 },
  { date: "14/05", anggota: 300 },
]

export function MembershipGrowth() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="anggota" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
