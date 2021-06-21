import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { motion } from 'framer-motion';

const BookDetails = ({ book }) => {
	const { dispatch } = useContext(BookContext);
	return (
		<motion.li
			whileHover={{ scale: 1.03 }}
			onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}
		>
			<div className='title'>{book.title}</div>
			<div className='author'>{book.author}</div>
		</motion.li>
	);
};

export default BookDetails;
