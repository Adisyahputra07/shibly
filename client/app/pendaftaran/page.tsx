"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, ArrowRight, Check } from "lucide-react"

export default function RegistrationPage() {
  const [step, setStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const provinces = [
    "Aceh",
    "Sumatera Utara",
    "Sumatera Barat",
    "Riau",
    "Jambi",
    "Sumatera Selatan",
    "Bengkulu",
    "Lampung",
    "Kepulauan Bangka Belitung",
    "Kepulauan Riau",
    "DKI Jakarta",
    "Jawa Barat",
    "Jawa Tengah",
    "DI Yogyakarta",
    "Jawa Timur",
    "Banten",
    "Bali",
    "Nusa Tenggara Barat",
    "Nusa Tenggara Timur",
    "Kalimantan Barat",
    "Kalimantan Tengah",
    "Kalimantan Selatan",
    "Kalimantan Timur",
    "Kalimantan Utara",
    "Sulawesi Utara",
    "Sulawesi Tengah",
    "Sulawesi Selatan",
    "Sulawesi Tenggara",
    "Gorontalo",
    "Sulawesi Barat",
    "Maluku",
    "Maluku Utara",
    "Papua",
    "Papua Barat",
  ]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          <h1 className="text-lg font-semibold">Organisasi X</h1>
        </div>
        <nav className="ml-auto flex items-center gap-4 md:gap-6">
          <Button variant="outline" size="sm">
            Masuk
          </Button>
          <Button size="sm">Daftar</Button>
        </nav>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
        <div className="mx-auto w-full max-w-md">
          {!formSubmitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Pendaftaran Anggota Baru</CardTitle>
                <CardDescription>Lengkapi formulir berikut untuk bergabung dengan Organisasi X</CardDescription>
              </CardHeader>
              <CardContent>
                {step === 1 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="Masukkan nama lengkap" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="birthplace">Tempat Lahir</Label>
                        <Input id="birthplace" placeholder="Kota kelahiran" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthdate">Tanggal Lahir</Label>
                        <Input id="birthdate" type="date" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Jenis Kelamin</Label>
                      <RadioGroup defaultValue="laki-laki" className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="laki-laki" id="laki-laki" />
                          <Label htmlFor="laki-laki">Laki-laki</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="perempuan" id="perempuan" />
                          <Label htmlFor="perempuan">Perempuan</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nik">NIK (Nomor Induk Kependudukan)</Label>
                      <Input id="nik" placeholder="16 digit NIK" maxLength={16} required />
                    </div>
                  </form>
                )}

                {step === 2 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Alamat Lengkap</Label>
                      <Textarea id="address" placeholder="Masukkan alamat lengkap" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province">Provinsi</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih provinsi" />
                        </SelectTrigger>
                        <SelectContent>
                          {provinces.map((province) => (
                            <SelectItem key={province} value={province.toLowerCase()}>
                              {province}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Kota/Kabupaten</Label>
                      <Input id="city" placeholder="Masukkan kota/kabupaten" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal">Kode Pos</Label>
                      <Input id="postal" placeholder="5 digit kode pos" maxLength={5} required />
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="nama@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input id="phone" placeholder="Contoh: 081234567890" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Kata Sandi</Label>
                      <Input id="password" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Konfirmasi Kata Sandi</Label>
                      <Input id="confirm-password" type="password" required />
                    </div>
                    <div className="flex items-center space-x-2 pt-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        Saya menyetujui syarat dan ketentuan Organisasi X
                      </Label>
                    </div>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button variant="outline" onClick={handlePrevStep}>
                    Kembali
                  </Button>
                ) : (
                  <div></div>
                )}
                {step < 3 ? (
                  <Button onClick={handleNextStep}>
                    Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit}>Daftar</Button>
                )}
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Pendaftaran Berhasil!</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mx-auto my-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <p>
                  Terima kasih telah mendaftar sebagai anggota Organisasi X. Kami akan memverifikasi data Anda dan
                  mengirimkan informasi selanjutnya melalui email.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => (window.location.href = "/")}>Kembali ke Beranda</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
