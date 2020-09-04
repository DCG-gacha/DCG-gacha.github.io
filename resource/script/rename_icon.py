import os


def main():
    f = open("../text/list.txt", "r")
    namelist = []

    for l in f.readlines():
        n = l.strip().split('\t')[0]
        if n[0] == 'c' or n[0] == 'm':
            namelist.append(n)


    path = "/mnt/d/dc/krcharpack/icon/"
    subdirs = ["c0", "c1", "c2", "c3", "c4", "m0", "m1", "m2"]

    for subdir in subdirs:
        for filename in os.listdir(path + subdir):
            os.rename(path + subdir + "/" + filename, path + subdir + "/" + namelist.pop(0) + ".png")

    f.close()


if __name__ == "__main__":
    main()
