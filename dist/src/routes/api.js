"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const schema_1 = require("../schema");
const drizzle_orm_1 = require("drizzle-orm");
const router = (0, express_1.Router)();
/**
 * Get all cards
 */
router.get("/cards", async (_req, res) => {
    try {
        const cards = await db_1.db.select().from(schema_1.tarotCards);
        res.json(cards);
    }
    catch (error) {
        console.error("Error fetching cards:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
/**
 * Get a card by ID
 */
router.get("/cards/:id", async (req, res) => {
    try {
        const card = await db_1.db
            .select()
            .from(schema_1.tarotCards)
            .where((0, drizzle_orm_1.eq)(schema_1.tarotCards.id, parseInt(req.params.id, 10)))
            .limit(1);
        if (card.length === 0) {
            res.status(404).json({ message: "Card not found" });
        }
        else {
            res.json(card[0]);
        }
    }
    catch (error) {
        console.error("Error fetching card:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
/**
 * Create a new card
 */
router.post("/cards", async (req, res) => {
    try {
        const newCard = await db_1.db.insert(schema_1.tarotCards).values(req.body).returning();
        res.status(201).json(newCard[0]);
    }
    catch (error) {
        console.error("Error creating card:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
/**
 * Bulk insert cards
 */
router.post("/cards/bulk", async (req, res) => {
    try {
        if (!Array.isArray(req.body)) {
            return res
                .status(400)
                .json({ message: "Request body should be an array of cards" });
        }
        const newCards = await db_1.db.insert(schema_1.tarotCards).values(req.body).returning();
        res.status(201).json(newCards);
    }
    catch (error) {
        console.error("Error bulk inserting cards:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
/**
 * Update a card by ID
 */
router.put("/cards/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updatedCard = await db_1.db
            .update(schema_1.tarotCards)
            .set(req.body)
            .where((0, drizzle_orm_1.eq)(schema_1.tarotCards.id, id))
            .returning();
        if (updatedCard.length === 0) {
            res.status(404).json({ message: "Card not found" });
        }
        else {
            res.json(updatedCard[0]);
        }
    }
    catch (error) {
        console.error("Error updating card:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
/**
 * Delete a card by ID
 */
router.delete("/cards/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const deletedCard = await db_1.db
            .delete(schema_1.tarotCards)
            .where((0, drizzle_orm_1.eq)(schema_1.tarotCards.id, id))
            .returning();
        if (deletedCard.length === 0) {
            res.status(404).json({ message: "Card not found" });
        }
        else {
            res.json(deletedCard[0]);
        }
    }
    catch (error) {
        console.error("Error deleting card:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.default = router;
