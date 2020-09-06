starList = ["3", "4", "5"]
elementList = ["Fire", "Water", "Grass", "Light", "Dark"]
typeList = ["Attacker", "Tanker", "Healer", "Buffer", "Debuffer"]
inputPath = "../text/%sstar/details/%s.txt"
outputPath = "../text/%sstar/list_%s.txt"

def allMaker(s):
    fout = open(outputPath % (s, s), "w")
    for e in elementList:
        for t in typeList:
            fin = open(inputPath % (s, s + e + t), "r")
            for l in fin.readlines():
                c = l.strip()
                if c[0] == "c" or c[0] == "m":
                    fout.write(c + "\n")

            fin.close()

    fout.close()


def elementMaker(s, e):
    fout = open(outputPath % (s, s + e), "w")
    for t in typeList:
        fin = open(inputPath % (s, s + e + t), "r")
        for l in fin.readlines():
            c = l.strip()
            if c[0] == "c" or c[0] == "m":
                fout.write(c + "\n")

        fin.close()

    fout.close()

def typeMaker(s, t):
    fout = open(outputPath % (s, s + t), "w")
    for e in elementList:
        fin = open(inputPath % (s, s + e + t), "r")
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
