starList = ["3", "4", "5"]
elementList = ["Fire", "Water", "Grass", "Light", "Dark"]
typeList = ["Attacker", "Tanker", "Healer", "Buffer", "Debuffer"]

def main():
    db = []

    for s in starList:
        for e in elementList:
            for t in typeList:
                f = open("../text/" + s + "star/" + s + e + t + ".txt")
                for l in f.readlines():
                    if l.strip() in db:
                        print s + e + t + ".txt"
                    else:
                        db.append(l.strip())
                f.close()


    print db, len(db)


if __name__ == "__main__":
    main()
