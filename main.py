from flask import Flask, render_template

# configuration
DEBUG = True
USERNAME = 'admin'
PASSWORD = 'password'


app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html', test=["test", "two", "monkey"])

@app.route('/test', methods=['POST'])
def contact_us():
	if request.method == 'POST':
		print('POST METHOD')
	else:
		print('WTF')
		

if __name__ == '__main__':
	app.run()