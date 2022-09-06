#
# Python:    3.10
#
# Author:    H.Shultz
#
# Purpose:   TTA - Python Course, using the sqlite3 module to 
#            write a script that creates a database and adds 
#            only the specified data into that database.
#

import sqlite3

conn = sqlite3.connect('textFiles.db')

fileList = ('information.docx','Hello.txt','myImage.png','myMovie.mpg','World.txt','data.pdf','myPhoto.jpg')

with conn:
    cur = conn.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS filesList( \
        ID INTEGER PRIMARY KEY AUTOINCREMENT, \
        files TEXT \
        )")    
    conn.commit()

conn = sqlite3.connect('textFiles.db')
#loops through each object in the tuple to find .txt files
for x in fileList:
    if x.endswith('.txt'):
        with conn:
            cur = conn.cursor()
            #if file is .txt then insert it into the files column of the filesList table
            cur.execute("INSERT INTO filesList (files) VALUES (?)", (x,))
            print(x)  
conn.close()
    








    
        

