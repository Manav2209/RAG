import fs from "fs";
import path from "path";

import * as content from "./content";
import * as financials from "./financials";
import * as nasDocs from "./builder";

/**
 * Equivalent to:
 *
 * Path(__file__).resolve().parents[3] / "data"
 */
export function defaultDataRoot(): string {
    return path.resolve(__dirname, "../../data");
}

/**
 * Writes:
 * fake_nas/manifest.json
 */
export function writeManifest(nasRoot: string): string {
    const manifest: Record<string, string> = {};

    const entries = Object.entries(content.MODIFIED_DATES).sort(([a], [b]) =>
        a.localeCompare(b)
    );

    for (const [filePath, modified] of entries) {
        manifest[filePath]  = modified.toISOString().split("T")[0];
    }

    fs.mkdirSync(nasRoot, { recursive: true });

    const manifestPath = path.join(nasRoot, "manifest.json");

    fs.writeFileSync(
        manifestPath,
        JSON.stringify(manifest, null, 2) + "\n",
        "utf8"
    );

    return manifestPath;
}

/**
 * Generates the entire fake dataset.
 */
export async function generate(dataRoot: string): Promise<void> {
    const nasRoot = path.join(dataRoot, "fake_nas");

    await nasDocs.buildAll(nasRoot);

    writeManifest(nasRoot);

    await financials.buildAll(dataRoot);
}

/**
 * Entry point
 */
export async function main(): Promise<void> {
    const dataRoot = defaultDataRoot();

    await generate(dataRoot);

    console.log(`Generated synthetic dataset at ${dataRoot}`);

    const files = Object.keys(content.MODIFIED_DATES).sort();

    for (const file of files) {
        console.log(`  fake_nas/${file}`);
    }

    [
        "quickbooks/customers.csv",
        "quickbooks/invoices.csv",
        "quickbooks/payments.csv",
        "crm/companies.csv",
        "crm/deals.csv",
        "aliases.yaml",
    ].forEach((file) => console.log(`  ${file}`));
    }

    if (require.main === module) {
    main().catch((err) => {
        console.error(err);
        process.exit(1);
    });
}