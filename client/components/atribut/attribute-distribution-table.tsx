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
import { MoreHorizontal, Check, X, Clock } from "lucide-react"

export function AttributeDistributionTable() {
  const [distributions] = useState([
    {
      id: "D001",
      member: {
        id: "M001",
        name: "Budi Santoso",
        city: "Surabaya",
        province: "Jawa Timur",
      },
      attributes: [
        { name: "Kartu Anggota", status: "Terkirim", date: "20 Apr 2023" },
        { name: "Seragam", status: "Terkirim", date: "22 Apr 2023" },
        { name: "Buku Panduan", status: "Terkirim", date: "20 Apr 2023" },
        { name: "Pin Organisasi", status: "Belum", date: "-" },
      ],
    },
    {
      id: "D002",
      member: {
        id: "M002",
        name: "Siti Rahayu",
        city: "Bandung",
        province: "Jawa Barat",
      },
      attributes: [
        { name: "Kartu Anggota", status: "Terkirim", date: "25 Apr 2023" },
        { name: "Seragam", status: "Proses", date: "-" },
        { name: "Buku Panduan", status: "Belum", date: "-" },
        { name: "Pin Organisasi", status: "Belum", date: "-" },
      ],
    },
    {
      id: "D003",
      member: {
        id: "M003",
        name: "Ahmad Hidayat",
        city: "Medan",
        province: "Sumatera Utara",
      },
      attributes: [
        { name: "Kartu Anggota", status: "Terkirim", date: "18 Apr 2023" },
        { name: "Seragam", status: "Terkirim", date: "20 Apr 2023" },
        { name: "Buku Panduan", status: "Terkirim", date: "18 Apr 2023" },
        { name: "Pin Organisasi", status: "Terkirim", date: "20 Apr 2023" },
      ],
    },
    {
      id: "D004",
      member: {
        id: "M004",
        name: "Dewi Lestari",
        city: "Makassar",
        province: "Sulawesi Selatan",
      },
      attributes: [
        { name: "Kartu Anggota", status: "Terkirim", date: "22 Apr 2023" },
        { name: "Seragam", status: "Terkirim", date: "25 Apr 2023" },
        { name: "Buku Panduan", status: "Proses", date: "-" },
        { name: "Pin Organisasi", status: "Belum", date: "-" },
      ],
    },
    {
      id: "D005",
      member: {
        id: "M005",
        name: "Eko Prasetyo",
        city: "Semarang",
        province: "Jawa Tengah",
      },
      attributes: [
        { name: "Kartu Anggota", status: "Belum", date: "-" },
        { name: "Seragam", status: "Belum", date: "-" },
        { name: "Buku Panduan", status: "Belum", date: "-" },
        { name: "Pin Organisasi", status: "Belum", date: "-" },
      ],
    },
  ])

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Anggota</TableHead>
            <TableHead>Kartu Anggota</TableHead>
            <TableHead>Seragam</TableHead>
            <TableHead>Buku Panduan</TableHead>
            <TableHead>Pin Organisasi</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {distributions.map((dist) => (
            <TableRow key={dist.id}>
              <TableCell className="font-medium">{dist.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={dist.member.name} />
                    <AvatarFallback>{dist.member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{dist.member.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {dist.member.city}, {dist.member.province}
                    </div>
                  </div>
                </div>
              </TableCell>
              {dist.attributes.map((attr, index) => (
                <TableCell key={index}>
                  <div className="flex items-center gap-2">
                    {attr.status === "Terkirim" && <Check className="h-4 w-4 text-green-500" />}
                    {attr.status === "Proses" && <Clock className="h-4 w-4 text-amber-500" />}
                    {attr.status === "Belum" && <X className="h-4 w-4 text-gray-300" />}
                    <div>
                      <Badge
                        variant={
                          attr.status === "Terkirim" ? "default" : attr.status === "Proses" ? "outline" : "secondary"
                        }
                      >
                        {attr.status}
                      </Badge>
                      <div className="text-xs text-muted-foreground">{attr.date}</div>
                    </div>
                  </div>
                </TableCell>
              ))}
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
                    <DropdownMenuItem>Perbarui Status</DropdownMenuItem>
                    <DropdownMenuItem>Kirim Notifikasi</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Lihat Detail</DropdownMenuItem>
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
