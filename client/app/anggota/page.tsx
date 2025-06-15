import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Filter, Download, Plus } from "lucide-react"
import { MemberTable } from "@/components/anggota/member-table"

export default function MembersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          <h1 className="text-lg font-semibold">Organisasi X</h1>
        </div>
        <nav className="ml-auto flex items-center gap-4 md:gap-6">
          <Button variant="outline" size="sm">
            Dashboard
          </Button>
          <Button size="sm">Anggota</Button>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Manajemen Anggota</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Anggota
          </Button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Cari anggota..."
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
            <TabsTrigger value="all">Semua Anggota</TabsTrigger>
            <TabsTrigger value="active">Aktif</TabsTrigger>
            <TabsTrigger value="pending">Menunggu Verifikasi</TabsTrigger>
            <TabsTrigger value="inactive">Tidak Aktif</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Daftar Anggota</CardTitle>
                <CardDescription>Total 12,345 anggota terdaftar di seluruh Indonesia</CardDescription>
              </CardHeader>
              <CardContent>
                <MemberTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
