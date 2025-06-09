# Bug Report for https://magento.softwaretestingboard.com/

## Feature: Homepage Search Functionality

### ID: `BUG-001`

### Summary:  
Search produces unrelated results and inconsistent suggestions.

### Steps to Reproduce:  
1. Go to the homepage.  
2. Enter search terms like "Track" or "hoodie".  
3. Observe search results and suggested options.

### Expected Result:  
Search results and suggestions are relevant and consistent.

### Actual Result:  
- Some results unrelated to the search term appear (e.g., searching "Track" displays multiple unrelated products).  
- Suggested options differ in casing (e.g., "HOODIE", "hoodie+and+sweater+").  
- Suggestion counts do not sum logically (e.g., "hoodies for men" shows 10, "hoodies for women" 12, but total hoodies is 20).

### Severity:  
High

### Screenshot:  
https://monosnap.com/file/VEwyH6AIcTLuDYe3FSQYT7DjurHBCi

---

### ID: `BUG-002`

### Summary:  
"Related search terms" show inconsistent casing and contain database scripts or URLs.

### Steps to Reproduce:  
1. Perform any search (e.g., "hoodie").  
2. Scroll down to the "Related search terms" section.  
3. Observe the text casing and content.

### Expected Result:  
Related search terms have consistent text casing and contain no code or URLs.

### Actual Result:  
- Terms appear in mixed casing (e.g., "Track pants for mens", "TRACK PANT", "track pant for women").  
- Some entries contain database script snippets (e.g., `"HOODIE price range of $55-$70') AND 4315=(SELECT ..."`).  
- Some terms include URLs embedded in the text (e.g., "Baghttps://magento.softwaretestingboard.com/catalogsearch/result/?q=Bag...").

### Severity:  
High

### Screenshot:  
https://monosnap.com/file/HgjiOntwclKw9J9C2i705devGcb4ET

---

## Feature: Homepage Advertisement

### ID: `BUG-003`

### Summary:  
Advertisements hidden until scroll and image contains multiple URLs.

### Steps to Reproduce:  
1. Scroll down the homepage.  
2. Observe advertisement visibility and links on ad images.

### Expected Result:  
Advertisements are clearly visible and each image links to a single, correct URL.

### Actual Result:  
- Some advertisements are hidden initially and appear only on scrolling.  
- A top advertisement contains two URLs in a single image; the secondary URL appears as a tiny sidebar icon different from the main ad.

### Severity:  
Medium

### Screenshot:  
https://monosnap.com/file/HnBt5jIGPIbvoDhIZFsArQvmrbXFDp

---

### ID: `BUG-004`

### Summary:  
The homepage displays the text "Home Page" unnecessarily.

### Steps to Reproduce:  
1. Visit the homepage.

### Expected Result:  
No redundant page title text such as "Home Page" should be displayed.

### Actual Result:  
The text "Home Page" is shown on the homepage, potentially confusing users.

### Severity:  
Low

### Screenshot:  
https://monosnap.com/file/S0u0Hd42w4xUWHk8czlC3rAoJqKiHC

---

### ID: `BUG-005`

### Summary:  
Yoga image link is broken; text link works but image is missing.

### Steps to Reproduce:  
1. On the homepage, locate the yoga section.  
2. Observe the yoga image and text below it.

### Expected Result:  
Both the yoga image and the linked text navigate to the Yoga collection page.

### Actual Result:  
- The yoga image link is broken (image not displayed).  
- The text "New Luma Yoga Collection Get fit and look fab in new seasonal styles Shop New Yoga" is linked and works correctly.

### Severity:  
Medium

### Screenshot:  
https://monosnap.com/file/R0UFE9xCWnAd5wQRtqzlmnNgQ97qSl

---

## Feature: Homepage Footer Links

### ID: `BUG-006`

### Summary:  
Footer links have inconsistent target behaviors.

### Steps to Reproduce:  
1. Scroll to the homepage footer.  
2. Click links in the left and right columns.

### Expected Result:  
All footer links should open consistently, preferably in the same tab.

### Actual Result:  
- Left column links open in new tabs.  
- Right column links open in the same tab.

### Severity:  
Low

### Screenshot:  
https://monosnap.com/file/0zz5LU9V2HjRAfXkWoPicts4oYX9cf

---

## Feature: Homepage Keyboard Navigation (Tab Key)

### ID: `BUG-007`

### Summary:  
Invisible icon before "Sign In" and incorrect tab order.

### Steps to Reproduce:  
1. Use the tab key to navigate the homepage.  
2. Observe focus order and any invisible elements.

### Expected Result:  
- No invisible icons should appear.  
- Search field should be focused before the cart icon.  
- Each tab focus should be visible and meaningful.

### Actual Result:  
- An invisible icon is present left of the "Sign In" link (noticed via tab).  
- The cart icon receives focus before the search field.  
- On navigating the navbar, all items get selected but pressing enter only opens the first item ("What's New").  
- Numerous ads are selected during tabbing without visual indication.

### Severity:  
Medium

### Screenshot:  
https://monosnap.com/file/0jiSFyXiEBLm2ewHyvmHhraMZzoD78

---

## Feature: Search Functionality (Additional)

### ID: `BUG-008`

### Summary:  
Search suggestions include database scripts; searching specific terms returns unrelated or no results.

### Steps to Reproduce:  
1. Search for terms like "Ingrid Running Jacket" or enter database scripts (e.g., `SELECT * FROM users WHERE...`).  
2. Observe suggested items and results.

### Expected Result:  
- Suggestions and results should be relevant and safe from script injection.  
- Searching a specific product should only return matching products.

### Actual Result:  
- Database scripts appear as suggestions (e.g., "SHIRT'").  
- Searching "Ingrid Running Jacket" returns products with partial name matches (running/jacket).  
- Searching numbers (e.g., 123456) shows irrelevant suggestions like '123456a@A' or '1=1--' and sometimes returns "no match found".

### Severity:  
High

### Screenshot:  
https://monosnap.com/file/gMy6q9yU2lZ3pGtWLk8dnuoOHDGY17

---

## Feature: Product Detail View – Women’s Tops & Bottoms

### ID: `BUG-009`

### Summary:  
Selected size does not match displayed size; selecting color shows inconsistent images.

### Steps to Reproduce:  
1. Go to Women > Tops or Bottoms.  
2. Select a size and observe the product image and selected size.  
3. Select a different color and observe displayed images.

### Expected Result:  
- The selected size should be accurately displayed.  
- Selecting a color should update all product images to the chosen color.

### Actual Result:  
- Size selection causes a new image of another color but size displayed never matches user selection.  
- Selecting a color shows the default color images plus one image of the selected color.

### Severity:  
Medium

### Screenshot:  
https://monosnap.com/file/NOIN8xKpErBGTzG17n845caza1xdtA

---

## Feature: Product Detail View – Men’s Tops

### ID: `BUG-010`

### Summary:  
Selected color does not display correctly; image selection inconsistent.

### Steps to Reproduce:  
1. Go to Men > Tops.  
2. Select a color for some items (e.g., "Erikssen CoolTech™ Fitness Tank").  
3. Observe product images.

### Expected Result:  
Images should update to show only the selected color.

### Actual Result:  
- Selecting grey displays blue color images for some items.  
- Similar to women's tops, the default color images remain with the selected color image added.

### Severity:  
Medium

### Screenshot:  
https://monosnap.com/file/HR5aGwGSZb9WCX1sycCLFhQNVtEF4O

---

## Feature: Product Detail View – Gear > Fitness Equipment

### ID: `BUG-011`

### Summary:  
Related products list contains inconsistent checkboxes.

### Steps to Reproduce:  
1. Go to Gear > Fitness Equipment product detail page.  
2. Observe related products section.

### Expected Result:  
Consistent UI for all related products (checkboxes or none).

### Actual Result:  
Checkboxes appear on related products inconsistently, unlike other categories.

### Severity:  
Low

### Screenshot:  
https://monosnap.com/file/bsmrqjrK8X3preCoz0UmXQjnTRiHCn

---

## Feature: Add to Cart (Update/Remove Items)

### ID: `BUG-012`

### Summary:  
Mini-cart images show wrong item colors; update cart button visible unnecessarily.

### Steps to Reproduce:  
1. Add items to cart with different colors.  
2. View mini-cart images.  
3. Observe the "Update Shopping Cart" button when no changes are made.

### Expected Result:  
- Mini-cart images should match selected item colors.  
- Update cart button should only appear when changes occur.

### Actual Result:  
- Mini-cart images show incorrect colors.  
- Update shopping cart button is visible even without item changes, causing confusion.

### Severity:  
Medium

### Screenshot:  
https://monosnap.com/file/UeQJx0nZPXipKGVlVhNSGeCHr8l5eC

---

## Feature: Initiate Checkout

### ID: `BUG-013`

### Summary:  
Phone number field accepts alphabets and special characters; unexpected discounts applied.

### Steps to Reproduce:  
1. Proceed to checkout.  
2. Enter alphabets and special characters in the phone number field.  
3. Observe discount application.

### Expected Result:  
- Phone number field accepts only valid digits.  
- Discounts are applied only when explicitly stated or added by the user.

### Actual Result:  
- Phone number field allows alphabets and special characters.  
- Discount is added automatically without user consent or prior indication.

### Severity:  
High

### Screenshot:  
https://monosnap.com/file/giSyUZAfsvKOT1g2b8NU6c2TuaZ8cW

---

