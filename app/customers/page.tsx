import { getCustomers } from '@/lib/api'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function CustomersPage() {
  const customers = await getCustomers()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Postcode</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Service</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.mobile}</TableCell>
              <TableCell>{customer.postcode}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.services}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button asChild className="mt-4">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}