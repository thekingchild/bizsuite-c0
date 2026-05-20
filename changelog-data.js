export const changelogEntries = [
  {
    version: "3.8",
    label: "Latest published notes",
    summary: "Due-payment approval, inventory defaults, POS fixes, and dark mode stability updates.",
    added: [
      "Approve due payments feature in Business Settings > Payments."
    ],
    fixed: [
      "Dark mode not loading after update for some users because of cache issues.",
      "Swal not loading on action buttons after recent action dropdown improvements, including product delete flows.",
      "Inventory management (manage stock) now enabled by default for all businesses when custom plans are not enabled.",
      "Sales list loading issue when the add sale module is disabled.",
      "Units and subunits selection on the POS row.",
      "Price group changes clearing the cart on the POS screen."
    ]
  },
  {
    version: "3.7",
    label: "Feature release",
    summary: "Invoice layout builders, transaction safeguards on POS, inventory controls, and broader UI polish.",
    added: [
      "CRN field on the customers page for ZATCA.",
      "Builder templates for dynamic layouts on the invoice layouts page.",
      "Payment method column on the product sell report.",
      "Client transaction ID with strict duplication checks on the POS screen, returning the existing saved receipt instead of creating a duplicate invoice.",
      "Inventory Management as an internal core module for the manage stock feature on the add product page."
    ],
    updated: [
      "Renamed the Due Date label to Pay Term across the application.",
      "Overall UI improvements across modules.",
      "Action dropdown menus on scroll-heavy pages now open upward or downward based on available space.",
      "Orders auto-refresh now refreshes the full waiter orders list correctly."
    ],
    fixed: [
      "Slider switches not toggling correctly on some pages.",
      "Large label text breaking layouts by truncating with ellipsis and showing the full value on hover."
    ]
  },
  {
    version: "3.6",
    label: "Feature release",
    summary: "Payments and currency settings expanded while customer import and order layouts received quality-of-life improvements.",
    added: [
      "Reward points value on invoices.",
      "User import feature.",
      "Payment note required option in Business Settings > Sales to enforce payment notes.",
      "Currencies management on the frontend at `posurl/app/currencies`.",
      "New Riyal currency symbol."
    ],
    updated: [
      "Advance balance support in customer import.",
      "Advance balance visibility on the customer list page.",
      "Miscellaneous UI improvements.",
      "Orders page layout for the inbuilt core Orders module."
    ]
  },
  {
    version: "3.5",
    label: "Feature release",
    summary: "Sales filtering, reporting detail, invoice behavior, and broad calculation fixes across the application.",
    added: [
      "Payment method filter on the sales list.",
      "Assigned to filter on the contact list.",
      "Action column on the stock report with links to product stock history.",
      "Max discount limit support for fixed discount type on the discount modal.",
      "SKU display on invoice product rows in the create screen."
    ],
    updated: [
      "Profit and loss report.",
      "Invoice list row click now opens the invoice info modal.",
      "POS sales list screen with more columns for detailed visibility.",
      "Contact show screen.",
      "Invoice datatable reload behavior after delete.",
      "Activity log report.",
      "Overall UI fixes and improvements."
    ],
    fixed: [
      "Add quotation page showing the Add Sales heading.",
      "Discount percentage calculation.",
      "Timezone issues affecting date filters and sales timestamps.",
      "Order discount display on receipts.",
      "Login page background rendering.",
      "Invoice totals, including tax calculations.",
      "Sell return tax calculations for line items.",
      "Contacts > Action > Invoices opening the wrong tab.",
      "Types of service not saving from the sales create screen.",
      "Custom fields across the application.",
      "Sell subscription invoice regeneration.",
      "Line total tax calculation on POS.",
      "Transaction payment edit and delete errors."
    ],
    notes: [
      "Other miscellaneous fixes and improvements were included throughout the application."
    ]
  },
  {
    version: "3.4",
    label: "Feature release",
    summary: "Restaurant management, realtime POS refinements, discount validation, and deeper sales-report accuracy improvements.",
    added: [
      "Support for the Advance Restaurant Management System module.",
      "Improved sleek layout for the POS screen.",
      "Combo modifiers for selling combo products.",
      "A new product search bar on product stock history.",
      "Maximum discount validation for line items and total order discounts."
    ],
    updated: [
      "Product stock history with color codes for quantities.",
      "Modifiers and combo modifiers in the product sell report.",
      "Modifiers and combo modifiers in the GST sales report.",
      "Default ordering in the product sale report by date.",
      "Dashboard net sales calculation logic.",
      "Running order modal with improved grid, list, and card layouts.",
      "Realtime POS logic and feature toggling behavior.",
      "Modifiers and combo modifiers in legacy POS product rows.",
      "Product summary on the cash register modal.",
      "Expense note on the expense list screen.",
      "Dashboard chart dates now support language localization.",
      "Dashboard charts now support RTL for Arabic.",
      "Cash register report close icon.",
      "POS edit screen support for realtime POS.",
      "Legacy product row and combo modifier layout aligned with realtime POS.",
      "Delivery note action on sell and POS lists.",
      "Saudi Arabia's new currency symbol.",
      "Customer display support for modifiers and combo modifiers."
    ],
    fixed: [
      "Tax calculation rounding on the POS screen.",
      "Login background image now covers the full screen.",
      "Subtotal handling for modifiers and combo modifiers on invoices and in the database.",
      "All product sales reports now accurately include modifiers, combo items, and related modifiers.",
      "Sale representative report payment status modal not opening on click.",
      "Dashboard chart end-of-month dates and months.",
      "POS edit screen layout to match the create screen.",
      "Quick product add bypassing user and subscription quota checks.",
      "Package quota restriction in the new users modal.",
      "Package quota restriction in the quick add products modal."
    ]
  },
  {
    version: "3.3",
    label: "Feature release",
    summary: "Realtime POS data controls, stronger verification flows, reporting fixes, and broad theme improvements.",
    added: [
      "Real-time barcode scanning and product suggestions on the POS screen.",
      "Settings to enable, disable, and configure real-time product data syncing.",
      "Email verification via OTP instead of verification links.",
      "Enable Instant POS on both business and POS screen levels."
    ],
    updated: [
      "Added Maldivian Rufiyaa (MVR) currency support.",
      "Improved layout and usability of the documents and notes section.",
      "Enhanced dark mode for better consistency and readability.",
      "Refreshed overall application theme with a cleaner design.",
      "Added a Google Map contact section.",
      "Added a dedicated bulk price update page for faster product pricing management.",
      "Added opening and closing stock details to the profit and loss report.",
      "Streamlined logo placement and sizing across the application."
    ],
    fixed: [
      "Profit by Invoice report failing to load.",
      "Profit by Date report not loading because of data filtering errors.",
      "reCAPTCHA now requires both site and secret keys when enabled to avoid accidental system lockout.",
      "Invoice scheme numbering now starts from 1 by default; zero is no longer allowed.",
      "Date and time filters in the product sell report when grouped by category or brand."
    ]
  },
  {
    version: "3.1",
    label: "Feature release",
    summary: "Authentication and login controls expanded while the customer display and general UI received a refresh.",
    added: [
      "Two-factor authentication (2FA).",
      "Background image for the login page.",
      "Language settings for the header.",
      "Social logins.",
      "Brute force protection.",
      "Maintenance mode."
    ],
    updated: [
      "Customer display screen redesigned with real-time updates and advertisement support.",
      "Overall UI improvements."
    ]
  },
  {
    version: "3.0.1",
    label: "Maintenance release",
    summary: "A compact follow-up release focused on RTL, dark mode, language support, and quotation conversion.",
    updated: [
      "RTL mode.",
      "Dark mode.",
      "Overall design and layout."
    ],
    added: [
      "Swahili language support."
    ],
    fixed: [
      "Quotation not showing when converted to proforma."
    ]
  },
  {
    version: "3.0",
    label: "Major release",
    summary: "A visual and usability refresh with new theme controls, homepage improvements, and invoice workflow fixes.",
    added: [
      "Color scheme changer.",
      "Login page background image.",
      "Purchase sell mismatch fix utility."
    ],
    updated: [
      "Tax rates added to the profile settings dropdown.",
      "Custom date range handling in the date range picker.",
      "Homepage layout with a financial year sales chart and additional widgets.",
      "Input form fields and select option layouts.",
      "Add and edit invoice layout alignment.",
      "Datatable button styling."
    ],
    fixed: [
      "Letterhead not saving.",
      "Date issue in Add Sell."
    ],
    notes: [
      "Miscellaneous fixes and improvements were included throughout the application."
    ]
  },
  {
    version: "2.8.5",
    label: "Previous release",
    summary: "Security hardening, invoice fixes, and QR-related corrections.",
    updated: [
      "Security improvements and general enhancements.",
      "Minor fixes and small workflow improvements."
    ],
    fixed: [
      "Product stock history display.",
      "Customer display visibility when show price check screen is disabled in settings.",
      "RTL issues on the login page.",
      "Show invoice via URL flow.",
      "Invoice create error 500.",
      "QR printing for the ZATCA module.",
      "RTL issues when downloading invoice PDFs."
    ]
  },
  {
    version: "2.8",
    label: "Version listed on source site",
    summary: "The source changelog lists this release but does not currently publish itemized notes.",
    notes: [
      "No release details were published on the current BizSuite website at the time this page was built."
    ]
  },
  {
    version: "2.6",
    label: "Version listed on source site",
    summary: "The source changelog lists this release but does not currently publish itemized notes.",
    notes: [
      "No release details were published on the current BizSuite website at the time this page was built."
    ]
  },
  {
    version: "2.5.6",
    label: "Maintenance release",
    summary: "A focused fix release around rewards, COGS, POS behavior, and invoice layout alignment.",
    fixed: [
      "Redeem points values above 1,000 not saving correctly.",
      "Contact table column alignment when reward points are enabled.",
      "COGS formula corrected to opening stock plus purchases minus closing stock.",
      "Selling price group selection on POS now updates correctly when no price group is assigned after customer selection.",
      "Running restaurant orders now print KOT from show-invoice and print-invoice paths instead of printing an invoice.",
      "Footer totals alignment in the invoice list table."
    ]
  },
  {
    version: "2.5",
    label: "Feature release",
    summary: "Expanded POS visibility, better customer display detail, and performance work across the POS flow.",
    added: [
      "COGS in the profit and loss report.",
      "Remaining product stock display on the POS screen.",
      "Product image display on the POS screen.",
      "Repair module data header on the login page."
    ],
    updated: [
      "Customer display now shows more order details, including totals, order tax, and modifiers.",
      "Product add speed on the POS screen.",
      "POS screen load time.",
      "Profit and loss reporting.",
      "POS screen layout."
    ],
    fixed: [
      "App update version not changing correctly.",
      "Edit and update flow for modifiers.",
      "Dark mode layout issues."
    ]
  },
  {
    version: "2.4",
    label: "Feature release",
    summary: "Login protection, restaurant defaults, and a round of product, user, and POS fixes.",
    added: [
      "Google reCAPTCHA protection on the login screen.",
      "Enhanced footer in the main application.",
      "Light logo in the main sidebar for dark mode.",
      "Default order type selection in business settings for restaurant workflows.",
      "Optional required order type setting in business settings for restaurant workflows."
    ],
    updated: [
      "Variation handling on the product screen.",
      "Additional fields in the create and edit user modal.",
      "Business name fallback in the contact payment modal."
    ],
    fixed: [
      "Edit button on the user edit screen.",
      "Variation flow on the product screen.",
      "Dark mode layout issues.",
      "TODO button behavior on quick links.",
      "Item discount calculation on POS."
    ]
  },
  {
    version: "2.2",
    label: "Feature release",
    summary: "Restaurant printing, product labeling, printer settings, and a broad UI polish pass.",
    added: [
      "Print KOT option from the restaurant screen details button.",
      "Order status on running orders.",
      "Kitchen screen now receives only running orders.",
      "Custom labels on the product page.",
      "Print label action on products.",
      "Barcode settings in Settings > Barcodes.",
      "POS printer settings in Settings > Printers."
    ],
    updated: [
      "Menu scrollbar redesigned into a thin clickable scrollbar.",
      "Main header menus opening and closing behavior."
    ],
    fixed: [
      "Sidebar reports.",
      "Dark mode button behavior in the mobile layout.",
      "Fetching combo products.",
      "Menu scroll button behavior on mobile screens.",
      "Sending ledger via email.",
      "Location on edit product.",
      "Action button layout on the tax rates screen.",
      "Select control issues across the application.",
      "Action button layout across the application.",
      "Contact show layout.",
      "Edit button layout across the application."
    ]
  },
  {
    version: "2.1",
    label: "Feature release",
    summary: "Restaurant operations became much richer, with running orders, KOT, order types, and mobile POS refinements.",
    added: [
      "KOT (Kitchen Order Ticket).",
      "Order type selection on the POS page for dine-in, takeaway, and delivery.",
      "Visibility and management for combo product modifiers on the POS page.",
      "Combo modifiers on the product page.",
      "Running order modal with real-time updates, edit and modify options, KOT reprint, and pre-bill printing.",
      "Order notes before placing an order, reflected on KOT, invoice, and running orders.",
      "Expanded POS header dropdown with additional options.",
      "Restaurant settings to enable or disable order type, KOT, and running orders."
    ],
    updated: [
      "Dark theme control on mobile moved into a dropdown button.",
      "Repair attendance calendar todo in the main app header.",
      "Header logo removed on mobile screens.",
      "POS mobile layout updated to feel more like a mobile application.",
      "POS mobile layout set to fixed for better UX.",
      "Categories and brands layout improved for faster selection.",
      "Featured products layout.",
      "New mobile check library.",
      "Overall code improvements and optimizations."
    ],
    fixed: [
      "Invoice layout add button."
    ]
  },
  {
    version: "2.0",
    label: "Feature release",
    summary: "Major POS utility additions, invoice schemes, and screen-fit improvements.",
    added: [
      "Excel download for all products.",
      "Sell return on the POS screen.",
      "Expense entry on the POS screen.",
      "Calculator on the POS screen with keyboard input.",
      "Invoice schemes."
    ],
    updated: [
      "Product add and edit screen.",
      "Overall POS screen layout.",
      "POS screen layout to better fit the available screen space.",
      "POS screen product list.",
      "Currency exchange rate handling on the POS screen.",
      "Default data table entry behavior."
    ],
    fixed: [
      "Dashboard graph real-time update issue.",
      "Auto email notification sending issue.",
      "Data tables now show all entries correctly."
    ]
  },
  {
    version: "1.5",
    label: "Earlier release",
    summary: "Home screen expansion, reward points, invoice improvements, and a set of stability fixes.",
    added: [
      "New widgets on the home screen.",
      "Sales order support.",
      "Reward points.",
      "Settings interface improvements.",
      "Invoice preview email sending improvements."
    ],
    fixed: [
      "Media upload issue.",
      "Invoice edit issue affecting some users.",
      "Minor language issues.",
      "Invoice delete issues."
    ]
  },
  {
    version: "1.4",
    label: "Earlier release",
    summary: "Multi-currency support and a small bundle of account and misc fixes.",
    added: [
      "Support for the multi-currency module."
    ],
    fixed: [
      "Account issue.",
      "Miscellaneous fixes."
    ]
  }
];
