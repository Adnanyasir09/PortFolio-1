from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time

options = Options()
options.add_argument("--start-maximized")

# Launch Chrome with WebDriver Manager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

driver.get("http://localhost:5173/contact")  # Make sure the React app is running

# ✅ TEST 1: Check Contact Heading
try:
    heading = driver.find_element(By.TAG_NAME, "h2")  # Your heading is <h2>
    assert "Contact" in heading.text
    print("✅ Contact page heading is present")
except Exception as e:
    print(f"❌ Contact heading not found. Error: {e}")

# ✅ TEST 2: Check Email Link
try:
    email_link = driver.find_element(By.XPATH, "//a[contains(@href,'mailto:mr.adnan.yasir@gmail.com')]")
    assert "mr.adnan.yasir@gmail.com" in email_link.text
    print("✅ Email link is present")
except Exception as e:
    print(f"❌ Email link not found. Error: {e}")

# ✅ TEST 3: Check Social Links (GitHub, LinkedIn, Instagram)
social_links = {
    "GitHub": "https://github.com/Adnanyasir09",
    "LinkedIn": "https://www.linkedin.com/in/adnan-yasir-582691257/",
    "Instagram": "https://instagram.com/mr.adnan.yasir"
}

for name, url in social_links.items():
    try:
        link = driver.find_element(By.XPATH, f"//a[@href='{url}']")
        print(f"✅ {name} link is present")
    except Exception as e:
        print(f"❌ {name} link not found. Error: {e}")

time.sleep(2)
driver.quit()
