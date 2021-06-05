import BooksSchema from '../database/schema/books.schema';
import {Book} from '../types/books.type';

import {BooksInterface} from '../interfaces/books.interface';

const bookReturn = (book): BooksInterface => {
    return{
        _id: book._id,
        name: book.name,
        genre: book.genre,
        author: book.author,
        year: book.year,
        publisher: book.publisher,
        cover: book.cover,
        pages: book.pages,
        language: book.language,
        price: book.price,
        hasBeenRead: book.hasBeenRead
    }
}

const booksReturn = (book): BooksInterface => {
    return{
        _id: book._id,
        name: book.name,
        genre: book.genre,
        author: book.author,
        cover: book.cover,
        price: book.price
    }
}

export const add = async(data): Promise<BooksInterface> => {
    const book: Book = await new BooksSchema({
        name: data.name,
        genre: data.genre,
        author: data.author,
        year: data.year,
        publisher: data.publisher,
        cover: data.cover,
        pages: data.pages,
        language: data.language,
        price: data.price,
        hasBeenRead: data.hasBeenRead
    }).save();

    return bookReturn(book);
}

export const getBooks = async(params): Promise<BooksInterface[]> =>{
    const books = await BooksSchema.find(params);

    return books.map((bk)=>{
        const book: Book = bk;
        return booksReturn(book);
    });
}

export const getBookById = async(id): Promise<BooksInterface> =>{
    const book = await BooksSchema.findOne({_id: id});

    return bookReturn(book);
}

export const removeBook = async(id): Promise<String> =>{
    await BooksSchema.deleteOne({_id: id}).exec((err)=>{
        if(err){
            return err;
        }
    });

    return 'Deleted';
}

export const editBook = async(id, data): Promise<String> =>{
    await BooksSchema.updateOne({_id: id}, {$set:data}).exec((err)=>{
        if(err){
            return err;
        }
    });

    return 'Updated';
}