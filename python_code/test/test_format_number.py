import unittest

# def format_number(number: float) -> str:
#     if number is None:
#         return ""
#     return f"{number:,.2f}"

# class TestFormatNumber(unittest.TestCase):

#     def test_normal_case(self):
#         self.assertEqual(format_number(123456.789), "123,456.79")
#         self.assertEqual(format_number(-123456.789), "-123,456.79")
#         self.assertEqual(format_number(0), "0.00")
#         self.assertEqual(format_number(123456.78), "123,456.78")
#         self.assertEqual(format_number(123456), "123,456.00")

#     def test_large_numbers(self):
#         self.assertEqual(format_number(123456789.123), "123,456,789.12")
#         self.assertEqual(format_number(-123456789.123), "-123,456,789.12")

#     def test_small_numbers(self):
#         self.assertEqual(format_number(0.000123), "0.00")
#         self.assertEqual(format_number(-0.000123), "-0.00")

#     def test_none_value(self):
#         self.assertEqual(format_number(None), "")

# if __name__ == '__main__':
#     unittest.main()
    
import unittest

def format_number(number: float) -> str:
    if number is None:
        return ""
    return f"{number:,.2f}"

class TestFormatNumber(unittest.TestCase):

    # เมื่อค่าเป็นเลขจำนวนเต็ม
    def test_format_integer(self):
        self.assertEqual(format_number(123456), "123,456.00")
        self.assertEqual(format_number(12345), "12,345.00")
        
    # เมื่อค่าเป็นเลขมีทศนิยมเป็นบวก
    def test_format_number_positive(self):
        self.assertEqual(format_number(123456.7), "123,456.70")
        self.assertEqual(format_number(123456.78), "123,456.78")
        self.assertEqual(format_number(12345.678), "12,345.68")

    # ทดสอบกับเลขมีทศนิยมเป็นลบ
    def test_format_number_negative(self):
        self.assertEqual(format_number(-123456.7), "-123,456.70")
        self.assertEqual(format_number(-123456.78), "-123,456.78")
        self.assertEqual(format_number(-12345.678), "-12,345.68")

    # ทดสอบกรณี edge case สำหรับ 0
    def test_format_number_zero(self):
        self.assertEqual(format_number(0), "0.00")
        self.assertEqual(format_number(0.0), "0.00")
        self.assertEqual(format_number(0.00), "0.00")

    # ทดสอบกรณี edge case สำหรับ เมื่อส่งค่าเป็น None
    def test_format_number_none(self):
        self.assertEqual(format_number(None), "")

    # กรณีเป็นเลขขนาดใหญ่
    def test_format_number_large(self):
        self.assertEqual(format_number(11234567890.12345), "11,234,567,890.12")
        self.assertEqual(format_number(-11234567890.12345), "-11,234,567,890.12")

    # เป็นเลขทศยมที่น้อยกว่า 1
    def test_format_number_decimal_only(self):
        self.assertEqual(format_number(0.789), "0.79")

    # กรณีเป็นเลขหลักร้อย ต้องไม่มี ,
    def test_format_number_non_integer_decimals(self):
        self.assertEqual(format_number(123.756), "123.76")

if __name__ == '__main__':
    unittest.main(argv=[''], verbosity=2, exit=False)
    
    # integer,
    # float
    # decimal < 2
    # decimal > 2