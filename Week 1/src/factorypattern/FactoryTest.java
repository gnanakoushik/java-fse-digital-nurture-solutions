package factorypattern;

public class FactoryTest {
    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();


        Document doc1 = wordFactory.createDocument();
        Document doc2 = pdfFactory.createDocument();
        Document doc3 = excelFactory.createDocument();

        System.out.println("--- Testing Factory Method Pattern ---");
        doc1.open();
        doc1.close();
        System.out.println();

        doc2.open();
        doc2.close();
        System.out.println();

        doc3.open();
        doc3.close();
    }
}