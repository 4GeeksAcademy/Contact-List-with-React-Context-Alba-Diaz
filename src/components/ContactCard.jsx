import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import contactServices from "../services/contactServices"

export const ContactCard = (props) => {

  const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const resp = await contactServices.deleteContact('Albatroxs', props.cid)
      dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })

    } catch (error) {
      console.log(error);

    }

  }

  const handleEdit = () => {
    navigate('/edit_contact/' + props.cid)

  }

  return (

    <div className="card my-2 border-primary">
      <div className="d-flex">
        <div className="w-25 border-end border-primary">

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" className="img-fluid center" alt={props.name} />
        </div>
        <div className=" w-75 text-start align-content-center ps-3">
          <h3 className="card-title pb-3">{props.name}</h3>
          <p className="card-text"> <i className="fa-solid fa-phone text-primary"></i> {props.phone}</p>
          <p className="card-text"> <i className="fa-solid fa-envelope text-primary"></i> {props.email}</p>
          <p className="card-text"> <i className="fa-solid fa-map-pin text-primary"></i> {props.address}</p>

        </div>
        <div className="btn-css">
          <button onClick={handleEdit} type="button" className="btn "><i className="fa-solid fa-user-pen text-primary"></i></button>
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-user-minus text-primary"></i></button>
        </div>
      </div>

      {/* modal body */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Do you want to delete the contact?</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Please note that once this item is deleted, it will not be possible to restore it.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleDelete}>Yes</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}