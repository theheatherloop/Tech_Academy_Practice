#
# Python:    3.10
#
# Author:    H.Shultz
#
# Purpose:   TTA - Python Course, created two classes that inherit from another class
#            where each child has two of their own attributes.


# #parent class
class Person:
    #defining the initialization
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

#child class
class Student(Person):
    #defining the initalization
  def __init__(self, fname, lname, year, studentID):
    #super makes the child class inherit all the methods and properties from its parent 
    super().__init__(fname, lname)
    #add properties
    self.graduationyear = year
    self.studentID = studentID

#child class
class Teacher(Person):
    #defining the initalization
  def __init__(self, fname, lname, date, EmpID):
    super().__init__(fname, lname)
    #added properties
    self.hiredate = date
    self.EmpID = EmpID
    