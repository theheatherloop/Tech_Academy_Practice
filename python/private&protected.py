#
# Python:    3.10
#
# Author:    H.Shultz
#
# Purpose:   TTA - Python Course, Created a class that uses encapsulation by
#            making use of a private attribute and a protected attribute, then
#            created an object that uses both.



#creating class
class one:
    #creating instance
    def __init__(self):
        # Protected varabile
        self._protected = 2
        # Private varabile
        self.__private = 5

    def getPrivate(self):
        return(self.__private) 

test = one()
#call to protected varabile
print(test._protected)
#call to private varabile
print(test.getPrivate())

