N = 5

# Outer loop runs N times
for i in range(1, N):
    # Inner loop prints 'N - i + 1' stars
    for j in range(1, N - i + 2):
        print("*", end="")
    # Move to the next line
    print()