import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import { motion } from 'framer-motion';

const thisVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		color: ['grey', 'white'],
		transition: {
			color: {
				yoyo: Infinity,
				duration: 1,
			},
			opacity: {
				duration: 1,
			},
		},
	},
};

const BookList = () => {
	const { books } = useContext(BookContext);

	return books.length ? (
		<div className='book-list'>
			<ul>
				{books.map((book) => {
					return <BookDetails book={book} key={book.id} />;
				})}
			</ul>
		</div>
	) : (
		<motion.div
			className='empty'
			variants={thisVariants}
			initial='hidden'
			animate='visible'
		>
			CHILL TIME{' '}
		</motion.div>
	);
};

export default BookList;
