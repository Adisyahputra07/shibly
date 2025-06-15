import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { UserPlus, Search, Filter, Download } from "lucide-react"
import { UserTable } from "@/components/pengguna/user-table"
import Link from "next/link"

export default function UserManagementPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Manajemen Pengguna</h1>
        <Button asChild>
          <Link href="/pengguna/tambah">
            <UserPlus className="mr-2 h-4 w-4" />
            Tambah Pengguna
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Cari pengguna..."
            className="w-full md:w-[300px]"
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Semua Pengguna</TabsTrigger>
          <TabsTrigger value="admin-provinsi">Admin Provinsi</TabsTrigger>
          <TabsTrigger value="admin-kabupaten">Admin Kabupaten</TabsTrigger>
          <TabsTrigger value="admin-kecamatan">Admin Kecamatan</TabsTrigger>
          <TabsTrigger value="admin-kelurahan">Admin Kelurahan</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Daftar Pengguna</CardTitle>
              <CardDescription>Kelola pengguna sistem dengan berbagai tingkatan akses</CardDescription>
            </CardHeader>
            <CardContent>
              <UserTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
