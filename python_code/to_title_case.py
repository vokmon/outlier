# def to_title_case(text: str) -> str:
#     """
#     Converts a string to Title Case by lowercasing all characters first
#     and then capitalizing the first letter of each word.
#     Handles None and empty string inputs gracefully.

#     Args:
#         text (str): The string to convert.

#     Returns:
#         str: The string in Title Case, or an empty string if input is None or empty.
#     """
#     if not text:  # Check for None or empty string
#         return ""
#     return ' '.join(word.lower().capitalize() for word in text.split())



# def to_title_case(text):
#     """
#     This function converts any given string to title case, where the first letter of each word is capitalized and 
#     all other letters are in lowercase. If the input is None, an empty string, or contains only whitespace, 
#     an empty string is returned.

#     Parameters:
#     text (str): The string to be converted to title case.

#     Returns:
#     str: The converted string in title case or an empty string if the input is None, empty, or contains only whitespace.
#     """
    
#     # Check if the input is None or if it is an empty string or only contains whitespace
#     if text is None or text.strip() == "":
#         # Return an empty string if any of the above conditions are true
#         return ""
        
#     # Convert the string to title case
#     title_case_text = text.title()
    
#     return title_case_text

# # Examples of using the to_title_case function

# example1 = to_title_case("hello world!")
# print(example1)  # Output: "Hello World!"

# example2 = to_title_case("python programming language")
# print(example2)  # Output: "Python Programming Language"

# example3 = to_title_case(None)
# print(example3)  # Output: ""

# example4 = to_title_case("")
# print(example4)  # Output: ""

# example5 = to_title_case("   ")
# print(example5)  # Output: ""



def convert_to_title_case(s):
    """
    Convert a given string to title case. If the input is `None`, empty, or contains only whitespace,
    return an empty string.

    Parameters:
    s (str): The input string to be converted.

    Returns:
    str: The converted string in title case or an empty string if the input is invalid.
    """
    # Check if the input is None, empty, or just whitespace
    if s is None or s.strip() == '':
        return ''

    # Convert the string to title case
    return s.title()

# Examples of using the function
example1 = convert_to_title_case("this is a sample string")
print(example1)  # Output: "This Is A Sample String"

example2 = convert_to_title_case("ANotHER eXample wITH mixed CasE")
print(example2)  # Output: "Another Example With Mixed Case"

example3 = convert_to_title_case("")  # Empty string
print(example3)  # Output: ""

example4 = convert_to_title_case("   ")  # String with only spaces
print(example4)  # Output: ""

example5 = convert_to_title_case(None)  # None input
print(example5)  # Output: ""