
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import contactServices from "../services/contactServices.js";
import { ContactCard } from "../components/ContactCard.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		loadAgendaBySlug()

	}, [])

	const loadAgendaBySlug = async () => {
		try {
			const resp = await contactServices.getOneAgenda('Albatroxs');
			dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })
		} catch (error) {
			console.log(error);
		}
	}






	return (
		<div className="text-center mt-4">
			<h1 className="mb-4">My Agenda</h1>
			<div className="container">

				{

					store.agenda?.map(el => <ContactCard

						key={el.id}
						cid={el.id}
						name={el.name}
						phone={el.phone}
						email={el.email}
						address={el.address}

					/>)
				}

			</div>


		</div>
	);
}; 