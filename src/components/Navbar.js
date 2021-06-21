import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { motion } from 'framer-motion';

const libVariants = {
	hover: {
		scale: 1.1,
		transition: {
			duration: 0.5,
			stagger: 5,
		},
	},
};

const Navbar = () => {
	const { books } = useContext(BookContext);
	return (
		<motion.div
			className='navbar'
			initial={{ y: -250 }}
			animate={{ y: -10 }}
			transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
		>
			<motion.h1 class='lib' variants={libVariants} whileHover='hover'>
				Librarian
			</motion.h1>
			<motion.p
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className='pee'
			>
				Currently, you have {books.length} books to get through!
			</motion.p>
		</motion.div>
	);
};

export default Navbar;
