import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import { Button, Heading, HStack, IconButton, Input, VStack, useToast, useColorMode } from '@chakra-ui/react';

import TodoList from './TodoList';

function App() {
	const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
	const [taskContent, setTaskContent] = useState('');
	const { colorMode, toggleColorMode } = useColorMode();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!taskContent) {
			const toast = useToast();
			toast({
				title: 'No content',
				status: 'error',
				duration: 2000,
				isClosable: true,
			});
			return;
		}

		const task = {
			id: nanoid(),
			body: taskContent,
		};
		const addTask = (task) => {
			setTasks([...tasks, task]);
		};

		addTask(task);
		setTaskContent('');
	};

	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => {
			return task.id !== id;
		});
		setTasks(newTasks);
	};

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<VStack w='100vw' h='100vh' p='4'>
			<IconButton
				alignSelf='flex-end'
				aria-label='ColorMode'
				color='teal'
				icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
				onClick={toggleColorMode}
			/>
			<Heading size='2xl' p='4' bgGradient='linear(to-r, teal, gray.200)' bgClip='text'>
				ToDo Application
			</Heading>
			<TodoList tasks={tasks} deleteTask={deleteTask} />
			<form onSubmit={handleSubmit}>
				<HStack p='4'>
					<Input
						placeholder='Enter text'
						type='text'
						value={taskContent}
						onChange={(e) => setTaskContent(e.target.value)}
					/>
					<Button color='teal' fontSize='smaller' type='submit'>
						Add ToDo
					</Button>
				</HStack>
			</form>
		</VStack>
	);
}

export default App;
