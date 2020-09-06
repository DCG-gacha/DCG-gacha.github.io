starList = ["3", "4", "5"]
elementList = ["Fire", "Water", "Grass", "Light", "Dark"]
typeList = ["Attacker", "Tanker", "Healer", "Buffer", "Debuffer"]
path = "../text/%sstar/details/%s.txt"

def main():
    db = []

    for s in starList:
        for e in elementList:
            for t in typeList:
                f = open(path % (s, s + e + t))
                for l in f.readlines():
                    if l.strip() in db:
                        print l.strip(), s + e + t + ".txt"
                    else:
                        db.append(l.strip())
                f.close()


    print db, len(db)


if __name__ == "__main__":
    main()
