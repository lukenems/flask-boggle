from boggle import Boggle
from flask import Flask, request

app = Flask(__name__)

boggle_game = Boggle()

