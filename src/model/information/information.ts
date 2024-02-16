/*
CREATE TABLE information (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author TEXT NOT NULL, -- developer, jma
  createdAt TEXT NOT NULL,
  level TEXT NOT NULL, -- info(default), warning, danger
  eventId INTEGER
);

*/

import { DataTypes, Infer, Model } from 'd1-orm'

export type Information = Infer<typeof information>

export const information = new Model(
  {
    tableName: 'information',
    primaryKeys: 'id',
  },
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      notNull: true,
    },
    body: {
      type: DataTypes.TEXT,
      notNull: true,
    },
    author: {
      type: DataTypes.TEXT,
      notNull: true,
    },
    createdAt: {
      type: DataTypes.TEXT,
      notNull: true,
    },
    level: {
      type: DataTypes.TEXT,
      notNull: true,
    },
    eventId: {
      type: DataTypes.INTEGER,
    },
  },
)
