"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { UserForm } from "@/components/pengguna/user-form"

export default function AddUserPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/pengguna">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold">Tambah Pengguna Baru</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Informasi Pengguna</CardTitle>
          <CardDescription>
            Tambahkan pengguna baru dengan mengisi formulir berikut. Pastikan untuk memilih tingkatan pengguna dan
            wilayah kerja yang sesuai.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserForm mode="add" onClose={() => (window.location.href = "/pengguna")} />
        </CardContent>
      </Card>
    </div>
  )
}
