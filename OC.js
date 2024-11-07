const { Document, Packer, Paragraph } = require("docx");
const fs = require("fs");

const doc = new Document();
doc.addSection({
    children: [new Paragraph("Hello Word Document!")],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("CustomDocument.docx", buffer);
});
