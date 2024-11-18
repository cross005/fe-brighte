import CustomerForm from '@/components/CustomerForm'

export default function CustomerPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Customer Info</h1>
      <CustomerForm />
    </div>
  )
}