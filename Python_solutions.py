""" # 1 """ 

prompt = input('Enter the number of cups of coffee')
cups = int(prompt)
bonusCups = int(cups / 6)
print('Client will receive ' + str(cups) + ' cups of coffee and ' + str(bonusCups) + ' bonus coffee.')

""" # 2 """

chicken = int(input('Enter your number of Chickens'))
cow = int(input('Enter your number of Cows'))
pig = int(input('Enter your number of Pigs'))
legs = int(chicken * 2 + cow * 4 + pig * 4)
print('Animals of your farm has '  + str(legs) + ' legs')

""" # 3 """

minutes = int(input('Enter value of minutes'))

if minutes >= 1 and minutes < 15:
    print('I quarter')
elif minutes >= 15 and minutes < 30:
    print('II quarter')
elif minutes >= 30 and minutes < 45:
    print('III quarter')
elif minutes >= 45 and minutes < 60:
    print('IV quarter')
else:
    print('Error!!!')

""" # 4 """
""" v 1 """

stars = int(input('Enter count of stars'))
for s in range(stars):
    print('*' * (s + 1))

""" # 4 """
""" v 2 """

stars = int(input('Enter count of stars'))
i = 0
str = ''

while i < stars:
    print('*' * (i + 1))
    i += 1