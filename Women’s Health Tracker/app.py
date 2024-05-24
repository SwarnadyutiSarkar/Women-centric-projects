# app.py
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://user:password@localhost/womens_health_db'
db = SQLAlchemy(app)

class MenstrualCycle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    symptoms = db.Column(db.String(500))

@app.route('/menstrual_cycles', methods=['POST'])
def add_menstrual_cycle():
    data = request.get_json()
    new_cycle = MenstrualCycle(
        user_id=data['user_id'],
        start_date=datetime.strptime(data['start_date'], '%Y-%m-%d'),
        end_date=datetime.strptime(data['end_date'], '%Y-%m-%d'),
        symptoms=data.get('symptoms', '')
    )
    db.session.add(new_cycle)
    db.session.commit()
    return jsonify({'message': 'Menstrual cycle logged successfully'})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
