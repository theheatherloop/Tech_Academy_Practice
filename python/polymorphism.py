#
# Python:    3.10
#
# Author:    H.Shultz
#
# Purpose:   TTA - Python Course, created two classes that inherit from another class
#            where each child has two of their own attributes and shows polymorphism 
#            of the parent's method on each child class 
#


# #parent class
class Person:
    fname = 'Unknown'
    lname = 'Unknown'
    #method that returns the first and last name of the class
    def summary(self):
        msg = "\nFirst Name: {} \nLast Name: {}".format(self.fname,self.lname)
        return msg

#child class
class Student(Person):

    fname = 'Tom'
    lname ='Ford'
    year = 2004
    studentID = 1 

#child class
class Teacher(Person):
    fname = 'Tissaia'
    lname ='Vries'
    date = 1220
    EmpID = 2

if __name__ == "__main__":
    student = Student()
    teacher = Teacher()
    #uses the parent method on each child class
    print(student.summary())
    print(teacher.summary())
    