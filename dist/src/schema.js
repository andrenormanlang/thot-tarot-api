"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarotCards = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.tarotCards = (0, pg_core_1.pgTable)('thot_tarot', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name').notNull(),
    number_meaning: (0, pg_core_1.text)('number_meaning').notNull(),
    short_description: (0, pg_core_1.text)('short_description').notNull(),
    long_description: (0, pg_core_1.text)('long_description'),
    image_url: (0, pg_core_1.text)('image_url'),
    ruling_planet: (0, pg_core_1.text)('ruling_planet'),
    zodiac: (0, pg_core_1.text)('zodiac'),
    tree_of_life: (0, pg_core_1.text)('tree_of_life'),
    attributes: (0, pg_core_1.text)('attributes').array(),
    element: (0, pg_core_1.text)('element'),
    light_meanings: (0, pg_core_1.text)('light_meanings').array(),
    shadow_meanings: (0, pg_core_1.text)('shadow_meanings').array(),
    reversed_meaning: (0, pg_core_1.text)('reversed_meaning'),
    advice: (0, pg_core_1.text)('advice'),
    question: (0, pg_core_1.text)('question'),
    confirmation: (0, pg_core_1.text)('confirmation'),
    drive: (0, pg_core_1.text)('drive').array(),
    keywords: (0, pg_core_1.text)('keywords').array(),
    revelation: (0, pg_core_1.text)('revelation'),
});
