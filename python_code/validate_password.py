import string

PASSWORD_LENGTH = 8
SPECIAL_CHARS = set(string.punctuation)

def validate_password(password: str) -> None:
    """
    ตรวจสอบเงื่อนไขของรหัสผ่าน เงืื่อนไขคือ
    - มีความยาวอย่างน้อย 8 ตัว
    - ให้มีตัวเลขอย่างน้อย 1 ตัว
    - ให้มีอักขระพิเศษอย่างน้อย 1 ตัว

    :ค่าที่รับ password: รหัสผ่านที่จะตรวจสอบ
    :raises ValueError: ถ้ารหัสผ่านไม่ตรงกับเงื่อนไข
    """
    
    # ไม่สามารถเป็น None ได้
    if password is None:
        raise ValueError("Password cannot be None.")

    # ต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร
    if len(password) < PASSWORD_LENGTH:
        raise ValueError(f"Password must be at least {PASSWORD_LENGTH} characters long.")


    # ต้องมีตัวเลขอย่างน้อย 1 ตัว
    if not any(char.isdigit() for char in password):
        raise ValueError("Password must contain at least one digit.")

    # ต้องมีอักษรพิเศษอย่างน้อย 1 ตัว
    if not any(char in SPECIAL_CHARS for char in password):
        raise ValueError(f'Password must contain at least one special character from the list {SPECIAL_CHARS}.')


# การใช้งาน Function
# try:
#     validate_password("mypassword")  # ได้ error ValueError
# except ValueError as e:
#     print(f"Error: {e}")

# validate_password('TestTest@123') # รูปแบบถูกต้อง
# validate_password(None) # ได้ error Password cannot be None.
# validate_password("Test") # ได้ error Password must be at least 8 characters long.
# validate_password("TestTest@") # ได้ error Password must contain at least one digit.
validate_password("TestTest1") # ได้ error Password must contain at least one special character from the list


