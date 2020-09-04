import os


def main():
    path = "/home/kang/dc/gacha/text/4star/"
    for filename in os.listdir(path):
        if filename[0] == "5" or filename[0] == "3":
            os.rename(path + filename, path + "4" + filename[1:])


if __name__ == "__main__":
    main()
