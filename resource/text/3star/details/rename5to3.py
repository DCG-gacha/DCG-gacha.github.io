import os


def main():
    path = "/home/kang/dc/gacha/text/3star/"
    for filename in os.listdir(path):
        if filename[0] == "5" or filename[0] == "4":
            os.rename(path + filename, path + "3" + filename[1:])


if __name__ == "__main__":
    main()
