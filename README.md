- Run `docker componse up -d`
- Use `mongosh mongodb://admin:yourPassword@localhost:27017` to connect to admin DB
- `use admin`
- run `db.createUser({ user: 'userName', pwd: 'newPassword', roles: [{role: 'readWrite', db: 'newDB'}]});`
- run `db = db.getSiblingDB('newDB');`
- now you connect to this DB using the mongo connection string

### Mongo is setup in 5 minutes!
