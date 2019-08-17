from boggle import Boggle
from flask import Flask, request, render_template, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "very_extreme_secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)


boggle_game = Boggle()


@app.route('/')
def start_page():

    return render_template('base.html')


@app.route('/session', methods=['POST'])
def star_session():

    session['board'] = []

    return redirect('/game')


@app.route('/game')
def start_game():

    board = boggle_game.make_board()
    session['board'] = board

    return render_template('game_board.html', board=board)


@app.route('/check')
def check_guess():
    "call check valid function"

    word = request.args['guess']
    board = session['board']
    response = boggle_game.check_valid_word(board, word)

    return jsonify({'result': response})
