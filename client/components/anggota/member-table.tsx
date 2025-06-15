"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Edit, Trash, Eye } from "lucide-react"

export function MemberTable() {
  const [members] = useState([
    {
      id: "M001",
      name: "Budi Santoso",
      email: "budi.s@example.com",
      phone: "081234567890",
      city: "Surabaya",
      province: "Jawa Timur",
      joinDate: "14 Mei 2023",
      status: "Aktif",
      attributes: ["Kartu", "Seragam", "Buku"],
    },
    {
      id: "M002",
      name: "Siti Rahayu",
      email: "siti.r@example.com",
      phone: "081234567891",
      city: "Bandung",
      province: "Jawa Barat",
      joinDate: "14 Mei 2023",
      status: "Menunggu",
      attributes: ["Kartu"],
    },
    {
      id: "M003",
      name: "Ahmad Hidayat",
      email: "ahmad.h@example.com",
      phone: "081234567892",
      city: "Medan",
      province: "Sumatera Utara",
      joinDate: "13 Mei 2023",
      status: "Aktif",
      attributes: ["Kartu", "Seragam", "Buku", "Pin"],
    },
    {
      id: "M004",
      name: "Dewi Lestari",
      email: "dewi.l@example.com",
      phone: "081234567893",
      city: "Makassar",
      province: "Sulawesi Selatan",
      joinDate: "13 Mei 2023",
      status: "Aktif",
      attributes: ["Kartu", "Seragam"],
    },
    {
      id: "M005",
      name: "Eko Prasetyo",
      email: "eko.p@example.com",
      phone: "081234567894",
      city: "Semarang",
      province: "Jawa Tengah",
      joinDate: "12 Mei 2023",
      status: "Tidak Aktif",
      attributes: [],
    },
    {
      id: "M006",
      name: "Rina Wati",
      email: "rina.w@example.com",
      phone: "081234567895",
      city: "Denpasar",
      province: "Bali",
      joinDate: "12 Mei 2023",
      status: "Aktif",
      attributes: ["Kartu", "Seragam", "Buku"],
    },
    {
      id: "M007",
      name: "Joko Widodo",
      email: "joko.w@example.com",
      phone: "081234567896",
      city: "Solo",
      province: "Jawa Tengah",
      joinDate: "11 Mei 2023",
      status: "Aktif",
      attributes: ["Kartu", "Seragam", "Buku", "Pin"],
    },
    {
      id: "M008",
      name: "Ani Yudhoyono",
      email: "ani.y@example.com",
      phone: "081234567897",
      city: "Jakarta",
      province: "DKI Jakarta",
      joinDate: "11 Mei 2023",
      status: "Menunggu",
      attributes: [],
    },
  ])

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Kontak</TableHead>
            <TableHead>Lokasi</TableHead>
            <TableHead>Tanggal Bergabung</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Atribut</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="font-medium">{member.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>{member.name}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="grid gap-1">
                  <div className="text-sm">{member.email}</div>
                  <div className="text-xs text-muted-foreground">{member.phone}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="grid gap-1">
                  <div className="text-sm">{member.city}</div>
                  <div className="text-xs text-muted-foreground">{member.province}</div>
                </div>
              </TableCell>
              <TableCell>{member.joinDate}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    member.status === "Aktif" ? "default" : member.status === "Menunggu" ? "outline" : "secondary"
                  }
                >
                  {member.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {member.attributes.map((attr, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {attr}
                    </Badge>
                  ))}
                  {member.attributes.length === 0 && <span className="text-xs text-muted-foreground">-</span>}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">Buka menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      Lihat Detail
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Anggota
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Hapus Anggota
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
