import express from 'express';

const router = express.Router();

import knex from '../db/knex';

const validBook = (book) => {
    return  book.title.length <= 30 &&
            book.title.trim() != '' &&
            book.total_pages >= 0 && book.total_pages <= 10000 &&
            book.name_publishing.length <= 30 &&
            book.year >= 1800
}

router.get('', async (req, res) => {
    try {
        let books = await knex('book').select();
        res.json(books);
    } catch (e) {
        console.log(e);
    }
});

router.post('', async (req, res) => {
    if (validBook(req.body)) {
        let book = {
            title: req.body.title,
            list_author: req.body.list_author,
            total_pages: req.body.total_pages,
            name_publishing: req.body.name_publishing,
            year: req.body.year,
            date: req.body.date,
            img: req.body.img
        };
        console.log(req.body)
        try {
            let ids = await knex('book').insert(book, '*');
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log('not valid');
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let book = await knex('book')
                            .where('id', id)
                            .del();
    } catch (e) {
        console.log(e);
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    if (validBook(req.body)) {
        try {
            let book = await knex('book')
                                .where('id', id)
                                .update({
                                    title: req.body.title,
                                    list_author: req.body.list_author,
                                    total_pages: req.body.total_pages,
                                    name_publishing: req.body.name_publishing,
                                    year: req.body.year,
                                    date: req.body.date,
                                    img: req.body.img
                                });
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log('not valid');
    }
});

export default router;