a = input("1º valor: ")
b = input("2º valor: ")
c = input("3º valor: ")
if a > b and a > c:
    print("O maior numero é {}.".format(a))
elif b>a and b>c :
    print("O maior numero é {}.".format(b))
else :
    print("O maior numero é {}.". format(c))
print("final do programa.")