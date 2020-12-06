import tensorflow as tf
import csv
from pprint import pprint
import sys
import numpy as np
import pathlib

class Team:
	def __init__(self, name, gpm):
		self.name = name
		self.gpm = gpm
	
	def __str__(self):
		return f'Team({self.name}: {self.gpm})'
	def __repr__(self):
		return self.__str__()


if __name__ == "__main__":

	# Importar datos
	teams = []
	with open('proccessed.csv', newline='') as f:
		csvreader = csv.reader(f)
		csvreader.__next__() # Skip first line

		for row in csvreader:
			teams.append(Team(row[0], float(row[3])))

	# Definir las variables x y y
	x1 = []
	x2 = []
	y = []
	for homeTeam in teams:
		for awayTeam in teams:
			x1.append(homeTeam.gpm)
			x2.append(awayTeam.gpm)
			y.append(homeTeam.gpm - awayTeam.gpm)
			# result = homeTeam.gpm - awayTeam.gpm
			# print(f'Home {homeTeam.name} ({homeTeam.gpm}) vs Away {awayTeam.name} ({awayTeam.gpm}): {result}')
	
	
	merged_array = np.stack([x1, x2], axis=1)
	pprint(merged_array)

	model0 = tf.keras.Sequential([
		tf.keras.layers.Dense(2, input_dim=2, activation=tf.keras.activations.linear, bias_initializer=tf.keras.initializers.RandomNormal(), use_bias=True),
		tf.keras.layers.Dense(1, activation=tf.keras.activations.linear, bias_initializer=tf.keras.initializers.RandomNormal(), use_bias=True),
	])

	model0.compile(
		optimizer = tf.keras.optimizers.RMSprop(lr=0.02,rho=0.9,epsilon=None,decay=0),
		loss = 'mean_squared_error',
		metrics=['accuracy']
	)

	model0.fit(np.asarray(merged_array),np.asarray(y), epochs=100)

	model0.save('my_model/1')

	# Prediction
	print('Prediction: {}'.format(model0.predict([[1.23684211, 0.65789474]])))
