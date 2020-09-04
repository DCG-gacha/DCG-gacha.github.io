starList = ["3", "4", "5"]
elementList = ["Fire", "Water", "Grass", "Light", "Dark"]
typeList = ["Attacker", "Tanker", "Healer", "Buffer", "Debuffer"]
path = "../text/"

def allMaker(s):
    fout = open(path + s + "star/" + "list_" + s + ".txt", "w")
    for e in elementList:
        for t in typeList:
            fin = open(path + s + "star/details/" + s + e + t + ".txt", "r")
            for l in fin.readlines():
                c = l.strip()
                if c[0] == "c" or c[0] == "m":
                    fout.write(c + "\n")

            fin.close()

    fout.close()


def elementMaker(s, e):
    fout = open(path + s + "star/" + "list_" + s + e + ".txt", "w")
    for t in typeList:
        fin = open(path + s + "star/details/" + s + e + t + ".txt", "r")
        for l in fin.readlines():
            c = l.strip()
            if c[0] == "c" or c[0] == "m":
                fout.write(c + "\n")

        fin.close()

    fout.close()

def typeMaker(s, t):
    fout = open(path + s + "star/" + "list_" + s + t + ".txt", "w")
    for e in elementList:
        fin = open(path + s + "star/details/" + s + e + t + ".txt", "r")
        for l in fin.readlines():
            c = l.strip()
            if c[0] == "c" or c[0] == "m":
                fout.write(c + "\n")

        fin.close()

    fout.close()

def main():
    for s in starList:
        allMaker(s)

        for e in elementList:
            elementMaker(s, e)

        for t in typeList:
            typeMaker(s, t)

if __name__ == "__main__":
    main()
