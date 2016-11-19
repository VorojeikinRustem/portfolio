# portfolio

Update data.json 
```
python init_data.py
```

Create database on mongodb from data.json file:
```
mongo portfolio --eval "db.dropDatabase()" & mongoimport --db portfolio --collection works --jsonArray --file data.json
```
