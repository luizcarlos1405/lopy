import { IndexedDb } from "minimongo";

const wrapCollection = (collection) => {
  return {
    ...collection,
    find: (selector, options) => {
      const cursor = collection.find(selector, options);
      return {
        ...cursor,
        fetch: () =>
          new Promise((accept, reject) => cursor.fetch(accept, reject)),
      };
    },
    upsert: (docs, bases) => {
      return new Promise((accept, reject) =>
        collection.upsert(docs, bases, accept, reject)
      );
    },
    remove: (id) => {
      return new Promise((accept, reject) =>
        collection.remove(id, accept, reject)
      );
    },
  };
};

export const createIndexedDb = async (options) => {
  const db = await new Promise(
    (accept, reject) => new IndexedDb(options, accept, reject)
  );
  const addCollection = db.addCollection;

  db.addCollection = async (name) => {
    const result = await new Promise((accept, reject) =>
      addCollection.bind(db)(name, accept, reject)
    );
    db[name] = wrapCollection(db[name]);

    return result;
  };

  return db;
};
