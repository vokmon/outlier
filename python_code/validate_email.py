
import re
import unittest

def validate_email(email: str):
    """
    Validates if the given string is a valid email address.

    Args:
        email (str): The email address to validate.

    Returns:
        bool: True if valid, False otherwise.
    """
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(email_regex, email))


class TestValidateEmail(unittest.TestCase):
    def test_valid_emails(self):
        """Test cases for valid email addresses."""
        valid_emails = [
            "example@example.com",
            "user.name+tag@domain.co.uk",
            "user123@example.io",
            "a@b.co",
            "email@sub.domain.com",
        ]
        for email in valid_emails:
            with self.subTest(email=email):
                self.assertTrue(validate_email(email), f"Valid email {email} failed validation")

    def test_invalid_emails(self):
        """Test cases for invalid email addresses."""
        invalid_emails = [
            "plainaddress",
            "missingatsign.com",
            "@missingusername.com",
            "username@.com",
            "username@com",
            "username@domain..com",
            "username@domain,com",
            "username@domain space.com",
            "username@domain..co.uk",
            "username@domain.123",  # Invalid TLD
            "username@-domain.com",  # Invalid domain
        ]
        for email in invalid_emails:
            with self.subTest(email=email):
                self.assertFalse(validate_email(email), f"Invalid email {email} passed validation")

    def test_empty_string(self):
        """Test case for an empty string."""
        self.assertFalse(validate_email(""), "Empty string should fail validation")

    def test_whitespace_email(self):
        """Test case for email with only whitespace."""
        self.assertFalse(validate_email("   "), "Whitespace-only email should fail validation")

    def test_edge_cases(self):
        """Test edge cases."""
        edge_cases = {
            "a@b.c": True,  # Minimum valid email
            "a@b..c": False,  # Invalid with consecutive dots
        }
        for email, expected in edge_cases.items():
            with self.subTest(email=email):
                self.assertEqual(validate_email(email), expected, f"Edge case {email} failed")

if __name__ == "__main__":
    unittest.main()