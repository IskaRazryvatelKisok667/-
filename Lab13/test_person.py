# test_person.py
import unittest
from main import Student, Teacher, AdminStaff


class TestPerson(unittest.TestCase):
    
    def test_student_info(self):
        s = Student("Алиса", 19, "IS-23", 3.7)
        self.assertEqual(s.display_info(), "Имя: Алиса, Возраст: 19, Группа: IS-23, Средний балл: 3.7")
    
    def test_teacher_info(self):
        t = Teacher("Иван", 40, "Математика", 15)
        self.assertEqual(t.display_info(), "Имя: Иван, Возраст: 40, Предмет: Математика, Стаж: 15 лет")
    
    def test_admin_staff_info(self):
        a = AdminStaff("Ольга", 35, "Секретарь", "Отдел кадров")
        self.assertEqual(a.display_info(), "Имя: Ольга, Возраст: 35, Должность: Секретарь, Отдел: Отдел кадров")

    def test_student_gpa_range(self):
        s = Student("Алиса", 19, "IS-23", 3.7)
        self.assertTrue(0 <= s.gpa <= 4.0)


if __name__ == "__main__":
    unittest.main()
