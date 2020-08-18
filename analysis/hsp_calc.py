import pandas as pd
import HSP
import numpy as np
import hsluv
import pprint
from copy import deepcopy


def main():
    s, l = analyse_data(colors)
    print(generate_array('#ED8936', "DULL"))


def analyse_data(dict):
    dh, ds, dl = analyse_list(dict)
    dh.to_csv("h.csv")
    ds.to_csv("s.csv")
    dl.to_csv("l.csv")
    # print(dh, ds, dl)
    h = np.round(dh.median().values, 2)
    s = np.round(ds.median(axis=1).values, 2)
    l = np.round(dl.median(axis=1).values, 2)
    print("Average Hue Per Color: {}\nAverage Saturation per Shade: {}\nAverage Lightness per Shade: {}".format(h, s, l))
    # print(dh)
    # print(ds)
    # print(dl)
    return s, l


def analyse_list(li):
    dh = deepcopy(li)
    ds = deepcopy(li)
    dl = deepcopy(li)
    for k, v in dh.items():
        for k2, v2 in v.items():
            # print(k, k2, v2)
            h, s, l = hsluv.hex_to_hsluv(v2)
            dh[k][k2] = h
            ds[k][k2] = s
            dl[k][k2] = l

    return pd.DataFrame(dh), pd.DataFrame(ds), pd.DataFrame(dl)


def generate_array(hex, type=None, num=9):
    # values = np.linspace(100, 0, 12)
    # l = np.linspace(98, 12, num)
    s = np.concatenate(([100], np.linspace(88, 68, num - 1, 1)))
    if type == "DULL":
        s = np.linspace(45, 35, num)
        l = np.linspace(98, 10, num)
    elif type == "BRIGHT":
        l = np.linspace(98, 25, num)
        s = np.linspace(90, 100, num)
    print("Lightness:", l)
    print("Saturation:", s)
    colors = []
    h, _, _ = hsluv.hex_to_hsluv(hex)
    for s2, l2 in zip(s, l):
        colors.append(hsluv.hsluv_to_hex([h, s2, l2]))
        # print(hsluv.hpluv_to_hex(h, s, p), h, s, p)
    return colors


def gen_log(biggest, smallest, num, direction=-1):
    l = np.logspace(np.log10(biggest), np.log10(smallest), num)
    if direction == -1:
        l = [max(l) + min(l) - x for x in l][::-1]
    return l


colors = {
    "gray": {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
    },
    "red": {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
    },
    "orange": {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
    },
    "yellow": {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
    },
    "green": {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
    },
    "teal": {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
    },
    "blue": {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
    },
    "indigo": {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
    },
    "purple": {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
    },
    "pink": {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
    }
}


if __name__ == "__main__":
    main()
# data =
# df = pd.DataFrame(data=data)
# print(df)
# print(df.mean(axis=1).values)
# df = pd.DataFrame()
# df['grays'] = pd.DataFrame(data)
# print(df)

# print(generate_array('#38b2ac'))
