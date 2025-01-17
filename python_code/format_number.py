def format_number(number: float) -> str:
    """
    Formats a number into #,###.## format.

    Args:
        number (float): The number to format.

    Returns:
        str: The formatted number as a string.
    """
    if number is None:
        return ""
    return f"{number:,.2f}"


print(format_number(100))   # Output: "1,234,567.89"
print(format_number(1234567.89))   # Output: "1,234,567.89"
print(format_number(1234))        # Output: "1,234.00"
print(format_number(-98765.4321))  # Output: "-98,765.43"
print(format_number(None))        # Output: ""
