# def factorial(n: int) -> int:
#     """
#     Calculates the factorial of a number.

#     Args:
#         n (int): The number to calculate factorial for.

#     Returns:
#         int: The factorial of the number.
#     """
#     if n < 0:
#         raise ValueError("Factorial is not defined for negative numbers.")
#     return 1 if n == 0 else n * factorial(n - 1)


# def factorial(n: int) -> int:
#     """
#     Calculate the factorial of a non-negative integer n.
    
#     Parameters:
#     n (int): A non-negative integer up to 1000, inclusive.
    
#     Returns:
#     int: The factorial of the number n.
    
#     Raises:
#     ValueError: If n is negative or greater than 1000.

#     """
#     # Validate input
#     if n < 0 or n > 1000:
#         raise ValueError("Input must be a non-negative integer between 0 and 1000, inclusive.")

#     # Handle the base case for 0
#     if n == 0:
#         return 1

#     # Initialize the result
#     result = 1

#     # Iteratively calculate the factorial
#     for i in range(2, n + 1):
#         result *= i
    
#     return result

# Example
# Example usage:
# print(factorial(5))  # Output: 120
# print(factorial(0))  # Output: 1
# print(factorial(1000))  # Output: 1
# print(factorial(10000))  # Output: 1


# def factorial(n):
#     """
#     คำนวนผลคูณของจำนวนเต็มบวกตั้งแต่ 1 ถึง ค่า n ที่กำหนด
    
#     :ค่าที่รับ n: จำนวนเต็มบวก มีค่าระหว่าง 0 ถึง 1000
              
#     :ผลลัพธ์: ผลคูณของ 1 ถึง ค่าที่กำหนด, กรณี n เป็น 0 ผลลัพธ์เป็น 1
    
#     :raises ValueError: กรณี n ไม่อยู่ในช่วง 0 - 1000
#     """

#     # ตรวจสอบว่าค่าที่รับมาเป็นเลขจำนวนเต็ม และ อยู่ในช่วง 0 ถึง 1000
#     if not isinstance(n, int) or n < 0 or n > 1000:
#         raise ValueError("Input must be a non-negative integer from 0 to 1000.")
    
#     # กรณี n เป็น 0 ผลลัพธ์คือ 1
#     if n == 0:
#         return 1
    
#     # คำนวน factorial โดยใช้ loop
#     result = 1
#     for i in range(2, n + 1):
#         result *= i
    
#     return result

# print(factorial(5))  # Output: 120
# print(factorial(0))  # Output: 1
# print(factorial(1000))  # Output: 1
# print(factorial(10000))  # ได้ error ValueError: Input must be a non-negative integer from 0 to 1000.




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

print(factorial(10000))