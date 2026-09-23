export type Solution = {
  index: string;
  slug: string;
  title: string;
  promise: string;
  description: string;
  capabilities: string[];
  outcome: string;
};

export const solutions: Solution[] = [
  {
    index: "01",
    slug: "centralised-erp",
    title: "Centralised ERP Development",
    promise: "A single operating system for your entire business.",
    description:
      "We build enterprise resource planning systems tailored to your organisation, unifying finance, operations, procurement, human resources, and reporting into one environment. Instead of reconciling figures across departments, your teams work from a shared and continuously accurate record.",
    capabilities: [
      "Custom module design mapped to existing departmental workflows",
      "Role-based access control and approval hierarchies",
      "Consolidated dashboards and automated management reporting",
      "Migration of existing records from spreadsheets and legacy systems",
    ],
    outcome: "Decisions made on current data instead of last month's summary.",
  },
  {
    index: "02",
    slug: "inventory-management",
    title: "Inventory Management",
    promise: "Know exactly what you hold, where it is, and what it is worth.",
    description:
      "Real-time inventory control across stores, warehouses, and branches. Stock movement is recorded as it happens, reorder points are enforced automatically, and valuation stays accurate without a manual count.",
    capabilities: [
      "Live stock levels across multiple locations",
      "Automated reorder thresholds and low-stock alerting",
      "Batch, serial, and expiry tracking",
      "Goods inward, dispatch, and stock-transfer workflows",
      "Barcode and QR-based entry",
      "Stock valuation and movement reporting",
    ],
    outcome: "Fewer stock-outs, less dead capital, and an audit trail that holds up.",
  },
  {
    index: "03",
    slug: "digital-presence",
    title: "Digital Presence",
    promise: "A credible public face that converts interest into enquiries.",
    description:
      "Websites, customer portals, and brand systems built to perform. We focus on speed, clarity, search visibility, and a structure that turns visitors into measurable enquiries rather than passive traffic.",
    capabilities: [
      "Corporate websites and product landing pages",
      "Customer and partner portals",
      "Search engine optimisation and performance tuning",
      "Analytics instrumentation and enquiry tracking",
      "Content structure and brand consistency across channels",
    ],
    outcome: "A presence that reflects the standard of the business behind it.",
  },
  {
    index: "04",
    slug: "learning-management-system",
    title: "Learning Management System",
    promise: "Train your team once and deliver it consistently thereafter.",
    description:
      "A structured platform for onboarding, skills training, compliance, and certification. Knowledge that currently lives with senior staff becomes an institutional asset that survives attrition.",
    capabilities: [
      "Course authoring with video, document, and assessment modules",
      "Learner progress tracking and completion reporting",
      "Assessments, scoring, and certificate issuance",
      "Role-based learning paths for departments and designations",
      "Compliance and mandatory-training records",
    ],
    outcome: "Faster onboarding and training quality that does not depend on who is delivering it.",
  },
  {
    index: "05",
    slug: "payroll",
    title: "Payroll",
    promise: "Accurate salaries, processed on time, with compliance built in.",
    description:
      "End-to-end payroll covering attendance, earnings, deductions, statutory compliance, and disbursement. Payroll stops being a monthly scramble and becomes a scheduled, verifiable process.",
    capabilities: [
      "Attendance and leave integration",
      "Automated salary computation with earnings and deduction structures",
      "Statutory handling for PF, ESI, professional tax, and TDS",
      "Digital payslip generation and distribution",
      "Full-and-final settlement and reimbursement workflows",
      "Payroll registers and statutory reports",
    ],
    outcome: "A payroll cycle that closes predictably, with a record for every figure.",
  },
  {
    index: "06",
    slug: "marketing-communication-automation",
    title: "Marketing & Communication Automation",
    promise: "Reach the right customer at the right moment, without manual effort.",
    description:
      "Automated customer communication across email, SMS, and WhatsApp, driven by real events in your business rather than manually triggered sends. Campaigns, follow-ups, and reminders run on defined rules.",
    capabilities: [
      "Multi-channel campaign delivery across email, SMS, and WhatsApp",
      "Event-triggered sequences for follow-ups, reminders, and renewals",
      "Customer segmentation and lifecycle stages",
      "Lead capture and CRM pipeline integration",
      "Delivery, open, and response reporting",
    ],
    outcome: "Consistent customer communication that continues when the team is busy.",
  },
  {
    index: "07",
    slug: "ai-integration",
    title: "AI Integration",
    promise: "Practical intelligence applied to the work you already do.",
    description:
      "We embed AI into existing workflows where it produces measurable returns — document processing, forecasting, support automation, and decision assistance. Applied to defined problems, not added for its own sake.",
    capabilities: [
      "Document and invoice data extraction",
      "Demand and inventory forecasting",
      "Customer support assistants trained on your own knowledge base",
      "Intelligent search across internal records and documents",
      "Anomaly detection and exception reporting",
      "Integration of AI capability into existing ERP and operational modules",
    ],
    outcome: "Hours returned to the team, applied where judgement actually matters.",
  },
];
