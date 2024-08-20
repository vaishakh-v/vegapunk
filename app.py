from flask import Flask, render_template, request, url_for
import csv

app = Flask(__name__)

# Load questions from the CSV file
def load_questions():
    questions = []
    with open('question_final.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            questions.append(row)
    return questions

questions = load_questions()

# Route for the home page
@app.route('/')
def home():
    disorders = list(set([q['Mental_Disorder'] for q in questions]))
    return render_template('home.html', disorders=disorders)

# Route for the questionnaire page
@app.route('/questionnaire/<disorder>')
def questionnaire(disorder):
    disorder_questions = [q for q in questions if q['Mental_Disorder'] == disorder]
    return render_template('questionnaire.html', disorder=disorder, questions=disorder_questions)

# Route for handling the form submission and displaying results
@app.route('/result', methods=['POST'])
def result():
    selected_disorder = request.form['disorder']
    total_score = 0
    max_score = 0

    for question in questions:
        if question['Mental_Disorder'] == selected_disorder:
            answer = int(request.form.get(f'question_{question["Question_ID"]}', 0))
            total_score += answer
            max_score += 4

    intensity_percentage = (total_score / max_score) * 100

    if intensity_percentage >= 75:
        severity = "Severe"
    elif intensity_percentage >= 50:
        severity = "Moderate"
    elif intensity_percentage >= 25:
        severity = "Mild"
    else:
        severity = "Minimal"

    return render_template('result.html', disorder=selected_disorder, score=total_score, severity=severity)

if __name__ == '__main__':
    app.run(debug=True)
