'use client';
import { addProductDatabase } from '@/actions/serverActions';
import React, { useTransition } from 'react';

export default function AddProductButton() {
	const [isPending, startTransition] = useTransition();

	const formData = new FormData();
	formData.append('product', 'Macbook Pro');
	formData.append('price', '199,99');
	return (
		<button
			onClick={() => startTransition(() => addProductDatabase(formData))}
			className='fixed bottom-10 right-10 border bg-green-500 p-2 text-white rounded-mdw-48'
		>
			{isPending ? 'Adding...' : 'Add Macbook Pro'}
		</button>
	);
}
