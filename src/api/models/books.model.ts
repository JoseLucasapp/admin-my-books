import BooksSchema from '../database/schema/books.schema';
import {Book} from '../types/books.type';
import {BooksInterface} from '../interfaces/books.interface';

const bookReturn = (book)=>{
    return{
        _id: book._id,
        name: book.name,
        genre: book.genre,
        author: book.author,
        year: book.year,
        publisher: book.publisher,
        cover: book.cover,
        pages: book.pages,
        language: book.language
    }
}

export const add = async(data)=>{
    const book: Book = await new BooksSchema({
        name: data.name,
        genre: data.genre,
        author: data.author,
        year: data.year,
        publisher: data.publisher,
        cover: data.cover,
        pages: data.pages,
        language: data.language
    }).save();

    return bookReturn(book);
}

export const getBooks = async()=>{
    const books = await BooksSchema.find({});

    return books.map((bk)=>{
        const book: Book = bk;
        return bookReturn(book);
    });
}

export const removeBook = async(id)=>{
    await BooksSchema.deleteOne({_id: id}).exec((err)=>{
        if(err){
            return err;
        }
    });

    return 'Deleted';
}

export const editBook = async(id, data)=>{
    await BooksSchema.updateOne({_id: id}, {$set:data}).exec((err)=>{
        if(err){
            return err;
        }
    });

    return 'Updated';
}