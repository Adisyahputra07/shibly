import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Download, Calendar } from "lucide-react"
import { MembershipReport } from "@/components/laporan/membership-report"
import { AttributeReport } from "@/components/laporan/attribute-report"
import { RegionalReport } from "@/components/laporan/regional-report"

export default function ReportPage() {
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
          <Button size="sm">Laporan</Button>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Laporan Organisasi</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Pilih Periode
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Unduh Laporan
            </Button>
          </div>
        </div>
        <Tabs defaultValue="membership" className="space-y-4">
          <TabsList>
            <TabsTrigger value="membership">Keanggotaan</TabsTrigger>
            <TabsTrigger value="attribute">Atribut</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
          </TabsList>
          <TabsContent value="membership" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Keanggotaan</CardTitle>
                <CardDescription>Statistik pertumbuhan dan status keanggotaan organisasi</CardDescription>
              </CardHeader>
              <CardContent>
                <MembershipReport />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="attribute" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Distribusi Atribut</CardTitle>
                <CardDescription>Statistik distribusi atribut organisasi kepada anggota</CardDescription>
              </CardHeader>
              <CardContent>
                <AttributeReport />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="regional" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Regional</CardTitle>
                <CardDescription>Statistik persebaran anggota berdasarkan wilayah</CardDescription>
              </CardHeader>
              <CardContent>
                <RegionalReport />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
