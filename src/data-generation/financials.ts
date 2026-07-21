import fs from "fs";
import path from "path";
import { stringify } from "yaml";

import * as content from "./content";

/**
 * Equivalent to Python:
 *
 * def _write_csv(path, header, rows)
 */
function writeCsv(
  filePath: string,
  header: string[],
  rows: string[][]
): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  const csv: string[] = [];

  csv.push(header.join(","));

  for (const row of rows) {
    csv.push(
      row
        .map((value) => {
          if (
            value.includes(",") ||
            value.includes('"') ||
            value.includes("\n")
          ) {
            return `"${value.replace(/"/g, '""')}"`;
          }

          return value;
        })
        .join(",")
    );
  }

  fs.writeFileSync(filePath, csv.join("\n"), "utf8");
}

/**
 * Equivalent to Python:
 *
 * build_all(data_root)
 */
export async function buildAll(dataRoot: string): Promise<void> {
  const quickbooks = path.join(dataRoot, "quickbooks");
  const crm = path.join(dataRoot, "crm");

  writeCsv(
    path.join(quickbooks, "customers.csv"),
    content.CUSTOMERS_HEADER,
    content.CUSTOMERS_ROWS
  );

  writeCsv(
    path.join(quickbooks, "invoices.csv"),
    content.INVOICES_HEADER,
    content.INVOICES_ROWS
  );

  writeCsv(
    path.join(quickbooks, "payments.csv"),
    content.PAYMENTS_HEADER,
    content.PAYMENTS_ROWS
  );

  writeCsv(
    path.join(crm, "companies.csv"),
    content.COMPANIES_HEADER,
    content.COMPANIES_ROWS
  );

  writeCsv(
    path.join(crm, "deals.csv"),
    content.DEALS_HEADER,
    content.DEALS_ROWS
  );

  const aliasesPath = path.join(dataRoot, "aliases.yaml");

  fs.writeFileSync(
    aliasesPath,
    stringify(content.ALIASES),
    "utf8"
  );
}