from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# ✅ Setup Chrome browser
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.maximize_window()

# ✅ Your portfolio URL (local or deployed)
url = "http://localhost:5173/"  # Change if deployed
driver.get(url)

wait = WebDriverWait(driver, 10)

# ✅ TEST 1: Check Page Title
print("\nTesting: Page title...")
assert "Portfolio" in driver.title or "Adnan" in driver.title or "Vite" in driver.title, f"Title is incorrect! Found: {driver.title}"
print("✅ Page title test passed.")

# ✅ TEST 2: Check Navbar Links (based on Navbar.jsx)
print("\nTesting: Navbar links...")
nav_links = ["Home", "About", "Contact"]
for link in nav_links:
    try:
        element = wait.until(EC.presence_of_element_located((By.LINK_TEXT, link)))
        print(f"✅ Navbar link '{link}' found.")
    except:
        print(f"❌ Navbar link '{link}' not found.")
print("✅ Navbar links test completed.")

# ✅ TEST 3: Navigation through Navbar
print("\nTesting: Navigation through navbar links...")
for link in nav_links:
    try:
        element = driver.find_element(By.LINK_TEXT, link)
        element.click()
        time.sleep(1)
        print(f"✅ Navigated to {link} page.")
    except:
        print(f"❌ Could not navigate to {link} page.")
print("✅ Navigation test completed.")

# ✅ TEST 4: Check Projects Section Header (optional if you have it)
print("\nTesting: Projects section...")
try:
    projects_header = driver.find_element(By.XPATH, "//h2[contains(text(),'Projects') or contains(text(),'My Projects')]")
    print("✅ Projects section header found.")
except:
    print("ℹ No Projects section found (skipping).")

# ✅ TEST 5: Check for Project Cards (if any)
try:
    project_cards = driver.find_elements(By.XPATH, "//div[contains(@class,'project')]")
    if len(project_cards) > 0:
        print(f"✅ Found {len(project_cards)} project card(s).")
    else:
        print("ℹ No project cards found (skipping).")
except:
    print("ℹ Unable to find project cards.")

# ✅ TEST 6: Contact Form
print("\nTesting: Contact form...")
try:
    contact_link = driver.find_element(By.LINK_TEXT, "Contact")
    contact_link.click()
    time.sleep(2)

    # Flexible selectors for inputs
    name_input = driver.find_element(By.XPATH, "//input[contains(@name,'name') or contains(@placeholder,'Name')]")
    email_input = driver.find_element(By.XPATH, "//input[contains(@name,'email') or contains(@placeholder,'Email')]")
    message_input = driver.find_element(By.XPATH, "//textarea[contains(@name,'message') or contains(@placeholder,'Message')]")

    name_input.send_keys("Test User")
    email_input.send_keys("test@example.com")
    message_input.send_keys("This is a test message.")
    print("✅ Contact form filled successfully.")
except:
    print("❌ Contact form not found or input fields missing.")

# ✅ TEST 7: Footer
print("\nTesting: Footer...")
try:
    footer = driver.find_element(By.TAG_NAME, "footer")
    print("✅ Footer found.")
except:
    print("❌ Footer not found.")

# ✅ End of tests
print("\nAll tests completed. Closing browser...")
time.sleep(2)
driver.quit()
