from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# Load sample data (replace with your own dataset)
data = pd.DataFrame({
    'Employee_ID': [1, 2, 3, 4, 5],
    'Name': ['John', 'Emma', 'Michael', 'Emily', 'David'],
    'Gender': ['Male', 'Female', 'Male', 'Female', 'Male'],
    'Department': ['Engineering', 'Marketing', 'Engineering', 'HR', 'Sales']
})

@app.route('/')
def index():
    return 'Welcome to Gender Diversity Analytics Tool'

@app.route('/analytics', methods=['GET'])
def gender_diversity():
    # Calculate gender diversity statistics
    total_employees = len(data)
    male_count = len(data[data['Gender'] == 'Male'])
    female_count = len(data[data['Gender'] == 'Female'])
    gender_diversity_ratio = female_count / total_employees

    # Prepare response
    response = {
        'totalEmployees': total_employees,
        'maleCount': male_count,
        'femaleCount': female_count,
        'genderDiversityRatio': gender_diversity_ratio
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
