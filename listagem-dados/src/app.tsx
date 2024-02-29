import { Plus, Search, FileDown, MoreHorizontal  } from "lucide-react"
import { Button } from "./components/ui/button"
import { Header } from "./components/header"
import { Tabs } from "./components/tabs"
import { Input, Control } from "./components/ui/input"
import {
  Table,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
} from "./components/ui/table"

import { Pagination } from './components/pagination'

export function App() {
  return (
    <div className="py-10 mx-auto space-y-5">
      <div>
        <Header />
        <Tabs />
      </div>
      <main className="max-w-dxl mx-auto space-y-5">
        <div className="flex items-center gap-3 ">
          <h1 className="text-xl font-bold"> Tags</h1>
          <Button variant="primary">
            <Plus className="size-3" />
            Create new
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <Input variant="filter">
            <Search className="size-3" />
            <Control placeholder="Search tags" />
          </Input>

          <Button>
            <FileDown className="size-3" />
            Export
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
            <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">React</span>
                    </div>
                  </TableCell>
                  <TableCell> 13 videos </TableCell>
                  <TableCell>
                    <Button size="icon">
                      <MoreHorizontal className=" size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Pagination pages={10} items={100} page={1} />
      </main>
    </div>
  )
}
