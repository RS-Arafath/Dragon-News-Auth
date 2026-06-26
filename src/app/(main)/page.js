import { redirect } from 'next/navigation';

export default async function Home() {
  /* user doker por redirect kore onno page a niye jbe */
  const defaultCategoryId = '01';
  return redirect(`/category/${defaultCategoryId}`);
}
