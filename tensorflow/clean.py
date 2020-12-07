import csv
from pprint import pprint

class TeamEntry:
	def __init__(self, name, goals, times):
		self.name = name
		self.goals = goals
		self.times = times
	
	def avg(self):
		return self.goals / self.times
	
	def __str__(self):
		return f'TeamEntry(name={self.name}, goals={self.goals}, times={self.times})'
	
	def __repr__(self):
		return self.__str__()
	

if __name__ == "__main__":
	teams = {}

	with open('mongo-dump.csv', newline='') as f:
		csvreader = csv.reader(f)

		i = 0
		csvreader.__next__() # eliminate first line

		for line in csvreader:

			homeTeam = line[3]
			awayTeam = line[4]
			homeGoals = int(line[5])
			awayGoals = int(line[6])

			try:
				entry = teams[homeTeam]
				entry.goals += homeGoals
				entry.times += 1
			except KeyError:
				teams[homeTeam] = TeamEntry(homeTeam, homeGoals, 1)
			
			try:
				entry = teams[awayTeam]
				entry.goals += awayGoals
				entry.times += 1
			except KeyError:
				teams[awayTeam] = TeamEntry(awayTeam, awayGoals, 1)
	
	with open('proccessed.csv', 'w', newline='', encoding='utf-8') as f:
		csvwriter = csv.writer(f)

		csvwriter.writerow(('teamName', 'goals', 'matches', 'goalsPerMatches'))

		for team in teams.values():
			csvwriter.writerow((team.name, team.goals, team.times, team.avg()))
	