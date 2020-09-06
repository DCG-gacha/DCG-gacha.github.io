import os


starList = ["3", "4", "5"]
elementList = ["Fire", "Water", "Grass", "Light", "Dark"]
typeList = ["Attacker", "Tanker", "Healer", "Buffer", "Debuffer"]
textPath = "../text/%sstar/list_%s.txt"
iconPath = "../image/icon/%s.png"
slotPath = "../image/slot/slot_%s.png"
childPath = "../image/child/%s.png"
command = "convert -page +0+0 %s \
        -page +0+0 %s \
        -background none -layers merge +repage %s"


def merge_element():
    for s in starList:
        for e in elementList:
            f = open(textPath % (s, s + e), "r")

            for l in f.readlines():
                name = l.strip()
                if name[0] != "c" and name[0] != "m":
                    continue

                name += "_01"
                os.system(command % (iconPath % name, slotPath % e, childPath % name))

            f.close()

def merge_star():
    for s in starList:
        f = open(textPath % (s, s), "r")

        for l in f.readlines():
            name = l.strip()
            if name[0] != "c" and name[0] != "m":
                continue

            name += "_01"
            os.system(command % (childPath % name, slotPath % s, childPath % name))

        f.close()

def main():
    merge_element()
    merge_star()

if __name__ == "__main__":
    main()
