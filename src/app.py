from flask import Flask, request, jsonify
from ai_classes import Model, FileInfo

app = Flask(__name__)

model = Model(file_info=FileInfo(model_file='trained_model.pkl', file_path="output_file.csv", column_1='cod_cli', column_2='cod_art', column_3='qta_ordinata'))
model.train_model()

# Endpoint per la comunicazione con l'algoritmo
@app.route('/esegui_algoritmo/<object>/<id>/<n>')
def esegui_algoritmo_endpoint(object, id, n):
    try:
        if object == "user": 
            dictionary = model.topN_1UserNItem(int(id), int(n))
            dictionary = {str(uid): float(est) for uid, est in dictionary}
        elif object == "item":
            dictionary = model.topN_1ItemNUser(int(id), int(n))
            dictionary = {str(uid): float(est) for uid, est in dictionary}
        else:
            return jsonify({'errore': "Wrong object. Select user or item"}), 501
        return jsonify(dictionary)  

    except Exception as e:
        # Gestire eventuali errori
        return jsonify({'errore': str(e)}), 500

# Avviare il server Flask
if __name__ == '__main__':
    app.run(debug=True)
