# 5. Cricket Score Tracker
# A cricket player’s runs from 15 matches are stored in a list. Write a program to: Find total runs. Find the highest score.
# Count the number of half-centuries (50+). Count the number of ducks (0 runs).



runs = []

print("Enter runs scored in 15 matches:")

for i in range(15):
    score = int(input(f"Match {i + 1}: "))
    runs.append(score)

total_runs = sum(runs)
highest_score = max(runs)

half_centuries = 0
ducks = 0

for score in runs:
    if score >= 50:
        half_centuries += 1
    if score == 0:
        ducks += 1

print("\nRuns:", runs)
print("Total Runs:", total_runs)
print("Highest Score:", highest_score)
print("Half-Centuries:", half_centuries)
print("Ducks:", ducks)





