"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function UserForm({ user = null, mode = "add", onClose }) {
  const [formData, setFormData] = useState({
    username: user?.username || "",
    name: user?.name || "",
    level: user?.level || "",
    area: user?.area || "",
    password: "",
    confirmPassword: "",
    isActive: user?.status === "Aktif",
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="level">Tingkatan Pengguna</Label>
        <Select value={formData.level} onValueChange={(value) => handleChange("level", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih tingkatan pengguna" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Admin Provinsi">Admin Provinsi</SelectItem>
            <SelectItem value="Admin Kabupaten">Admin Kabupaten</SelectItem>
            <SelectItem value="Admin Kecamatan">Admin Kecamatan</SelectItem>
            <SelectItem value="Admin Kelurahan">Admin Kelurahan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="area">Wilayah Kerja</Label>
        <Input
          id="area"
          value={formData.area}
          onChange={(e) => handleChange("area", e.target.value)}
          placeholder="Contoh: DKI Jakarta, Jatinegara, Kramat Jati"
          required
        />
        <p className="text-xs text-muted-foreground">Masukkan wilayah kerja sesuai dengan tingkatan pengguna</p>
      </div>

      {mode === "add" && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                required={mode === "add"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                required={mode === "add"}
              />
            </div>
          </div>
        </>
      )}

      <div className="flex items-center space-x-2">
        <Switch
          id="isActive"
          checked={formData.isActive}
          onCheckedChange={(checked) => handleChange("isActive", checked)}
        />
        <Label htmlFor="isActive">Pengguna Aktif</Label>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Batal
        </Button>
        <Button type="submit">{mode === "add" ? "Tambah Pengguna" : "Simpan Perubahan"}</Button>
      </div>
    </form>
  )
}
