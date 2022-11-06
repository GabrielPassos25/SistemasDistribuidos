from random import randint


def get_random_pseudo_oscillation(value, interval=5, min=0, max=100):
    positive_oscillation = randint(0, interval)
    negative_oscillation = randint(0, interval)
    new_value = value + positive_oscillation - negative_oscillation
    if new_value < min:
        return min
    if new_value > max:
        return max

    return new_value


