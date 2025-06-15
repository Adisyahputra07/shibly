import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Users, Search, Filter, Download, Package } from "lucide-react"
import { AttributeDistributionTable } from "@/components/atribut/attribute-distribution-table"
import { AttributeRequestForm } from "@/components/atribut/attribute-request-form"

export default function AttributePage() {
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
          <Button size="sm">Atribut</Button>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Manajemen Atribut</h1>
          <Button>
            <Package className="mr-2 h-4 w-4" />
            Tambah Permintaan
          </Button>
        </div>
        <Tabs defaultValue="distribution" className="space-y-4">
          <TabsList>
            <TabsTrigger value="distribution">Distribusi Atribut</TabsTrigger>
            <TabsTrigger value="request">Permintaan Atribut</TabsTrigger>
            <TabsTrigger value="inventory">Inventaris</TabsTrigger>
          </TabsList>
          <TabsContent value="distribution" className="space-y-4">
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
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Distribusi Atribut</CardTitle>
                <CardDescription>Status distribusi atribut organisasi kepada anggota</CardDescription>
              </CardHeader>
              <CardContent>
                <AttributeDistributionTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="request" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Permintaan Atribut Baru</CardTitle>
                <CardDescription>Ajukan permintaan atribut untuk anggota baru atau penggantian</CardDescription>
              </CardHeader>
              <CardContent>
                <AttributeRequestForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
