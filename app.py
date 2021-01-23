from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
   return "Hello world"

@app.route('/login')
def login():
   return render_template('login.html')

@app.route('/home')
def home():
   return render_template('homePage.html')

if __name__ == '__main__':
   app.run(debug= True)