lista = [1,3,5,7]
lista_animal = ['cachorro','gato','elefante']
print(lista_animal[1])

for x in lista_animal:
    print(x)

print(sum(lista))
print(max(lista))
print(min(lista))

lista_animal.append('lobo')
print(lista_animal)

lista_animal.pop(1)
print(lista_animal)
 
lista_animal.remove('elefante')
print(lista_animal)

lista_animal.sort()
lista.sort()
print(lista_animal)

lista_animal[0] = 'arara'
print(lista_animal)

tupla = [1,10,12,18]
print(len(tupla))