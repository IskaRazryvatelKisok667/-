class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display_info(self):
        return f"Имя: {self.name}, Возраст: {self.age}"

class Student(Person):
    def __init__(self, name, age, group, gpa):
        super().__init__(name, age)
        self.group = group
        self.gpa = gpa

    def display_info(self):
        return (f"Студент: {self.name}, Возраст: {self.age}, "
                f"Группа: {self.group}, Средний балл: {self.gpa}")

class Teacher(Person):
    def __init__(self, name, age, subject, experience):
        super().__init__(name, age)
        self.subject = subject
        self.experience = experience

    def display_info(self):
        return (f"Преподаватель: {self.name}, Возраст: {self.age}, "
                f"Предмет: {self.subject}, Стаж: {self.experience} лет")

class AdminStaff(Person):
    def __init__(self, name, age, position, department):
        super().__init__(name, age)
        self.position = position
        self.department = department

    def display_info(self):
        return (f"Админ.персонал: {self.name}, Возраст: {self.age}, "
                f"Должность: {self.position}, Отдел: {self.department}")

# --- Демонстрация полиморфизма ---
if __name__ == "__main__":
    people = [
        Student("Алиса", 19, "IS-23", 3.7),
        Teacher("Игорь Петров", 45, "Математика", 20),
        AdminStaff("Марина Иванова", 34, "Менеджер", "Учебный отдел")
    ]

    for person in people:
        print(person.display_info())