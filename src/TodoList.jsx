import { Badge, Divider, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';

const TodoList = ({ tasks, deleteTask }) => {
	if (!tasks.length) {
		return (
			<Badge colorScheme='teal' p='2' m='4' borderRadius='4' variant='subtle'>
				No ToDos...
			</Badge>
		);
	}

	return (
		<VStack
			w={['90%', '80%', '50%']}
			border='1px solid teal'
			borderRadius='12'
			divider={<Divider borderColor='gray.200' />}
			p='4'
		>
			{tasks.map((task) => {
				const { id, body } = task;
				return (
					<HStack key={id} w='90%' justifyContent='space-between'>
						<Text>{body}</Text>
						<IconButton
							aria-label='Delete ToDo'
							icon={<FaTrashAlt />}
							color='teal'
							size='sm'
							onClick={() => deleteTask(id)}
						/>
					</HStack>
				);
			})}
		</VStack>
	);
};

export default TodoList;
