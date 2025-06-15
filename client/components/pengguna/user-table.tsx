"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Edit, Trash, Key } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { UserForm } from "./user-form"

export function UserTable() {
  const [users] = useState([
    {
      id: "U001",
      username: "admin_jakarta",
      name: "Ahmad Sulaiman",
      level: "Admin Provinsi",
      area: "DKI Jakarta",
      lastActive: "2 jam yang lalu",
      status: "Aktif",
    },
    {
      id: "U002",
      username: "admin_bandung",
      name: "Siti Nurhaliza",
      level: "Admin Kabupaten",
      area: "Bandung",
      lastActive: "1 hari yang lalu",
      status: "Aktif",
    },
    {
      id: "U003",
      username: "admin_jatinegara",
      name: "Budi Santoso",
      level: "Admin Kecamatan",
      area: "Jatinegara",
      lastActive: "3 jam yang lalu",
      status: "Aktif",
    },
    {
      id: "U004",
      username: "admin_kramatjati",
      name: "Dewi Lestari",
      level: "Admin Kelurahan",
      area: "Kramat Jati",
      lastActive: "5 hari yang lalu",
      status: "Tidak Aktif",
    },
    {
      id: "U005",
      username: "admin_surabaya",
      name: "Eko Prasetyo",
      level: "Admin Kabupaten",
      area: "Surabaya",
      lastActive: "1 jam yang lalu",
      status: "Aktif",
    },
    {
      id: "U006",
      username: "admin_medan",
      name: "Rina Wati",
      level: "Admin Kabupaten",
      area: "Medan",
      lastActive: "2 hari yang lalu",
      status: "Aktif",
    },
    {
      id: "U007",
      username: "admin_makassar",
      name: "Joko Widodo",
      level: "Admin Kabupaten",
      area: "Makassar",
      lastActive: "4 jam yang lalu",
      status: "Aktif",
    },
  ])

  const [selectedUser, setSelectedUser] = useState(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState(false)

  const handleEdit = (user) => {
    setSelectedUser(user)
    setIsEditDialogOpen(true)
  }

  const handleDelete = (user) => {
    setSelectedUser(user)
    setIsDeleteDialogOpen(true)
  }

  const handleResetPassword = (user) => {
    setSelectedUser(user)
    setIsResetPasswordDialogOpen(true)
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Pengguna</TableHead>
              <TableHead>Tingkatan</TableHead>
              <TableHead>Wilayah Kerja</TableHead>
              <TableHead>Terakhir Aktif</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">@{user.username}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.level}</TableCell>
                <TableCell>{user.area}</TableCell>
                <TableCell>{user.lastActive}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "Aktif" ? "default" : "secondary"}>{user.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Buka menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(user)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Pengguna
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleResetPassword(user)}>
                        <Key className="mr-2 h-4 w-4" />
                        Reset Password
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleDelete(user)} className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Hapus Pengguna
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Dialog Edit Pengguna */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Pengguna</DialogTitle>
            <DialogDescription>Ubah informasi pengguna. Klik simpan ketika selesai.</DialogDescription>
          </DialogHeader>
          {selectedUser && <UserForm user={selectedUser} mode="edit" onClose={() => setIsEditDialogOpen(false)} />}
        </DialogContent>
      </Dialog>

      {/* Dialog Hapus Pengguna */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Hapus Pengguna</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus akses pengguna ini? Tindakan ini tidak dapat dibatalkan.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(false)}>
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog Reset Password */}
      <Dialog open={isResetPasswordDialogOpen} onOpenChange={setIsResetPasswordDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>
              Reset password untuk pengguna {selectedUser?.name}. Password baru akan dikirim ke email pengguna.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsResetPasswordDialogOpen(false)}>
              Batal
            </Button>
            <Button onClick={() => setIsResetPasswordDialogOpen(false)}>Reset Password</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
