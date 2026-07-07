package factorypattern;

public class PdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening PDF Document... Rendering vector layouts.");
    }

    @Override
    public void close() {
        System.out.println("Closing PDF Document viewer.");
    }
}