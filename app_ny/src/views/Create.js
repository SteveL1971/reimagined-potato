import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/actions/productsActions';
import { useHistory } from 'react-router-dom';


const Create = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const title = useRef();
  const body = useRef();

  const handleSub = e => {
    e.preventDefault();
    dispatch(addProduct(title.current.value, body.current.value))
    history.push('/')
  }

  return (
    <form onSubmit={handleSub}>
      <h1>Create</h1>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" ref={title} />
      </div>
      <div>
        <label htmlFor="body">Body: </label> <br/>
        <textarea id="body" cols="30" rows="10" ref={body} ></textarea>
      </div>
      <button>ADD PRODUCT</button>
    </form>
  )
}

export default Create
