import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import api from '../utils/api';

export default function SheetNavbar() {
	const router = useRouter();

	function isActive(path: string) {
		return router.pathname === path;
	}

	return (
		<Navbar sticky='top' expand='sm' className='mb-3' variant='dark'>
			<Container fluid>
				<Navbar.Brand>Open RPG</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className='me-auto' navbarScroll>
						<Link href='/sheet/1' passHref>
							<Nav.Link active={isActive('/sheet/1')}>Página 1</Nav.Link>
						</Link>
						<Link href='/sheet/2' passHref>
							<Nav.Link active={isActive('/sheet/2')}>Página 2</Nav.Link>
						</Link>
					</Nav>
					<Nav>
						<Nav.Link
							href='#'
							onClick={() => api.delete('/player').then(() => router.replace('/'))}>
							Sair
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
