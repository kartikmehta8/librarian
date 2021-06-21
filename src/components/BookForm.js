import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { motion } from 'framer-motion';

const NewBookForm = () => {
	const { dispatch } = useContext(BookContext);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_BOOK',
			book: { title, author },
		});
		setTitle('');
		setAuthor('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<motion.input
				initial={{ x: -1100 }}
				animate={{ x: 0 }}
				transition={{
					delay: 0.2,
					type: 'spring',
					stiffness: 120,
					mass: 1,
					ease: 'easeInOut',
				}}
				type='text'
				placeholder='Book Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<motion.input
				initial={{ x: 1100 }}
				animate={{ x: 0 }}
				transition={{
					delay: 0.2,
					type: 'spring',
					stiffness: 120,
					mass: 1,
					ease: 'easeInOut',
				}}
				type='text'
				placeholder='Author'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				required
			/>
			<motion.input
				type='submit'
				value='Add Book'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				whileHover={{ color: 'grey' }}
				transition={{ duration: 1 }}
			/>
		</form>
	);
};

export default NewBookForm;
