"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function AttributeRequestForm() {
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([])

  const handleAttributeChange = (attribute: string) => {
    setSelectedAttributes((prev) =>
      prev.includes(attribute) ? prev.filter((a) => a !== attribute) : [...prev, attribute],
    )
  }

  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="member-id">ID Anggota</Label>
          <div className="flex gap-2">
            <Input id="member-id" placeholder="Masukkan ID anggota" className="flex-1" />
            <Button variant="outline">Cari</Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="member-name">Nama Anggota</Label>
          <Input id="member-name" placeholder="Nama akan muncul otomatis setelah pencarian" disabled />
        </div>

        <div className="space-y-2">
          <Label>Atribut yang Diminta</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="kartu"
                checked={selectedAttributes.includes("kartu")}
                onCheckedChange={() => handleAttributeChange("kartu")}
              />
              <Label htmlFor="kartu">Kartu Anggota</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="seragam"
                checked={selectedAttributes.includes("seragam")}
                onCheckedChange={() => handleAttributeChange("seragam")}
              />
              <Label htmlFor="seragam">Seragam</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="buku"
                checked={selectedAttributes.includes("buku")}
                onCheckedChange={() => handleAttributeChange("buku")}
              />
              <Label htmlFor="buku">Buku Panduan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="pin"
                checked={selectedAttributes.includes("pin")}
                onCheckedChange={() => handleAttributeChange("pin")}
              />
              <Label htmlFor="pin">Pin Organisasi</Label>
            </div>
          </div>
        </div>

        {selectedAttributes.includes("seragam") && (
          <div className="space-y-2">
            <Label htmlFor="size">Ukuran Seragam</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih ukuran" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
                <SelectItem value="xxl">XXL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="reason">Alasan Permintaan</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Pilih alasan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Anggota Baru</SelectItem>
              <SelectItem value="replacement">Penggantian (Rusak/Hilang)</SelectItem>
              <SelectItem value="additional">Tambahan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Catatan Tambahan</Label>
          <Textarea id="notes" placeholder="Masukkan catatan tambahan jika ada" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="shipping-address">Alamat Pengiriman</Label>
          <Textarea id="shipping-address" placeholder="Masukkan alamat lengkap pengiriman" />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Batal</Button>
        <Button type="submit">Kirim Permintaan</Button>
      </div>
    </form>
  )
}
