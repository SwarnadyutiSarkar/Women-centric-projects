from flask import Flask, jsonify, request

app = Flask(__name__)

workshops = []

@app.route('/workshops', methods=['GET'])
def get_workshops():
    return jsonify(workshops)

@app.route('/workshops', methods=['POST'])
def add_workshop():
    workshop = request.json
    workshops.append(workshop)
    return jsonify({'message': 'Workshop added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
