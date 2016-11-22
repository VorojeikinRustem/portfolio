# portfolio

Update data.json 
```
python init_data.py
```

Create database on mongodb from data.json file:
```
mongoimport --db portfolio --collection works --jsonArray --drop --file data\works.json
```
For testimonials
```
mongoimport --db portfolio --collection testimonials --jsonArray --drop --file data\testimonials.json
```
