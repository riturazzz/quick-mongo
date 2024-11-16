db.createUser({
  user: 'rituraj',
  pwd: 'rituraj',
  roles: [
    {
      role: 'readWrite',
      db: 'yactraq',
    },
  ],
});

db = db.getSiblingDB('yactraq');
db.createCollection('rules');
