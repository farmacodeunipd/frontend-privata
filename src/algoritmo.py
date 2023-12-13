from ai_classes import Model, FileInfo
'''
# qui creo un oggetto "Model", passandogli un oggetto "FileInfo"
model_instance = Model(file_info=FileInfo(model_file='trained_model.pkl', file_path="/Users/alessandro_passarella/Desktop/progettoSWE/frontend-privata/src/output_file.csv", column_1='cod_cli', column_2='cod_art', column_3='qta_ordinata'))
# effetto il training effettivo del modello chiamando il metodo "train_model()" sull'oggetto creato
model_instance.train_model()
# ora il modello è stato trainato e la sua memoria sarà presente un file con il nome specificato all'interno della definizione dell'oggetto della classe "FileInfo" sotto l'attributo "model_file", va lasciato lì
# prendo due valori a caso dal dataset per effettuare un test, so che i metodi della classe "Model" vogliono l'uid e l'iid in forma di INT:

user_id = 120
item_id = 1112226
# testo chiamando i metodi della classe "Model" per vedere i risultati da me ottenuti, posso specificare l'n che preferisco, altrimenti di default è 5
top_n_rating = model_instance.topN_1UserNItem(user_id)
print(f"Predicted Rating for User {user_id}: {top_n_rating}")
top_na_rating = model_instance.topN_1ItemNUser(item_id, n=10)
print(f"Predicted Rating for Item {item_id}: {top_na_rating}")
'''



class A:
    def __init__(self, model):
        self.model = model
        
    def top_5_utente (self, id):
        return self.model.topN_1UserNItem(id)

    def top_10_utente (self, id):
        return self.model.topN_1UserNItem(id, 10)

    def top_5_prodotto (self, id):
        return self.model.topN_1ItemNUser(id)

    def top_10_prodotto (self, id):
        return self.model.topN_1ItemNUser(id, 10)

    def trainModel (self):
        self.model.train_model()
'''
a = A(model = Model(file_info=FileInfo(model_file='trained_model.pkl', file_path="/Users/alessandro_passarella/Desktop/progettoSWE/frontend-privata/src/output_file.csv", column_1='cod_cli', column_2='cod_art', column_3='qta_ordinata')))
a.trainModel()

x = a.top_5_utente(120)
print (f"x={x}")
'''