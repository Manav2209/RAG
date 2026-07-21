// content.ts

export const ACME_CLIENT_DIR =
  "CLIENTS/ACME MED/2025_ACM_014_Brand_Refresh";

export const NORTHSTAR_CLIENT_DIR =
  "CLIENTS/Northstar Ortho/2024_NSO_007_Website";

export const AGENCY_DIR =
  "_AGENCY/Case_Studies";

// ----------------------------------------------------
// File Paths
// ----------------------------------------------------

export const MESSAGING_V3_PATH =
  `${ACME_CLIENT_DIR}/01_Strategy/Messaging_Platform_v3.docx`;

export const MESSAGING_V4_FINAL_PATH =
  `${ACME_CLIENT_DIR}/01_Strategy/Messaging_Platform_v4_FINAL.docx`;

export const MESSAGING_V4_REVISED_PATH =
  `${ACME_CLIENT_DIR}/01_Strategy/Messaging_Platform_v4_FINAL_revised.docx`;

export const CAMPAIGN_CONCEPTS_PATH =
  `${ACME_CLIENT_DIR}/02_Creative/Campaign_Concepts_v2.pptx`;

export const COMPETITOR_LANDSCAPE_PATH =
  `${ACME_CLIENT_DIR}/03_Research/Competitor_Landscape.pdf`;

export const ACME_SOW_PATH =
  `${ACME_CLIENT_DIR}/04_Admin/SOW_AcmeMedical_2025.pdf`;

export const NORTHSTAR_STRATEGY_PATH =
  `${NORTHSTAR_CLIENT_DIR}/01_Strategy/Website_Strategy_Brief_v2_FINAL.docx`;

export const NORTHSTAR_OUTLINE_PATH =
  `${NORTHSTAR_CLIENT_DIR}/02_Content/Content_Outline_v1.docx`;

export const NORTHSTAR_SOW_PATH =
  `${NORTHSTAR_CLIENT_DIR}/04_Admin/SOW_Northstar_2024.pdf`;

export const PLAYBOOK_PATH =
  `${AGENCY_DIR}/MedDevice_Positioning_Playbook.pdf`;

// ----------------------------------------------------
// Modified Dates
// ----------------------------------------------------

export const MODIFIED_DATES: Record<string, Date> = {
  [MESSAGING_V3_PATH]: new Date(2025, 8, 15),
  [MESSAGING_V4_FINAL_PATH]: new Date(2025, 10, 2),
  [MESSAGING_V4_REVISED_PATH]: new Date(2025, 10, 20),
  [CAMPAIGN_CONCEPTS_PATH]: new Date(2025, 9, 10),
  [COMPETITOR_LANDSCAPE_PATH]: new Date(2025, 7, 5),
  [ACME_SOW_PATH]: new Date(2025, 0, 6),
  [NORTHSTAR_STRATEGY_PATH]: new Date(2024, 4, 12),
  [NORTHSTAR_OUTLINE_PATH]: new Date(2024, 5, 1),
  [NORTHSTAR_SOW_PATH]: new Date(2024, 4, 2),
  [PLAYBOOK_PATH]: new Date(2023, 10, 20),
};

// ----------------------------------------------------
// Messaging v3
// ----------------------------------------------------

export const MESSAGING_V3_TITLE =
  "PulseGuard Messaging Platform v3";

export const MESSAGING_V3_SECTIONS: [string, string][] = [
  [
    "Executive Summary",
    "This messaging platform defines the go-to-market positioning for PulseGuard, the ambulatory cardiac monitoring device developed by Acme Medical. Version 3 captures the strategy team's working direction ahead of the client review scheduled for the fourth quarter. It is an internal draft and has not yet been reviewed or approved by the client. The recommendations here should be treated as a starting point for that conversation rather than a settled position.",
  ],
  [
    "Positioning Statement",
    "PulseGuard will pursue a premium positioning strategy anchored in price leadership. The device is priced above the competitive set to signal category leadership and to protect the perception of superior engineering. We frame PulseGuard as the premium tier of ambulatory cardiac monitoring, reserved for clinicians and health systems that will not compromise on hardware quality.",
  ],
  [
    "Key Messages",
    "First, PulseGuard is built to the highest hardware standard in its class. Second, a premium price is a proxy for premium reliability. Third, buyers who select PulseGuard are choosing the reference standard rather than a budget alternative. The messaging leans on exclusivity and on the confidence that comes from paying for the best available instrument.",
  ],
  [
    "Proof Points",
    "PulseGuard reports a 98.6 percent arrhythmia detection rate in internal bench testing. Battery life exceeds fourteen days on a single charge. The device carries a three year hardware warranty. These proof points support the premium narrative and should be quoted in sales collateral once validated by the clinical affairs team.",
  ],
];

// ----------------------------------------------------
// Messaging v4 FINAL
// ----------------------------------------------------

export const MESSAGING_V4_FINAL_TITLE =
  "PulseGuard Messaging Platform v4 FINAL";

export const MESSAGING_V4_FINAL_SECTIONS: [string, string][] = [
  [
    "Executive Summary",
    "This is the final client-approved messaging platform for PulseGuard, the ambulatory cardiac monitoring device from Acme Medical. It supersedes all earlier drafts, including version 3. Approved by client 2025-11-02. Following the client review, the premium price-leadership direction explored in version 3 was retired in favor of a value narrative that the client believes better matches how health systems actually purchase monitoring hardware.",
  ],
  [
    "Positioning Statement",
    "PulseGuard will pursue a value positioning strategy anchored in outcomes per dollar. Rather than competing on prestige, PulseGuard competes on the clinical and economic return it delivers for every dollar a health system spends. The device is positioned as the most defensible investment for budget-conscious cardiology programs that still demand dependable data.",
  ],
  [
    "Key Messages",
    "First, PulseGuard delivers measurable outcomes per dollar rather than prestige. Second, its total cost of ownership is lower than comparable monitors over a three year horizon. Third, procurement teams can justify PulseGuard on economic grounds without sacrificing diagnostic dependability. The tone is pragmatic and evidence-led rather than aspirational.",
  ],
  [
    "Proof Points",
    "PulseGuard reports a 98.6 percent arrhythmia detection rate in internal bench testing. Battery life exceeds fourteen days on a single charge. Independent modeling shows a lower cost per monitored patient day than the two leading competitors. These proof points anchor the value story and are cleared for use in approved collateral.",
  ],
];

// ----------------------------------------------------
// Messaging v4 Revised
// ----------------------------------------------------

export const MESSAGING_V4_REVISED_TITLE =
  "PulseGuard Messaging Platform v4 FINAL";

export const MESSAGING_V4_REVISED_SECTIONS: [string, string][] = [
  [
    "Executive Summary",
    "This document carries internal edits made after the client approval on version 4. It preserves the approved value narrative but incorporates additional language requested by the sales team during a later internal working session. It has not been sent back to the client for a second approval.",
  ],
  [
    "Positioning Statement",
    "PulseGuard will pursue a value positioning strategy anchored in outcomes per dollar. The device competes on the clinical and economic return it delivers rather than on prestige, and remains the most defensible investment for budget-conscious cardiology programs.",
  ],
  [
    "Key Messages",
    "First, PulseGuard delivers measurable outcomes per dollar. Second, PulseGuard commands a premium price point that reflects best-in-class diagnostic accuracy. Third, procurement teams can justify the investment on both economic and clinical grounds. This revision reintroduces a premium claim that the sales team felt was needed for enterprise conversations.",
  ],
  [
    "Proof Points",
    "PulseGuard reports a 98.6 percent arrhythmia detection rate in internal bench testing. Battery life exceeds fourteen days on a single charge. Independent modeling shows a lower cost per monitored patient day than the two leading competitors. The proof points are unchanged from the approved version.",
  ],
];

// ----------------------------------------------------
// Northstar Strategy
// ----------------------------------------------------

export const NORTHSTAR_STRATEGY_TITLE =
  "Northstar Ortho Website Strategy Brief v2 FINAL";

export const NORTHSTAR_STRATEGY_SECTIONS: [string, string][] = [
  [
    "Executive Summary",
    "This brief defines the website strategy for Northstar Ortho, a manufacturer of orthopedic surgical implants. The engagement covers positioning, information architecture, and content strategy for the relaunch of the corporate site aimed at orthopedic surgeons and hospital procurement teams.",
  ],
  [
    "Positioning Statement",
    "Northstar Ortho is positioned as the dependable partner for orthopedic surgical teams that value predictable implant performance. The medical device positioning work emphasizes surgeon confidence, procedure efficiency, and long-term implant durability across the product portfolio.",
  ],
  [
    "Key Messages",
    "First, Northstar implants are engineered for predictable intraoperative handling. Second, the portfolio is supported by responsive clinical service. Third, hospital partners benefit from stable supply and transparent pricing. The messaging is written for a clinical and procurement audience.",
  ],
];

// ----------------------------------------------------
// Northstar Content Outline
// ----------------------------------------------------

export const NORTHSTAR_OUTLINE_TITLE =
  "Northstar Ortho Content Outline v1";

export const NORTHSTAR_OUTLINE_SECTIONS: [string, string][] = [
  [
    "Overview",
    "This outline lists the content modules planned for the Northstar Ortho website relaunch, mapped to the positioning defined in the strategy brief.",
  ],
  [
    "Content Modules",
    "The site will include a product portfolio section, a clinical evidence library, a surgeon resources hub, and a procurement and supply information center. Each module reinforces the medical device positioning agreed with the client.",
  ],
];

// ----------------------------------------------------
// Campaign Deck
// ----------------------------------------------------

export const CAMPAIGN_CONCEPTS_TITLE =
  "PulseGuard Campaign Concepts v2";

export const CAMPAIGN_SLIDES: [string, string][] = [
  [
    "PulseGuard Campaign Concepts",
    "Acme Medical Brand Refresh 2025",
  ],
  [
    "Campaign Objective",
    "Establish PulseGuard as the value leader in ambulatory cardiac monitoring.",
  ],
  [
    "Audience",
    "Cardiology program directors and hospital procurement teams.",
  ],
  [
    "Concept A: Outcomes That Add Up",
    "A message built around measurable outcomes per dollar.",
  ],
  [
    "Concept B: Confidence On A Budget",
    "Dependable monitoring that procurement can defend.",
  ],
  [
    "PulseGuard Hero Creative",
    "Product-forward creative featuring the PulseGuard device family.",
  ],
  [
    "Media Plan",
    "A blend of clinical trade media and targeted digital placements.",
  ],
  [
    "Next Steps",
    "Select a concept and proceed to production for client review.",
  ],
];

// ----------------------------------------------------
// Competitor Landscape PDF
// ----------------------------------------------------

export const COMPETITOR_LANDSCAPE_TITLE =
  "PulseGuard Competitor Landscape";

export const COMPETITOR_LANDSCAPE_PARAGRAPHS: string[] = [
  "This research brief summarizes the competitive landscape for ambulatory cardiac monitoring devices relevant to the PulseGuard positioning work for Acme Medical.",

  "The category is led by two established competitors that compete primarily on brand prestige and premium pricing. PulseGuard has an opportunity to differentiate on value and outcomes per dollar rather than matching their premium posture.",

  "Source: MedTech Insights 2025 Cardiac Monitoring Market Report.",

  "Source: Journal of Ambulatory Cardiology, 2024, competitive pricing survey.",
];

// ----------------------------------------------------
// ACME Statement of Work
// ----------------------------------------------------

export const ACME_SOW_TITLE =
  "Statement of Work: Acme Medical Brand Refresh 2025";

export const ACME_SOW_PARAGRAPHS: string[] = [
  "Client: Acme Medical. Project: 2025 Brand Refresh for the PulseGuard product line.",

  "Service line: Brand Strategy.",

  "Total contract value: $85,000.",

  "Scope includes messaging platform development, campaign concepting, and competitor research as detailed in the project plan.",
];

// ----------------------------------------------------
// Northstar Statement of Work
// ----------------------------------------------------

export const NORTHSTAR_SOW_TITLE =
  "Statement of Work: Northstar Ortho Website 2024";

export const NORTHSTAR_SOW_PARAGRAPHS: string[] = [
  "Client: Northstar Ortho. Project: 2024 corporate website relaunch.",

  "Service line: Website Strategy and Content.",

  "Total contract value: $27,500.",

  "Scope includes website strategy, information architecture, and content outline.",
];

// ----------------------------------------------------
// Agency Playbook
// ----------------------------------------------------

export const PLAYBOOK_TITLE =
  "Medical Device Positioning Playbook";

export const PLAYBOOK_PARAGRAPHS: string[] = [
  "This playbook captures the agency approach to positioning work for medical device clients, drawn from prior engagements across cardiac and orthopedic device makers.",

  "The core method moves a client from a prestige-led narrative toward a defensible value narrative grounded in clinical and economic outcomes, which procurement teams can justify. This pattern has recurred across multiple medical device positioning projects and informs how we approach new brand refresh work.",
];

// ----------------------------------------------------
// QuickBooks Customers
// ----------------------------------------------------

export const CUSTOMERS_HEADER = [
    "customer_id",
    "customer_name",
    "created_date",
    "terms",
  ];
  
  export const CUSTOMERS_ROWS: string[][] = [
    ["CUST-001", "ACME MED LLC", "2024-12-01", "Net 30"],
    ["CUST-002", "Northstar Ortho", "2024-04-15", "Net 30"],
  ];
  
  // ----------------------------------------------------
  // Invoices
  // ----------------------------------------------------
  
  export const INVOICES_HEADER = [
    "invoice_id",
    "customer_id",
    "customer_name",
    "issue_date",
    "due_date",
    "amount",
    "status",
    "service_line",
  ];
  
  export const INVOICES_ROWS: string[][] = [
    [
      "INV-1001",
      "CUST-001",
      "ACME MED LLC",
      "2025-01-15",
      "2025-02-14",
      "10000.00",
      "paid",
      "Brand Strategy",
    ],
    [
      "INV-1002",
      "CUST-001",
      "ACME MED LLC",
      "2025-03-10",
      "2025-04-09",
      "15000.00",
      "paid",
      "Brand Strategy",
    ],
    [
      "INV-1003",
      "CUST-001",
      "ACME MED LLC",
      "2025-05-20",
      "2025-06-19",
      "12000.00",
      "paid",
      "Brand Strategy",
    ],
    [
      "INV-1004",
      "CUST-001",
      "ACME MED LLC",
      "2025-07-15",
      "2025-08-14",
      "23000.00",
      "paid",
      "Brand Strategy",
    ],
    [
      "INV-1005",
      "CUST-001",
      "ACME MED LLC",
      "2025-10-01",
      "2025-10-31",
      "15000.00",
      "open",
      "Brand Strategy",
    ],
    [
      "INV-1006",
      "CUST-001",
      "ACME MED LLC",
      "2026-01-10",
      "2026-02-09",
      "10000.00",
      "open",
      "Brand Strategy",
    ],
    [
      "INV-1007",
      "CUST-002",
      "Northstar Ortho",
      "2024-06-10",
      "2024-07-10",
      "18000.00",
      "paid",
      "Website Strategy",
    ],
    [
      "INV-1008",
      "CUST-002",
      "Northstar Ortho",
      "2024-09-05",
      "2024-10-05",
      "9500.00",
      "paid",
      "Website Strategy",
    ],
  ];
  
  // ----------------------------------------------------
  // Payments
  // ----------------------------------------------------
  
  export const PAYMENTS_HEADER = [
    "payment_id",
    "invoice_id",
    "payment_date",
    "amount",
  ];
  
  export const PAYMENTS_ROWS: string[][] = [
    ["PAY-2001", "INV-1001", "2025-02-19", "10000.00"],
    ["PAY-2002", "INV-1002", "2025-04-21", "15000.00"],
    ["PAY-2003", "INV-1003", "2025-06-22", "12000.00"],
    ["PAY-2004", "INV-1004", "2025-08-26", "23000.00"],
    ["PAY-2005", "INV-1007", "2024-07-12", "18000.00"],
    ["PAY-2006", "INV-1008", "2024-10-08", "9500.00"],
  ];
  
  // ----------------------------------------------------
  // CRM Companies
  // ----------------------------------------------------
  
  export const COMPANIES_HEADER = [
    "company_id",
    "company_name",
    "industry",
  ];
  
  export const COMPANIES_ROWS: string[][] = [
    ["CRM-CO-001", "Acme Medical Devices", "Medtech"],
    ["CRM-CO-002", "Northstar Ortho", "Medtech"],
  ];
  
  // ----------------------------------------------------
  // CRM Deals
  // ----------------------------------------------------
  
  export const DEALS_HEADER = [
    "deal_id",
    "company_id",
    "company_name",
    "deal_name",
    "stage",
    "amount",
    "close_date",
  ];
  
  export const DEALS_ROWS: string[][] = [
    [
      "CRM-DL-001",
      "CRM-CO-001",
      "Acme Medical Devices",
      "2025 Brand Refresh",
      "won",
      "85000.00",
      "2025-01-05",
    ],
    [
      "CRM-DL-002",
      "CRM-CO-001",
      "Acme Medical Devices",
      "PulseGuard Campaign Extension",
      "proposal",
      "40000.00",
      "",
    ],
  ];
  
  // ----------------------------------------------------
  // Aliases
  // ----------------------------------------------------
  
  export const ALIASES = {
    companies: {
      company_acme_medical: {
        canonical_name: "Acme Medical",
        aliases: [
          "Acme Medical",
          "ACME MED LLC",
        ],
      },
  
      company_northstar_ortho: {
        canonical_name: "Northstar Ortho",
        aliases: [
          "Northstar Ortho",
        ],
      },
    },
  } as const;