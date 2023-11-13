import { v4 as uuidv4} from 'uuid'

const createBook = (bookData) => {
    return {
        ...bookData,
        isFavorite: false,
        id: uuidv4()
    }
}

export default createBook;
