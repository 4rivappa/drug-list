import pip._vendor.requests as requests
import bs4
from bs4 import BeautifulSoup
import warnings
import time
import codecs

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument('--ignore-certificate-errors')
chrome_options.add_argument('--ignore-ssl-errors')
chrome_options.add_argument('--ignore-certificate-errors-spki-list')
chrome_options.add_argument("--log-level=3")
chrome_options.add_argument("--window-size=1920,1080")

chrome_driver = r"C:/users/arivappa/documents/seleniumDrivers/chromedriver.exe"
driver = webdriver.Chrome(chrome_options=chrome_options, executable_path=chrome_driver)


# driver.get("https://leetcode.com/")
#### below localstorage item, must be 'problemNumber_0_lang'(key) and 'language'(value)
# driver.execute_script("window.localStorage.setItem('4_0_lang','python3');")
# driver.execute_script("window.localStorage.setItem('global_lang','python3');")
# driver.execute_script("window.localStorage.setItem('problem-list:itemsPerPage', 100);")

#==================================================================================================

def last_pageno(url):
    last_pg_no = '0' 
    driver.get(url)
    time.sleep(1)
    innerHTML = driver.page_source
    soup = BeautifulSoup(innerHTML, 'html.parser')
    ## checking for page rendering -- ##
    nav_bar = soup.find('nav', attrs={'role':'navigation', 'class':'mb-6 md:mb-0 flex flex-nowrap items-center space-x-2'})
    if nav_bar == None:
        print("if ------------------------------------------------------------ last_pageno()")
        driver.get(url)
        time.sleep(3)
        innerHTML = driver.page_source
        soup = BeautifulSoup(innerHTML, 'html.parser')
    ## ------------------------------ ##
    for i, nav in enumerate(soup.find_all('nav', attrs={'role':'navigation', 'class':'mb-6 md:mb-0 flex flex-nowrap items-center space-x-2'})):
        butn_list = nav.find_all('button')
        # print(butn_list)
        # print("index  element --> " + str(len(butn_list)-2))
        # print(nav)
        last_pg_butn = butn_list[len(butn_list)-2]
        last_pg_no = last_pg_butn.text
    # print(last_pg_no)
    return int(last_pg_no)

def page_problist(url, i):
    url = url + '?page=' + str(i)
    print("url: --> " + url)
    driver.get(url)
    time.sleep(5)
    innerHTML = driver.page_source
    soup = BeautifulSoup(innerHTML, 'html.parser')
    listFile = open('problist.txt', 'a')
    for i, table in enumerate(soup.find_all('div', attrs={'role':'table'})):
        for j, row_group in enumerate(table.find_all('div', attrs={'role':'rowgroup'})):
            for k, row in enumerate(row_group.find_all('div', attrs={'role':'row'})):
                cells = row.find_all('div', attrs={'role':'cell'})
                title = cells[1].text
                print(title)
                listFile.write(title + '\n')
                link = cells[1].find(href = True)
                print("    " + link['href'])
                listFile.write(link['href'] + '\n')
                acceptance = cells[3].text
                print("    " + acceptance)
                listFile.write(acceptance + '\n')
                difficulty = cells[4].text
                print("    " + difficulty)
                listFile.write(difficulty + '\n')
            print("--------------")
    listFile.close()


def get_problemslist(url):
    first_pg = 1
    last_pg = last_pageno(url)
    for i in range(first_pg, last_pg+1):
        print(i)
        page_problist(url, i)
        # page_list = page_problist(url, i)
        # total_list.extend(page_list)
    # return total_list

indexCounter = 0

def get_drugslist(url):
    driver.get(url)
    time.sleep(2)
    innerHTML = driver.page_source
    soup = BeautifulSoup(innerHTML, 'html.parser')
    listFile = open('druglist3.txt', 'a')
    global indexCounter
    for kk, alphabetList in enumerate(soup.find_all('ul', attrs={'class':'ddc-list-column-2'})):
        for i, row in enumerate(alphabetList.find_all('li')):
            title = row.text
            linkPart = row.find(href=True)
            link = linkPart['href']
            print(title, link)
            listFile.write("    {\n")
            listFile.write('        "drugId":' + str(indexCounter) + ",\n")
            listFile.write('        "drugName": "' + title + '",\n')
            listFile.write('        "drugLink": "https://www.drugs.com' + link + '",\n')
            driver.get("https://www.drugs.com" + link )
            time.sleep(2)
            innerHTML = driver.page_source
            soup = BeautifulSoup(innerHTML, 'html.parser')
            for kk, contentBox in enumerate(soup.find_all('div', attrs={'class':'contentBox'})):
                for i, paragh in enumerate(contentBox.find_all('p')):
                    if i>6:
                        break
                    elif i!=0:
                        listFile.write('        "drugPh' + str(i) + '": "' + paragh.text + '",\n')
            listFile.write("    },\n")
            indexCounter += 1
    listFile.close()

# get_drugslist('https://www.drugs.com/alpha/a.html')

for k in range(96, 123):
    preUrl = 'https://www.drugs.com/alpha/'
    postUrl = '.html'
    get_drugslist(preUrl + chr(k) + postUrl)

