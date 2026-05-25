# QueryPilot v7 — Schema Guide

> *Project maintained by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder of [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Built on an Android tablet using Acode editor, zero budget. Contact: WhatsApp [+234 810 086 6322](https://wa.me/2348100866322) · [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com)*

---

The schema you define in the sidebar is the **most important input** for generating accurate SQL. This guide explains how to write schemas that get the best results from QueryPilot.

---

## Basic Format

One table per line. Columns in parentheses, comma-separated:

```
table_name(column1, column2, column3)
```

Example:

```
customers(id, name, email, region, status, created_at)
orders(id, customer_id, total, status, created_at)
products(id, name, category, price, stock)
```

---

## How QueryPilot Uses Your Schema

QueryPilot analyses column names to understand their purpose. It uses this understanding to:

- Choose the right column to aggregate (SUM, AVG, MAX, MIN)
- Identify the date column for date-range filters
- Identify the status column for status filters
- Auto-detect foreign keys in the JOIN and Multi-JOIN builders
- Infer data types for Visual Builder hints and DDL generation
- Draw FK links in the ER Diagram and ASCII Schema Diagram tools

### Column Name Recognition

| Column name contains | Treated as |
|---|---|
| `id` | Primary key / integer identifier |
| `_id` (suffix) | Foreign key (e.g. `customer_id`) |
| `total`, `amount`, `price`, `cost`, `salary`, `revenue`, `earnings` | Numeric metric — used for SUM/AVG/MAX/MIN |
| `stock`, `quantity`, `qty`, `count` | Integer count — used for stock filters |
| `date`, `created_at`, `updated_at`, `hire_date`, `due_date`, `_at`, `_date` | Date/time — used for date-range filters |
| `status`, `active`, `state`, `enabled`, `flag`, `type` | Status/category — used for status filters |
| `name`, `title`, `label`, `product`, `customer`, `user`, `employee` | Display name |
| `email`, `mail` | Email |
| `category`, `region`, `department` | Category — used for GROUP BY |

---

## Best Practices

### 1. Include All Columns You Query Against
The more columns you list, the more accurately QueryPilot can build SQL.

```text
✘ orders(id, customer_id, total)
✔ orders(id, customer_id, total, status, created_at, updated_at)
```

### 2. Use Consistent, Descriptive Column Names
```text
✘ orders(id, cid, tot, sts, dt)
✔ orders(id, customer_id, total, status, created_at)
```

### 3. Use the `_id` Suffix for Foreign Keys
This powers auto-detection in JOIN, Multi-JOIN, ER Diagram, ASCII diagram and DDL inference.

```text
orders(id, customer_id, product_id, total, status)
```

`customer_id → customers.id`, `product_id → products.id`.

### 4. Include a Date Column
Required for "last 7 days / this month / this year" patterns.

### 5. Include a Status Column
Powers `WHERE status = 'active'`, `'pending'`, `'unpaid'`, `'overdue'` patterns.

### 6. Match Your Real Database

| Engine | Query to discover columns |
|---|---|
| MySQL / MariaDB | `DESCRIBE table_name;` |
| PostgreSQL | `SELECT column_name FROM information_schema.columns WHERE table_name = 'table_name';` |
| SQLite | `PRAGMA table_info(table_name);` |
| SQL Server | `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'table_name';` |
| Oracle | `SELECT column_name FROM user_tab_columns WHERE table_name = 'TABLE_NAME';` |
| BigQuery | `SELECT column_name FROM \`project.dataset.INFORMATION_SCHEMA.COLUMNS\` WHERE table_name='table_name';` |

---

## A Complete Real-World Schema

```
customers(id, name, email, phone, region, status, created_at)
orders(id, customer_id, product_id, quantity, total, status, created_at, updated_at)
products(id, name, category, description, price, cost, stock, status)
employees(id, name, email, department, role, salary, status, hire_date)
invoices(id, customer_id, order_id, amount, tax, status, due_date, created_at)
payments(id, invoice_id, customer_id, amount, method, status, created_at)
```

With this schema:

- "Top 10 customers by total revenue this year" ✅
- "Show overdue invoices with amount > 500" ✅
- "Average salary by department for active employees" ✅
- "Products with stock below 20 in Electronics" ✅
- "Year over year revenue growth" ✅ (*v7*)
- "Rolling 7 day average of orders" ✅ (*v7*)
- "Top 3 products per category" ✅ (*v7*)
- "Latest order per customer" ✅ (*v7*)

---

## CSV Auto-Detection

Drag a CSV file onto the **CSV** sidebar panel. QueryPilot will:

1. Extract column names from the **header row**
2. Sample the first **20 rows** to infer each column's type
3. Use the **file name** as the table name
4. Append the line to your Schema

Inference rules:
- >50 % of sampled values numeric → `number`
- >50 % match date patterns → `date`
- Otherwise → `text`

---

## Import Schema *(new in v7)*

The **Schema panel** now has an **Import (.json or .sql)** button.

### From `.sql` (CREATE TABLE statements)
QueryPilot parses standard `CREATE TABLE [IF NOT EXISTS] name (col1 TYPE, col2 TYPE, ...);` blocks, including:

- Backticks / square brackets / double quotes around identifiers (MySQL / SQL Server / PostgreSQL)
- Skips `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CONSTRAINT`, `INDEX`, `KEY`, `CHECK` clauses
- Handles multi-line column definitions

Example input (`schema.sql`):

```sql
CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  total DECIMAL(10,2),
  status VARCHAR(20),
  created_at TIMESTAMP
);
```

Becomes:

```
customers(id, name, email, status, created_at)
orders(id, customer_id, total, status, created_at)
```

### From `.json`
Round-trips the **Export Schema (.json)** format. The file looks like:

```json
{
  "tool": "QueryPilot v7",
  "exported": "...",
  "dialect": "PostgreSQL",
  "schema": "customers(id, name, email, ...)\norders(...)",
  "tables": { "customers": ["id","name",...], "orders": [...] }
}
```

---

## Schema Persistence

- **Save Schema Locally** — writes to browser `localStorage` under the key `qp_schema`. Persists between sessions on the same device + browser.
- **Load Saved Schema** — restores the saved copy.
- **Export Schema (.json)** *(v7)* — download a portable file you can re-import on any device.
- **Copy Shareable URL** *(v7)* — encodes the schema + dialect into a URL hash (`#qp=...`). Anyone opening that URL loads your schema instantly.

### v8 — Per-workspace schemas

In v8, schemas are stored **per workspace** (Production, Staging, Client A, etc.). Switching workspaces atomically swaps the schema in the textarea. See [ENTERPRISE.md § 1. Multi-Workspace Manager](ENTERPRISE.md#1-multi-workspace-manager).

### v9 — Schemas used in Learning Hub lessons

The v9 Learning Hub uses the SAME schema you have in the sidebar for its **"Try in QueryPilot"** buttons. Lessons in Module 3 (SQL) launch queries against your current schema — so a sensible default schema (the QueryPilot starter `customers/orders/products/employees/invoices`) gives the best lesson experience.

---

## Dialect-Specific Notes

Set the dialect at the top of the Schema panel. Some generated SQL adapts:

| Dialect | Date function used |
|---|---|
| Standard SQL | `CURRENT_DATE - INTERVAL '7 days'` |
| PostgreSQL | `CURRENT_DATE - INTERVAL '7 days'` |
| MySQL | `CURRENT_DATE - INTERVAL 7 DAY` |
| SQLite | `date('now', '-7 days')` |
| SQL Server | `DATEADD(day, -7, GETDATE())` |
| BigQuery | `DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)` |
| Snowflake | `DATEADD(day, -7, CURRENT_DATE())` |
| Oracle | `SYSDATE - 7` |

The Stored Procedure Generator also adapts (`DELIMITER //` vs `plpgsql` vs `SET NOCOUNT ON` vs `AS BEGIN...END;`).

---

> **Tip:** A precise schema is the difference between *"oh, that's roughly right"* and *"that's exactly what I'd have written"*. Spend two extra minutes listing all your columns — every feature in QueryPilot benefits.

---

> *Authored by **Adewale Samson Adeagbo** — based on 15+ years teaching Maths/CS in Nigerian classrooms and 12 deployed ML/EdTech projects. If a section in this guide is unclear, that's a bug — let me know: [WhatsApp +234 810 086 6322](https://wa.me/2348100866322) or open an issue.*
