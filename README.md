# 🧪 Magento Storefront QA Assessment

This repository contains the deliverables for the QA assessment of the [Magento Demo Storefront](https://magento.softwaretestingboard.com/). The assessment covers:

- Manual exploratory testing
- Bug reporting
- Test strategy
- High-level test scenarios
- Playwright UI automation
- GitHub Actions CI setup

---

## ✅ Scope of Testing

- Functionality tested includes homepage search, product listing, cart behavior, footer links, tab navigation, and checkout flow.
- Focused on real user flows and exploratory edge cases.
- Discovered 13 bugs across the homepage, product details, search, cart, and checkout features.

---

## 🐞 Bug Reports

Bug reports were compiled based on exploratory testing. Each includes:

- Steps to reproduce
- Expected vs actual result
- Severity
- Screenshot (where applicable)

👉 [View Bug Report](./bug-report.md)

---

## 🧭 Test Strategy

A lean test strategy tailored for **exploratory testing** is included. It outlines:

- Testing approach
- Scope and objectives
- Tools used
- Types of testing
- Risk areas and priorities

📄 [Buckhill Assessment Test Strategy (PDF)](docs/Buckhill%20Assessment%20Test%20Strategy.pdf)

---

## 📋 Exploratory Test Scenarios

Rather than detailed, scripted test cases, high-level test charts suitable for exploratory testing were used. Each scenario targets a core area of the Magento site with specific user intents.

📄 [Manual Exploratory Test Scenarios (PDF)](docs/Buckhill%20Manual%20Exploratory%20Test%20Scenarios%20Document.pdf)

---

## 🧪 Playwright UI Automation

Automation was done using **Playwright + JavaScript**, using the **Page Object Model (POM)**. Covered test flows include:

- Searching for a product
- Viewing product details
- Adding item to cart
- Asserting cart updates

### ▶️ Run Tests Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/magento-qa-assessment.git
cd magento-qa-assessment

# 2. Install dependencies
npm install

# 3. Run all tests
npx playwright test

# 4. Run with UI
npx playwright test --ui
