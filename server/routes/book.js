import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("books");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    let collection = await db.collection("books");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
    
    if(!result) res.send("Livro não encontrado").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    try{
        let newDocument = {
            name: req.body.name,
            author: req.body.author,
            year: req.body.year,
            description: req.body.description,
            price: req.body.price,
            photo_url: req.body.photo_url
        };
        let collection = await db.collection("books");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (e) {
        console.error(e)
        res.status(500).send("Erro ao cadastrar livro");
    }
});

router.patch("/:id", async (req, res) => {
    try{
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name: req.body.name,
                author: req.body.author,
                year: req.body.year,
                description: req.body.description,
                price: req.body.price,
                photo_url: req.body.photo_url
            },
        };

        let collection = await db.collection("books");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (e) {
        console.error(e)
        res.status(500).send("Erro ao atualizar livro");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const collection = db.collection("books");
        let result = await collection.deleteOne(query);
        res.send(result).status(200);
    } catch (e) {
        console.error(e)
        res.status(500).send("Erro ao deletar livro");
    }
});

export default router;