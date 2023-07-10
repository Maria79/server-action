import { addProductDatabase } from '@/actions/serverActions';
import AddProductButton from '@/components/AddProductButton';
import { revalidateTag } from 'next/cache';

export interface Product {
	id?: number;
	product: string;
	price: string;
}

export default async function Home() {
	const res = await fetch(
		'https://64aac99a0c6d844abeded38e.mockapi.io/products',
		{
			cache: 'no-cache',
			next: {
				tags: ['products'],
			},
		}
	);

	const products: Product[] = await res.json();

	return (
		<main className=''>
			<h1 className='text-3xl font-bold text-center'>Products Warehouse</h1>

			<AddProductButton />

			<form
				action={addProductDatabase}
				className='flex flex-col gap-5 max-w-xl mx-auto p-5'
			>
				<input
					name='product'
					placeholder='Enter Product name...'
					className='border border-gray-300 p-2 rounded-md'
				/>
				<input
					name='price'
					placeholder='Enter Price name...'
					className='border border-gray-300 p-2 rounded-md'
				/>
				<button className='bg-blue-500 border text-white p-2 rounded-md'>
					Add Product
				</button>
			</form>

			<div className='max-w-xl mx-auto p-5'>
				<h2 className='font-bold p-5'>List of Products</h2>
				<div className='flex flex-wrap gap-5'>
					{products.map((p) => (
						<div key={p.id} className='p-5 shadow'>
							<p>{p.product}</p>
							<p>{p.price}€</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
