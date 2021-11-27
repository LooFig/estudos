for i in range(101):
    
    div = 0
    for x in range(1, i+1) :
        resto = i % x
        if resto == 0:
            div += 1

    if div == 2:
        print(i)