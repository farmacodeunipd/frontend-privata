from flask import Flask, request, jsonify
#from algoritmo import Algoritmo
from algoritmo import A
from ai_classes import Model, FileInfo

app = Flask(__name__)

a = A(model = Model(file_info=FileInfo(model_file='trained_model.pkl', file_path="/Users/alessandro_passarella/Desktop/progettoSWE/frontend-privata/src/output_file.csv", column_1='cod_cli', column_2='cod_art', column_3='qta_ordinata')))
a.trainModel()

# Endpoint per la comunicazione con l'algoritmo
@app.route('/esegui_algoritmo/<n>')
def esegui_algoritmo_endpoint(n):
    try:
        
        risultato = a.top_5_utente(n)
        
        risultato = dict(risultato)

        mio_dizionario = {}
        for k,v in risultato.items() : 
            mio_dizionario[k] = v

        return jsonify(mio_dizionario)

    except Exception as e:
        # Gestire eventuali errori
        return jsonify({'errore': str(e)}), 501

# Avviare il server Flask
if __name__ == '__main__':
    app.run(debug=True)
