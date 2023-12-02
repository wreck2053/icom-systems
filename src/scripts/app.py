from flask import Flask
from flask_cors import CORS
import pandas as pd
from json import loads, dumps

# data = pd.read_csv('../assets/ProductDetails.csv')
data = pd.read_excel('C:\\Users\\rahul\\Desktop\\icom-systems\\src\\assets\\Product_List_Structured.xlsx', header=[0,1])

f = lambda x: pd.Series({i:dict(x[i]) for i in x.columns if i != 'Brand'})
data = data.groupby('Brand').apply(f).transpose()

d = loads(data.to_json())

app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_complete_data():
    return dumps(d)


if __name__ == '__main__':
    app.run()
