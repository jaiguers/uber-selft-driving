from fastapi import FastAPI

app = FastAPI()

trips = []

@app.get('/')
def read_root():
    return {"Welcome":"Bienvenido a UBER SELFT-DRIVING"}

@app.get('/trips')
def get_trips():
    return trips

@app.get('/tripsByWeek')
def get_tripsByWeek():
    return trips

@app.get('/tripsByUser')
def get_tripsByUser():
    return trips