from flask import Flask
from flask_cors import CORS
import pandas as pd
from json import loads, dumps


data = pd.read_excel('../assets/Product_List_Structured.xlsx', header=[0,1])

data.head()

d = loads(data.to_json())

for item in d:
    d[item] = {k:v for k,v in d[item].items() if v is not None}
    
d_structured = {}
for key in d:
    new_key = eval(key)[0]
    if new_key not in d_structured:
        d_structured[new_key] = {eval(key)[1]:d[key]}
    else:
        d_structured[new_key][eval(key)[1]] = d[key]


app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_complete_data():
    return dumps(d_structured)


if __name__ == '__main__':
    app.run()
