import unittest
import string

def validate_password(password: str) -> None:
    if password is None:
        raise ValueError("Password cannot be None.")

    if len(password) < 8:
        raise ValueError("Password must be at least 8 characters long.")

    special_chars = set(string.punctuation)

    # ต้องมีตัวเลขอย่างน้อย 1 ตัว
    if not any(char.isdigit() for char in password):
        raise ValueError("Password must contain at least one digit.")

    if not any(char in special_chars for char in password):
        raise ValueError(f'Password must contain at least one special character from the list {string.punctuation}.')


class TestValidatePassword(unittest.TestCase):
    def test_none_password(self):
        with self.assertRaises(ValueError) as context:
            validate_password(None)
        self.assertEqual(str(context.exception),
                         "Password cannot be None.")

    def test_short_password(self):
        with self.assertRaises(ValueError) as context:
            validate_password("abc123!")
        self.assertEqual(str(context.exception),
                         "Password must be at least 8 characters long.")

    def test_no_digit_password(self):
        with self.assertRaises(ValueError) as context:
            validate_password("abcdefgh!")
        self.assertEqual(str(context.exception),
                         "Password must contain at least one digit.")

    def test_no_special_char_password(self):
        with self.assertRaises(ValueError) as context:
            validate_password("abcd1234")
        self.assertEqual(str(context.exception),
                         f"Password must contain at least one special character from the list {string.punctuation}.")

    def test_valid_password(self):
        try:
            validate_password("Abcd1234!")
        except ValueError as e:
            self.fail(
                f"validate_password raised an exception unexpectedly: {e}")

unittest.main()
