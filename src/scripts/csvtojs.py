import csv 
filepath = r"C:\Users\Arunima Banerjee\Desktop\gdsc.csv"

#x=open(filepath,"r")

team_data=[]

fmt = '''{{
            "id": {},
            "memberImage": {},
            "memberName": "{}",
            "memberAbout": {},
            "memberSocialLinkedinPath": {},
            "memberSocialGithubPath": {},
            "memberSocialMailPath": {}
        }},'''

#x.close()
with open(filepath,"r",encoding='utf-8-sig') as sourcefile:
    reader=csv.reader(sourcefile)
    for i in reader:
        print(fmt.format(i[0], i[1], i[2], i[3], i[4], i[5], i[6]))

    
