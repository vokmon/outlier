import unittest


def to_title_case(text: str) -> str:
    """
    Converts a string to Title Case by lowercasing all characters first
    and then capitalizing the first letter of each word.
    Handles None and empty string inputs gracefully.

    Args:
        text (str): The string to convert.

    Returns:
        str: The string in Title Case, or an empty string if input is None or empty.
    """
    if not text:  # Check for None or empty string
        return ""
    return ' '.join(word.lower().capitalize() for word in text.split())

# class TestToTitleCase(unittest.TestCase):

#     def test_empty_string(self):
#         # Test with an empty string, should return an empty string
#         self.assertEqual(to_title_case(""), "")

#     def test_single_word_lowercase(self):
#         # Test with a single lowercase word, should capitalize the first letter
#         self.assertEqual(to_title_case("hello"), "Hello")

#     def test_single_word_uppercase(self):
#         # Test with a single uppercase word, should convert to title case
#         self.assertEqual(to_title_case("HELLO"), "Hello")

#     def test_sentence_lowercase(self):
#         # Test with a sentence in lowercase, should capitalize each word
#         self.assertEqual(to_title_case("hello world"), "Hello World")

#     def test_sentence_uppercase(self):
#         # Test with a sentence in uppercase, should convert to title case
#         self.assertEqual(to_title_case("HELLO WORLD"), "Hello World")

#     def test_mixed_case(self):
#         # Test with a sentence in mixed case, should convert to title case
#         self.assertEqual(to_title_case("hElLo WoRLd"), "Hello World")

#     def test_punctuation(self):
#         # Test with punctuation, punctuation should remain unaffected
#         self.assertEqual(to_title_case("hello, world!"), "Hello, World!")

#     def test_numbers(self):
#         # Test with numbers included, numbers should remain unaffected
#         self.assertEqual(to_title_case("hello world 123"), "Hello World 123")

#     def test_multiple_spaces(self):
#         # Test with multiple spaces, should normalize spaces between words
#         self.assertEqual(to_title_case("  hello   world  "), "Hello World")

#     def test_single_letter_words(self):
#         # Test with single letter words, each should be capitalized
#         self.assertEqual(to_title_case("a b c"), "A B C")

#     def test_mixed_with_non_letters(self):
#         # Test with mixed characters including non-letters
#         self.assertEqual(to_title_case("123 abc!@#"), "123 Abc!@#")

# if __name__ == "__main__":
#     unittest.main()


# def test_to_title_case():
#     # Test case 1: Normal sentence
#     # Input: "hello world"
#     # Expect letters at the beginning of each word to be capitalized: "Hello World"
#     assert to_title_case("hello world") == "Hello World"

#     # Test case 2: Sentence with mixed casing
#     # Input: "heLLo WoRLd"
#     # To ensure proper capitalization: "Hello World"
#     assert to_title_case("heLLo WoRLd") == "Hello World"

#     # Test case 3: Sentence with single word
#     # Input: "python"
#     # Single word should have only the first letter capitalized: "Python"
#     assert to_title_case("python") == "Python"

#     # Test case 4: String containing only spaces
#     # Input: "     "
#     # Should maintain as empty space (rical simplified): ""
#     assert to_title_case("     ") == ""

#     # Test case 5: Sentence with punctuation
#     # Input: "hello, world! how're things?"
#     # Should only capitalize start of words, junctions ignored: "Hello, World! How're Things?"
#     assert to_title_case("hello, world! how're things?") == "Hello, World! How're Things?"

#     # Test case 6: Sentence with leading and trailing spaces
#     # Input: "   leading and trailing   "
#     # Leading/trailing spaces don't affect normal capitalizing of words: "Leading And Trailing"
#     assert to_title_case("   leading and trailing   ") == "Leading And Trailing"

#     # Test case 7: Entire sentence already in Title Case
#     # Input: "Already In Title Case"
#     # Result should be unchanged if already correct: "Already In Title Case"
#     assert to_title_case("Already In Title Case") == "Already In Title Case"

#     # Test case 8: Empty string (edge case)
#     # Input: ""
#     # An empty string should return an empty string: ""
#     assert to_title_case("") == ""

#     # Test case 9: Sentence with numbers
#     # Input: "user 123 test"
#     # Captial letter placement to remain intact for words mixed with numbers: "User 123 Test"
#     assert to_title_case("user 123 test") == "User 123 Test"

#     print("All test cases passed.")

# # Run the tests
# test_to_title_case()



class TestToTitleCase(unittest.TestCase):
  def test_empty_string(self):
      # ส่งค่าว่างควรได้ค่าว่าง
      self.assertEqual(to_title_case(""), "", "An empty string should return an empty string")

  def test_spaces_string(self):
      # ส่งค่าว่างแบบเป็น space หลายๆตัว แล้วได้ค่าว่าง
      self.assertEqual(to_title_case("     "),"", "An empty string with spaces should return an empty string")
      
  def test_none_case(self):
      # ค่า None แล้วได้ผลลัพธ์เป็นค่าว่าง
      self.assertEqual(to_title_case(None),"", "None should return an empty string")
      
  def test_title_case_string(self):
      # ข้อความที่เป็น title case ผลลัพธ์จะไม่มีการเปลี่ยนแปลง
      self.assertEqual(to_title_case("Already In Title Case"), "Already In Title Case", "Result should be unchanged if already correct")
      
  def test_single_word_lowercase(self):
      # ทดสอบด้วยคำที่เป็นตัวพิมพ์เล็ก ผลลัพธ์คือตัวอักษรแรกถูกแปลงเป็นพิมพ์ใหญ่
      self.assertEqual(to_title_case("hello"), "Hello", "Test with a single lowercase word, should capitalize the first letter")

  def test_single_word_uppercase(self):
      # คำที่เป็นตัวพิมพ์ใหญ่ทั้งหมด ผลลัพธ์คือตัวอักษรแรกถูกแปลงเป็นพิมพ์ใหญ่และที่เหลือเป็นตัวเล็ก
      self.assertEqual(to_title_case("HELLO"), "Hello", "Single uppercase word, should convert to title case")

  def test_sentence_lowercase(self):
      # ประโยคที่เป็นตัวพิมพ์เล็กทั้งหมด ผลลัพธ์คือตัวอักษรแรกในทุกคำเป็นตัวพิมพ์ใหญ่
      self.assertEqual(to_title_case("hello world"), "Hello World", "Sentence in lowercase should capitalize each word")

  def test_sentence_uppercase(self):
      # ประโยคที่เป็นตัวพิมพ์ใหญ่ทั้งหมด ผลลัพธ์คือตัวอักษรแรกในทุกคำเป็นตัวพิมพ์ใหญ่และที่เหลือในคำเป็นพิมพ์เล็ก
      self.assertEqual(to_title_case("HELLO WORLD"), "Hello World", "Sentence in uppercase should convert to title case")

  def test_mixed_case(self):
      # มีตัวอักษรใหญ่และเล็กผสมกันในประโยค
      self.assertEqual(to_title_case("hElLo WoRLd"), "Hello World", "A sentence in mixed case should convert to title case")

  def test_punctuation(self):
      # ตัวอักขระพิเศษในประโยคไม่มีการเปลี่ยนแปลง
      self.assertEqual(to_title_case("hello, world! how're things?"), "Hello, World! How're Things?", "Punctuation should remain unaffected")

  def test_numbers(self):
      # ตัวเลขในข้อความไม่มีการเปลี่ยนแปลง
      self.assertEqual(to_title_case("hello world 123"), "Hello World 123", "Numbers should remain unaffected")

  def test_multiple_spaces(self):
      # มีช่องว่างระหว่างคำแรกและคำสุดท้าย
      self.assertEqual(to_title_case("   leading and trailing   "), "Leading And Trailing", "Multiple spaces should normalize spaces between words")

  def test_single_letter_words(self):
      # ประโยคประกอบด้วยคำที่มี 1 ตัวอักษรหลายๆ ตัว
      self.assertEqual(to_title_case("a b c"), "A B C", "Single letter words each should be capitalized")

  def test_mixed_with_non_letters(self):
      # ตัวอักขระพิเศษที่ไม่ได้อยู่ในคำใดๆ
      self.assertEqual(to_title_case("123 abc !@#"), "123 Abc !@#", "Should handle mixed characters including non-letters")


if __name__ == "__main__":
    unittest.main()
