"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const monthlyData = [
  { name: "Jan", anggota: 9800 },
  { name: "Feb", anggota: 10100 },
  { name: "Mar", anggota: 10450 },
  { name: "Apr", anggota: 10900 },
  { name: "Mei", anggota: 11500 },
  { name: "Jun", anggota: 11800 },
  { name: "Jul", anggota: 12000 },
  { name: "Agu", anggota: 12200 },
  { name: "Sep", anggota: 12345 },
]

const weeklyData = [
  { name: "Minggu 1", baru: 45, keluar: 12 },
  { name: "Minggu 2", baru: 52, keluar: 8 },
  { name: "Minggu 3", baru: 38, keluar: 15 },
  { name: "Minggu 4", baru: 65, keluar: 10 },
]

const statusData = [
  { name: "Aktif", value: 10500 },
  { name: "Tidak Aktif", value: 1200 },
  { name: "Menunggu Verifikasi", value: 645 },
]

const COLORS = ["#3b82f6", "#ef4444", "#f59e0b"]

export function MembershipReport() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Anggota</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">+26% dari tahun lalu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Anggota Baru Bulan Ini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">+7% dari bulan lalu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tingkat Retensi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+2% dari tahun lalu</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="monthly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">Bulanan</TabsTrigger>
          <TabsTrigger value="weekly">Mingguan</TabsTrigger>
          <TabsTrigger value="status">Status</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="\
