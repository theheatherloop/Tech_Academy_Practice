
# Python:    3.10
#
# Author:    H.Shultz
#
# Purpose:   TTA - Python Course, created a class that utilizes the concept of abstraction 
#            where the class contains  at least one abstract method and one regular method.
#            Created a child class that defines the implementation of its parents abstract method, 
#            Lastly, created an object that utilizes both the parent and child methods.
#           
#

from abc import ABC, abstractmethod

#created class
class Employee(ABC):
    #initalized 
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    #abstractmethod decorator
    @abstractmethod
    #abstractmethod
    def get_salary(self):
        pass

class HrlyEmployee(Employee):
    #initalized
    def __init__(self, first_name, last_name, worked_hrs, rate):
        #inherited attributes
        super().__init__(first_name, last_name)
        #defined class specific varabiles
        self.worked_hrs = worked_hrs
        self.rate = rate

    #used abstract method
    def get_salary(self):
        #defined method
        print(self.worked_hrs * self.rate)  

#created an employee
payroll = HrlyEmployee("Bob", "Ross", 45, 36)

#prints employees salary
print(payroll.get_salary)