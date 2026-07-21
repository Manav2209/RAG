import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import PptxGenJS from "pptxgenjs";

import {
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
} from "docx";

import * as content from "./content";

function ensureDir(filePath: string) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function asDate(date: Date) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        12,
        0,
        0
    );
}

export async function buildDocx(
  filePath: string,
  title: string,
  sections: [string, string][],
  modified: Date
) {
  ensureDir(filePath);

  const children: Paragraph[] = [];

  children.push(
    new Paragraph({
      text: title,
      heading: HeadingLevel.TITLE,
    })
  );

  for (const [heading, body] of sections) {
    children.push(
      new Paragraph({
        text: heading,
        heading: HeadingLevel.HEADING_1,
      })
    );

    children.push(
      new Paragraph({
        text: body,
      })
    );
  }

  const doc = new Document({
    creator: "Agency Builder",
    title,
    created: asDate(modified),
    modified: asDate(modified),
    sections: [
      {
        children,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);

  fs.writeFileSync(filePath, buffer);
}

export async function buildPptx(
  filePath: string,
  slides: [string, string][],
  modified: Date
) {
  ensureDir(filePath);

  const pptx = new PptxGenJS();

  pptx.author = "Agency Builder";
  pptx.company = "Agency";
  pptx.subject = "Generated Presentation";
  pptx.title = "Presentation";
  pptx.layout = "LAYOUT_WIDE";

  for (const [title, body] of slides) {
    const slide = pptx.addSlide();

    slide.addText(title, {
      x: 0.5,
      y: 0.5,
      w: 8,
      h: 0.5,
      fontSize: 24,
      bold: true,
    });

    slide.addText(body, {
      x: 0.7,
      y: 1.3,
      w: 8,
      h: 4,
      fontSize: 18,
    });
  }

  // Metadata is limited in pptxgenjs
  pptx.writeFile({ fileName: filePath });
}

export async function buildPdf(
  filePath: string,
  title: string,
  paragraphs: string[],
  modified: Date
) {
  ensureDir(filePath);

  const doc = new PDFDocument({
    info: {
      Title: title,
      Author: "Agency Builder",
      CreationDate: asDate(modified),
    },
  });

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(22).text(title);

  doc.moveDown();

  for (const paragraph of paragraphs) {
    doc
      .fontSize(12)
      .text(paragraph);

    doc.moveDown();
  }

  doc.end();
}

export async function buildAll(nasRoot: string) {
  await buildDocx(
    path.join(nasRoot, content.MESSAGING_V3_PATH),
    content.MESSAGING_V3_TITLE,
    content.MESSAGING_V3_SECTIONS,
    content.MODIFIED_DATES[content.MESSAGING_V3_PATH]!
  );

  await buildDocx(
    path.join(nasRoot, content.MESSAGING_V4_FINAL_PATH),
    content.MESSAGING_V4_FINAL_TITLE,
    content.MESSAGING_V4_FINAL_SECTIONS,
    content.MODIFIED_DATES[content.MESSAGING_V4_FINAL_PATH]!
  );

  await buildDocx(
    path.join(nasRoot, content.MESSAGING_V4_REVISED_PATH),
    content.MESSAGING_V4_REVISED_TITLE,
    content.MESSAGING_V4_REVISED_SECTIONS,
    content.MODIFIED_DATES[content.MESSAGING_V4_REVISED_PATH]!
  );

  await buildPptx(
    path.join(nasRoot, content.CAMPAIGN_CONCEPTS_PATH),
    content.CAMPAIGN_SLIDES,
    content.MODIFIED_DATES[content.CAMPAIGN_CONCEPTS_PATH]!
  );

  await buildPdf(
    path.join(nasRoot, content.COMPETITOR_LANDSCAPE_PATH),
    content.COMPETITOR_LANDSCAPE_TITLE,
    content.COMPETITOR_LANDSCAPE_PARAGRAPHS,
    content.MODIFIED_DATES[content.COMPETITOR_LANDSCAPE_PATH]!
  );

  await buildPdf(
    path.join(nasRoot, content.ACME_SOW_PATH),
    content.ACME_SOW_TITLE,
    content.ACME_SOW_PARAGRAPHS,
    content.MODIFIED_DATES[content.ACME_SOW_PATH]!
  );

  await buildDocx(
    path.join(nasRoot, content.NORTHSTAR_STRATEGY_PATH),
    content.NORTHSTAR_STRATEGY_TITLE,
    content.NORTHSTAR_STRATEGY_SECTIONS,
    content.MODIFIED_DATES[content.NORTHSTAR_STRATEGY_PATH]!
  );

  await buildDocx(
    path.join(nasRoot, content.NORTHSTAR_OUTLINE_PATH),
    content.NORTHSTAR_OUTLINE_TITLE,
    content.NORTHSTAR_OUTLINE_SECTIONS,
    content.MODIFIED_DATES[content.NORTHSTAR_OUTLINE_PATH]!
  );

  await buildPdf(
    path.join(nasRoot, content.NORTHSTAR_SOW_PATH),
    content.NORTHSTAR_SOW_TITLE,
    content.NORTHSTAR_SOW_PARAGRAPHS,
    content.MODIFIED_DATES[content.NORTHSTAR_SOW_PATH]!
  );

  await buildPdf(
    path.join(nasRoot, content.PLAYBOOK_PATH),
    content.PLAYBOOK_TITLE,
    content.PLAYBOOK_PARAGRAPHS,
    content.MODIFIED_DATES[content.PLAYBOOK_PATH]!
  );
}