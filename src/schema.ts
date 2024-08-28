import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const tarotCards = pgTable('thot_tarot', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  number_meaning: text('number_meaning').notNull(),
  short_description: text('short_description').notNull(),
  long_description: text('long_description'),
  image_url: text('image_url'),
  ruling_planet: text('ruling_planet'),
  transitional_phase: text('transitional_phase'),
  attributes: text('attributes').array(),
  element: text('element'),
  light_meanings: text('light_meanings').array(),  
  shadow_meanings: text('shadow_meanings').array(),  
  reversed_meaning: text('reversed_meaning'),
  advice: text('advice'),
  question: text('question'),
  confirmation: text('confirmation'),
  drive: text('drive').array(),  
  keywords: text('keywords').array(),
  revelation: text('revelation'),  
});




