package factorypattern;

public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening Excel Document... Parsing cells and formulas.");
    }

    @Override
    public void close() {
        System.out.println("Saving worksheets and closing Excel Document.");
    }
}