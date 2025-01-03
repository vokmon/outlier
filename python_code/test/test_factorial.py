def factorial(n: int) -> int:
    """
    Calculates the factorial of a number.

    Args:
        n (int): The number to calculate factorial for.

    Returns:
        int: The factorial of the number.
    """
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers.")
    return 1 if n == 0 else n * factorial(n - 1)


# # Test Case 1: Check if factorial of 0 returns 1
# def test_factorial_0():
#     assert factorial(0) == 1, "Test Case 1 Failed: factorial(0) should be 1"
#     print("Test Case 1 Passed")

# # Test Case 2: Check if factorial of a positive integer returns the correct value


# def test_factorial_positive():
#     assert factorial(3) == 6, "Test Case 2 Failed: factorial(3) should be 6"
#     assert factorial(
#         5) == 120, "Test Case 2 Failed: factorial(5) should be 120"
#     print("Test Case 2 Passed")

# # Test Case 3: Check if factorial raises an error for negative numbers


# def test_factorial_negative():
#     try:
#         factorial(-1)
#         assert False, "Test Case 3 Failed: factorial(-1) should raise a ValueError"
#     except ValueError:
#         pass
#     print("Test Case 3 Passed")

# # Test Case 4: Check if factorial raises an error for non-integer inputs


# def test_factorial_non_integer():
#     try:
#         factorial(3.5)
#         assert False, "Test Case 4 Failed: factorial(3.5) should raise a ValueError"
#     except ValueError:
#         pass
#     try:
#         factorial("3")
#         assert False, "Test Case 4 Failed: factorial('3') should raise a ValueError"
#     except ValueError:
#         pass
#     print("Test Case 4 Passed")


# # Run all test cases
# test_factorial_0()
# test_factorial_positive()
# test_factorial_negative()
# test_factorial_non_integer()

# # Summary
# print("\nAll test cases passed!")

# def test_factorial():
#     # Test case 1: n = 0
#     assert factorial(0) == 1, "Factorial of 0 should be 1"

#     # Test case 2: n = 3
#     assert factorial(3) == 6, "Factorial of 3 should be 6"

#     # Test case 3: n = 5
#     assert factorial(5) == 120, "Factorial of 5 should be 120"

#     # Test case 4: n = 7
#     assert factorial(7) == 5040, "Factorial of 7 should be 5040"

#     # Test case 5: n = 10
#     assert factorial(10) == 3628800, "Factorial of 10 should be 3628800"

#     # Test case 6: n = -2 (should raise ValueError)
#     try:
#         factorial(-2)
#     except ValueError as e:
#         assert str(e) == "Factorial is not defined for negative numbers.", "Error message for negative input should be 'Factorial is not defined for negative numbers.'"
#     else:
#         assert False, "Should raise ValueError for negative input"

#     # Test case 7: n = 'a' (should raise ValueError)
#     try:
#         factorial('a')
#     except ValueError as e:
#         assert str(e) == "Factorial is not defined for negative numbers.", "Error message for non-integer input should be 'Factorial is not defined for negative numbers.'"
#     else:
#         assert False, "Should raise ValueError for non-integer input"

#     # Test case 8: n = -1 (should raise ValueError)
#     try:
#         factorial(-1)
#     except ValueError as e:
#         assert str(e) == "Factorial is not defined for negative numbers.", "Error message for negative input should be 'Factorial is not defined for negative numbers.'"
#     else:
#         assert False, "Should raise ValueError for negative input"

#     # Test case 9: n = 0.5 (should raise ValueError)
#     try:
#         factorial(0.5)
#     except ValueError as e:
#         assert str(e) == "Factorial is not defined for negative numbers.", "Error message for non-integer input should be 'Factorial is not defined for negative numbers.'"
#     else:
#         assert False, "Should raise ValueError for non-integer input"

#     print("All test cases passed!")

# # Run the test function
# test_factorial()

# Test Case 1: factorial ของ 0 คือ 1
def test_factorial_0():
    assert factorial(0) == 1, "Test Case 1 Failed: factorial(0) should be 1"
    print("Test Case 1 Passed - Check if factorial of 0 returns 1")


# Test Case 2: ใส่ค่าของค่าจำนวนเต็มบวกแล้วได้ค่าที่ถูกต้อง
def test_factorial_positive():
    assert factorial(
        5) == 120, "Test Case 2 Failed: factorial(5) should be 120"
    print("Test Case 2 Passed - Check if factorial of a positive integer returns the correct value")


# Test Case 3: มี error กรณีใส่ค่าติดลบ
def test_factorial_negative():
    try:
        factorial(-1)
        assert False, "Test Case 3 Failed: factorial(-1) should raise a ValueError"
    except ValueError:
        pass
    print("Test Case 3 Passed - Check if factorial raises an error for negative numbers")

# Test Case 4: ใส่ค่าของค่าจำนวนเต็มบวกที่มีค่ามากแล้วได้ค่าที่ถูกต้อง
def test_factorial_positive_large_input():
    assert factorial(
        20) == 2432902008176640000, "Test Case 4 Failed: factorial(20) should be 2432902008176640000"
    print("Test Case 4 Passed - Check if factorial of a large positive integer returns the correct value")


test_factorial_0()
test_factorial_positive()
test_factorial_negative()
test_factorial_positive_large_input()