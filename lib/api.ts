export async function getCustomers() {
  const response = await fetch('http://localhost:20000/local/customers/view', { cache: 'no-store' })
  if (!response.ok) {
    throw new Error('Failed to fetch customers')
  }

  const customer_res = await response.json();

  const parsed_res = JSON.parse(customer_res.body);
  console.log('parsed', parsed_res.data);

  return await parsed_res.data;
}