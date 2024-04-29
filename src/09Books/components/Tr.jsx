/* import { useState } from "react"
import { deleteBook, updateBook } from "../app/services/books"

const Tr = ({ b, render }) => {

    const [title, setTitle] = useState(b.title)
    const [price, setPrice] = useState(b.price)

    const handleClickDelete = () => {
        deleteBook(b.id)
        render();
    }

    const handleClickUpdate = () => {
        updateBook(b.id, { title, price })
            ();
    }
    return (
        <tr>
            <td>{b.id}</td>
            <td><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></td>
            <td><input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></td>
            <td>
                <button onClick={handleClickDelete}>Delete</button>
                <button onClick={handleClickUpdate}>Update</button>
            </td>
        </tr>
    )
}

export default Tr
 */

import { useState } from "react"
import { deleteBook, updateBook } from "../app/services/books"


const Tr = ({ book, render }) => {

    const [title, setTitle] = useState(book.title)
    const [price, setPrice] = useState(book.price)

    const handleClickDelete = () => {
        deleteBook(book.id)
        render()
    }

    const handleClickUpdate = () => {
        updateBook(book.id, { title, price })
    }
    return (
        <tr>
            <td>{book.id}</td>
            <td><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></td>
            <td><input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></td>
            <td>
                <button onClick={handleClickDelete}>Delete</button>
                <button onClick={handleClickUpdate}>Update</button>
            </td>
        </tr>
    )
}

export default Tr
