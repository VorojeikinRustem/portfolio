from flask import Flask, render_template

import pymongo

# configuration
DEBUG = True
USERNAME = 'admin'
PASSWORD = 'password'


app = Flask(__name__)

@app.route('/')
def index():
	# List of skills
	skills = ['Selenium', 'Responsive design', 'HTML5', 'CSS3', 'Bootstrap', 'Python', 'Django', 'JavaScript', 'jQuery', 'PostgreSQL', 'Git', 'Кроссбраузерная верстка', 'MongoDB', 'Linux', 'Semantic ui', 'Foundation css', 'Адаптивная верстка', 'bash']
	# Works of portfolio
	connection = pymongo.MongoClient('mongodb://localhost')
	db = connection.portfolio
	portfolio_works = list(db.works.find({}, projection={'_id': False}))
	return render_template(
		'index.html',
		portfolio_works=portfolio_works,
		skills=skills)

@app.route('/test', methods=['POST'])
def contact_us():
	if request.method == 'POST':
		print('POST METHOD')
	else:
		print('WTF')
		

if __name__ == '__main__':
	app.run()
	
	
	
	