# 🧪 Magento Storefront QA Project ![CI](https://github.com/usanga-chinaza/buckhill-qa-assessment-testing/actions/workflows/playwright.yml/badge.svg)

This repository contains the deliverables for a QA Project of the [Magento Demo Storefront](https://magento.softwaretestingboard.com/). The assessment covers:

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
- Discovered bugs across the homepage, product details, search, cart, and checkout features.

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

📄 [Test Strategy (PDF)](https://github.com/usanga-chinaza/QA-Project/blob/main/doc/Test_Strategy_Magento_Project.pdf)

---

## 📋 Exploratory Test Scenarios

Rather than detailed, scripted test cases, high-level test charts suitable for exploratory testing were used. Each scenario targets a core area of the Magento site with specific user intents.

📄 [Manual Exploratory Test Scenarios (PDF)](https://github.com/usanga-chinaza/QA-Project/blob/main/doc/Manual%20Exploratory%20Test%20Scenarios%20Document.pdf)

---

## 🧪 Playwright UI Automation

Automation was done using **Playwright + JavaScript**, using the **Page Object Model (POM)**. Covered test flows include:

- Searching for a product
- Viewing product details
- Adding item to cart
- Asserting cart updates

---

## ⚙️ GitHub Actions CI

Continuous Integration is set up using **GitHub Actions**. Tests run automatically on every `push` and `pull_request` to the `main` branch.

📄 [View Workflow File](.github/workflows/playwright.yml)

🟢 **Status:** ![CI](https://github.com/usanga-chinaza/buckhill-qa-assessment-testing/actions/workflows/playwright.yml/badge.svg)

---

## ▶️ Run Tests Locally

```bash
# 1. Clone the repo
git clone https://github.com/usanga-chinaza/QA-Project.git
cd qa-project

# 2. Install dependencies
npm install

# 3. Run all tests
npx playwright test

# 4. Run with UI
npx playwright test --ui
