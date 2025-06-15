'use client'
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import axios from "axios"


export function RecentRegistrations() {

interface Registration {
  id: number
  noKtp: string
  name: string
  noHp: string
  status: string
  provinsi: string
  kabupaten_kota: string
  kecamatan: string
  kelurahan: string
  created_at: string | undefined
}

  const [registrations, setRegistrations] = useState<Registration[]>([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/get-anggota",
          {
            headers: {
              authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVG9rZW4iOnsiaWQiOjEsInVzZXJuYW1lIjoiYWRtaW5wdXNhdCIsInJvbGUiOiJhZG1pbl9wdXNhdCIsInByb3ZpbnNpIjpudWxsLCJrYWJ1cGF0ZW5fa290YSI6bnVsbCwia2VjYW1hdGFuIjpudWxsLCJrZWx1cmFoYW4iOm51bGx9LCJpYXQiOjE3NDk5OTA3MTAsImV4cCI6MTc0OTk5NDMxMH0.iUfExQohwYBSz5J8fTk6qj8KD24FJFSIvMUaG49qgMA"
            },
          }
        )        

        const fetchedData = response.data.data

        const mapped: Registration[] = fetchedData.map((item: any, index: number) => ({
          id: index + 1,
          name: item.name,
          kabupaten_kota: item.kabupaten_kota || "Tidak diketahui",
          date: "14 Juni 2025", // Bisa diisi dari server jika ada
          status: item.status === "aktif" ? "Terverifikasi" : "Mununggu",
        }))

        setRegistrations(mapped)
       
      } catch (error) {
        console.error("Gagal mengambil data anggota", error)
      } finally {
        // setLoading(false)
        console.error("Gagal mengambil data anggota")

      }
    }

    fetchRegistrations()
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 text-xs font-medium text-muted-foreground">
        <div>Nama</div>
        <div>Kota</div>
        <div>Tanggal Daftar</div>
        <div>Status</div>
      </div>
      <div className="space-y-2">
        {registrations.map((registration) => (
          <div key={registration.id} className="grid grid-cols-4 items-center text-sm">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={registration.name} />
                <AvatarFallback>{registration.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>{registration.name}</div>
            </div>
            <div>{registration.kabupaten_kota}</div>
            <div>12-12-12</div>
            <div>
              <Badge variant={registration.status === "Terverifikasi" ? "default" : "outline"}>
                {registration.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
