import pdfParse from "pdf-parse";
import {PDFLoader} from "@langchain/community/document_loaders/fs/pdf";

const loader = new PDFLoader("server/uploads/0fa7796dc0f95c960cf47f677ecbfbb0");

const docs = await loader.load();

console.log(docs.length);