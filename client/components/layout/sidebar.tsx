"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Users, BarChart3, Package, FileText, UserPlus, Home, Settings, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b py-4">
        <div className="flex items-center gap-2 px-4">
          <Users className="h-6 w-6" />
          <h1 className="text-lg font-semibold">Organisasi X</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/anggota" || pathname.startsWith("/anggota/")}>
                  <Link href="/anggota">
                    <Users className="h-4 w-4" />
                    <span>Anggota</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/pendaftaran"}>
                  <Link href="/pendaftaran">
                    <UserPlus className="h-4 w-4" />
                    <span>Pendaftaran</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/atribut" || pathname.startsWith("/atribut/")}>
                  <Link href="/atribut">
                    <Package className="h-4 w-4" />
                    <span>Atribut</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/laporan" || pathname.startsWith("/laporan/")}>
                  <Link href="/laporan">
                    <FileText className="h-4 w-4" />
                    <span>Laporan</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/analitik" || pathname.startsWith("/analitik/")}>
                  <Link href="/analitik">
                    <BarChart3 className="h-4 w-4" />
                    <span>Analitik</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Administrasi</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/pengguna" || pathname.startsWith("/pengguna/")}>
                  <Link href="/pengguna">
                    <UserPlus className="h-4 w-4" />
                    <span>Manajemen Pengguna</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/pengaturan"}>
                  <Link href="/pengaturan">
                    <Settings className="h-4 w-4" />
                    <span>Pengaturan</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Admin Pusat</p>
              <p className="text-xs text-muted-foreground">admin@organisasi-x.org</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
