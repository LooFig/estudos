# a = 0
# while a <= 10:
#     print(a)
#     a += 1

a = int(input("1º Bimestre: "))
while a > 10:
    a = int(input("Voce digitou errado: 1º Bimestre: "))
b = int(input("2º Bimestre: "))
while a > 10:
    b = int(input("Voce digitou errado: 2º Bimestre: "))
c = int(input("3º Bimestre: "))
while a > 10:
    c = int(input("Voce digitou errado: 3º Bimestre: "))
d = int(input("4º Bimestre: "))
while a > 10:
    d = int(input("Voce digitou errado: 4º Bimestre: "))
média = (a + b + c + d) / 4
#if a <= 10 and b <= 10 and c <= 10 and d <= 10 :
print("A média é {}.".format(média))
