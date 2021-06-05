import mongoose, {Document} from 'mongoose';

import {BooksInterface} from '../../interfaces/books.interface';

interface BooksModel extends BooksInterface, Document {} 

const booksSchema = new mongoose.Schema({
    name: {
        type: String
    },
    year:{
        type: String
    },
    genre:{
        type: String
    },
    author:{
        type: String
    },
    publisher:{
        type: String
    },
    cover:{
        type: String
    },
    pages:{
        type: String
    },
    language:{
        type: String
    }
});

export default mongoose.model<BooksModel>('book', booksSchema);