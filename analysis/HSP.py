from math import sqrt

Pr = .299
Pg = .587
Pb = .114


def RGBtoHSP(R, G, B):
    P = sqrt(R * R * Pr + G * G * Pg + B * B * Pb)
    if R == G and R == B:
        H = 0.
        S = 0.
    elif R >= G and R >= B:
        if B >= G:
            H = 6. / 6. - 1. / 6. * (B - G) / (R - G)
            S = 1. - G / R
        else:
            H = 0. / 6. + 1. / 6. * (G - B) / (R - B)
            S = 1. - B / R
    elif G >= R and G >= B:
        if R >= B:
            H = 2. / 6. - 1. / 6. * (R - B) / (G - B)
            S = 1. - B / G
        else:
            H = 2. / 6. + 1. / 6. * (B - R) / (G - R)
            S = 1. - R / G
    else:
        if (G >= R):
            H = 4. / 6. - 1. / 6. * (G - R) / (B - R)
            S = 1. - R / B
        else:
            H = 4. / 6. + 1. / 6. * (R - G) / (B - G)
            S = 1. - G / B
    return H, S, P


def HSPtoRGB(H, S, P):
    minOverMax = 1. - S

    if (minOverMax > 0.):
        if (H < 1. / 6.):
            H = 6. * (H - 0. / 6.)
            part = 1. + H * (1. / minOverMax - 1.)
            B = P / sqrt(Pr / minOverMax / minOverMax + Pg * part * part + Pb)
            R = (B) / minOverMax
            G = (B) + H * ((R) - (B))
        elif (H < 2. / 6.):
            H = 6. * (-H + 2. / 6.)
            part = 1. + H * (1. / minOverMax - 1.)
            B = P / sqrt(Pg / minOverMax / minOverMax + Pr * part * part + Pb)
            G = (B) / minOverMax
            R = (B) + H * ((G) - (B))
        elif (H < 3. / 6.):
            H = 6. * (H - 2. / 6.)
            part = 1. + H * (1. / minOverMax - 1.)
            R = P / sqrt(Pg / minOverMax / minOverMax + Pb * part * part + Pr)
            G = (R) / minOverMax
            B = (R) + H * ((G) - (R))
        elif (H < 4. / 6.):
            H = 6. * (-H + 4. / 6.)
            part = 1. + H * (1. / minOverMax - 1.)
            R = P / sqrt(Pb / minOverMax / minOverMax + Pg * part * part + Pr)
            B = (R) / minOverMax
            G = (R) + H * ((B) - (R))
        elif (H < 5. / 6.):
            H = 6. * (H - 4. / 6.)
            part = 1. + H * (1. / minOverMax - 1.)
            G = P / sqrt(Pb / minOverMax / minOverMax + Pr * part * part + Pg)
            B = (G) / minOverMax
            R = (G) + H * ((B) - (G))
        else:
            H = 6. * (-H + 6. / 6.)
            part = 1. + H * (1. / minOverMax - 1.)
            G = P / sqrt(Pr / minOverMax / minOverMax + Pb * part * part + Pg)
            R = (G) / minOverMax
            B = (G) + H * ((R) - (G))
    else:
        if (H < 1. / 6.):
            H = 6. * (H - 0. / 6.)
            R = sqrt(P * P / (Pr + Pg * H * H))
            G = (R) * H
            B = 0.
        elif (H < 2. / 6.):
            H = 6. * (-H + 2. / 6.)
            G = sqrt(P * P / (Pg + Pr * H * H))
            R = (G) * H
            B = 0.
        elif (H < 3. / 6.):
            H = 6. * (H - 2. / 6.)
            G = sqrt(P * P / (Pg + Pb * H * H))
            B = (G) * H
            R = 0.
        elif (H < 4. / 6.):
            H = 6. * (-H + 4. / 6.)
            B = sqrt(P * P / (Pb + Pg * H * H))
            G = (B) * H
            R = 0.
        elif (H < 5. / 6.):
            H = 6. * (H - 4. / 6.)
            B = sqrt(P * P / (Pb + Pr * H * H))
            R = (B) * H
            G = 0.
        else:
            H = 6. * (-H + 6. / 6.)
            R = sqrt(P * P / (Pr + Pb * H * H))
            B = (R) * H
            G = 0.
    return R, G, B
