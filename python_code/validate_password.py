import string

def validate_password(password: str) -> None:
    # ไม่สามารถเป็น None ได้
    if password is None:
        raise ValueError("Password cannot be None.")

    # ต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร
    if len(password) < 8:
        raise ValueError("Password must be at least 8 characters long.")

    special_chars = set(string.punctuation)

    # ต้องมีตัวเลขอย่างน้อย 1 ตัว
    if not any(char.isdigit() for char in password):
        raise ValueError("Password must contain at least one digit.")

    # ต้องมีอักษรพิเศษอย่างน้อย 1 ตัว
    if not any(char in special_chars for char in password):
        raise ValueError(f'Password must contain at least one special character from the list {string.punctuation}.')


# การใช้งาน Function
# try:
#     validate_password("mypassword")  # Will raise an error
# except ValueError as e:
#     print(f"Error: {e}")

# validate_password(None)
# validate_password("Test")
# validate_password("TestTest@")
validate_password("TestTest1")
