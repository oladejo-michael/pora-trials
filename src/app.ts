from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/about')
def about():
    return "This is a simple Flask app."

@app.route('/api/data')
def data():
    sample_data = {
        "name": "John Doe",
        "age": 30,
        "language": "Spanish",
        "framwork": "Flask"
    }
    return jsonify(sample_data)

if __name__ == '__main__':
    app.run(debug=True)
