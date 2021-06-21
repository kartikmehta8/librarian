import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';
import { motion } from 'framer-motion';

function App() {
	return (
		<motion.div
			className='App'
			drag
			dragConstraints={{
				top: 0,
				left: -400,
				right: 400,
				bottom: 300,
			}}
		>
			<BookContextProvider>
				<Navbar />
				<BookList />
				<NewBookForm />
			</BookContextProvider>
		</motion.div>
	);
}

export default App;
