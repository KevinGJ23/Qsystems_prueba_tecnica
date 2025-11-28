import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableRowSorter;
import java.awt.*;
import java.util.Arrays;
import java.util.List;
import java.text.DecimalFormat;

public class Main {

    // Se declara una herramienta para asegurarnos de que los números (promedios)
    // se muestren siempre con un formato consistente (solo dos decimales).
    private static final DecimalFormat df = new DecimalFormat("#.##");

    public static void main(String[] args) {
        // Punto de inicio de la aplicación. Es buena práctica en Swing ejecutar
        // la construcción de la interfaz gráfica en un hilo de eventos separado
        // para que la aplicación principal no se bloquee.
        SwingUtilities.invokeLater(Main::crearYMostrarGUI);
    }

    private static void crearYMostrarGUI() {
        // --- 1. Datos e Instanciación (Lógica de Negocio) ---

        // Se crean las listas de notas y se instancian varios objetos Student.
        // Aquí se simula la obtención de datos de una base de datos o un archivo.
        List<Double> notasJuan = Arrays.asList(4.5, 3.8, 5.0, 4.0);
        Student juan = new Student("Juan Pérez", 101, notasJuan);

        List<Double> notasMaria = Arrays.asList(3.2, 4.1, 2.9, 3.5);
        Student maria = new Student("María López", 102, notasMaria);

        List<Double> notasAna = Arrays.asList(4.9, 4.8, 5.0, 5.0);
        Student ana = new Student("Ana Gómez", 104, notasAna);

        List<Double> notasBeto = Arrays.asList(2.5, 1.8, 3.0, 2.0);
        Student beto = new Student("Beto Rivas", 105, notasBeto);

        // Se agrupan todos los estudiantes en una única lista para procesarlos.
        List<Student> estudiantes = Arrays.asList(juan, maria, ana, beto);

        // --- 2. Configuración de la Ventana Principal (Contenedor Base) ---

        // Se crea el frame principal que contendrá todos los elementos de la interfaz.
        JFrame frame = new JFrame("Gestión de Estudiantes y Promedios");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Define qué pasa al cerrar (terminar el programa)
        frame.setSize(600, 400); // Establece un tamaño base para la ventana.
        frame.setLayout(new BorderLayout(10, 10)); // Se usa BorderLayout para organizar las secciones: Norte, Centro, Sur.
        frame.setLocationRelativeTo(null); // Centra la ventana en el medio de la pantalla al iniciar.

        // --- 3. Creación del Modelo de Tabla (Estructura de Datos de la Vista) ---

        // Se definen los encabezados que tendrá la tabla.
        String[] columnas = {"ID", "Nombre", "Promedio", "Estado"};
        // El DefaultTableModel es el objeto que realmente guarda los datos que se ven en la tabla.
        DefaultTableModel model = new DefaultTableModel(columnas, 0) {
            // Se sobreescribe este método para prevenir que el usuario pueda hacer doble click y editar celdas.
            @Override
            public boolean isCellEditable(int row, int column) {
                return false;
            }
        };

        // Se recorre la lista de estudiantes para calcular el promedio y el estado.
        for (Student s : estudiantes) {
            double promedio = s.getPromedio();
            String estado = promedio >= 3.5 ? "Aprobado" : "Reprobado"; // Regla de negocio: la nota de corte es 3.5.

            // Se prepara la fila de datos para ser añadida al modelo de la tabla.
            Object[] fila = new Object[]{
                    s.getId(),
                    s.getNombre(),
                    df.format(promedio),
                    estado
            };
            model.addRow(fila);
        }

        // --- 4. Creación de la Tabla y el Filtro (Componentes de Interacción) ---

        // Se crea el componente visual de la tabla usando el modelo que contiene los datos.
        JTable tabla = new JTable(model);
        // Se aplican algunos estilos básicos a la tabla para mejorar la estética.
        tabla.setFont(new Font("SansSerif", Font.PLAIN, 14));
        tabla.setRowHeight(25);
        tabla.getTableHeader().setFont(new Font("SansSerif", Font.BOLD, 14));

        // El TableRowSorter es la herramienta de Swing que nos permite ordenar y filtrar los datos de la tabla.
        TableRowSorter<DefaultTableModel> sorter = new TableRowSorter<>(model);
        tabla.setRowSorter(sorter);

        // Se crea el campo de texto donde el usuario escribirá el nombre a buscar.
        JTextField filtroInput = new JTextField(20);
        filtroInput.setFont(new Font("SansSerif", Font.PLAIN, 14));

        // --- Lógica del Filtro en Tiempo Real ---
        // Se añade un "escuchador" al campo de texto. Esto significa que cada vez que
        // el texto cambie (se escriba, se borre, etc.), se llamará al método 'filtrar'.
        filtroInput.getDocument().addDocumentListener(new javax.swing.event.DocumentListener() {
            public void changedUpdate(javax.swing.event.DocumentEvent e) {
                filtrar();
            }
            public void removeUpdate(javax.swing.event.DocumentEvent e) {
                filtrar();
            }
            public void insertUpdate(javax.swing.event.DocumentEvent e) {
                filtrar();
            }

            private void filtrar() {
                String texto = filtroInput.getText();
                if (texto.trim().length() == 0) {
                    // Si el cuadro de texto está vacío, se desactiva cualquier filtro.
                    sorter.setRowFilter(null);
                } else {
                    // Se aplica un filtro de expresión regular que busca el texto.
                    // Se especifica que busque en la columna de Nombres (índice 1) y el (?i)
                    // hace que la búsqueda no distinga entre mayúsculas y minúsculas.
                    sorter.setRowFilter(RowFilter.regexFilter("(?i)" + texto, 1));
                }
            }
        });

        // --- 5. Diseño y Ensamblaje de la Interfaz (Layout) ---

        // Se crea un panel para organizar el campo de filtro y su etiqueta.
        JPanel panelFiltro = new JPanel(new FlowLayout(FlowLayout.CENTER, 10, 10));
        panelFiltro.setBackground(new Color(240, 240, 255)); // Fondo claro para el panel
        panelFiltro.add(new JLabel("Filtrar por Nombre:"));
        panelFiltro.add(filtroInput);

        // Se crea y se estiliza la etiqueta del título principal.
        JLabel titulo = new JLabel("Reporte de Notas Estudiantiles", SwingConstants.CENTER);
        titulo.setFont(new Font("SansSerif", Font.BOLD, 20));
        titulo.setForeground(new Color(30, 30, 100)); // Color de énfasis
        titulo.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));

        // Se colocan los componentes en el Frame usando el BorderLayout:
        frame.add(titulo, BorderLayout.NORTH); // Título arriba
        frame.add(new JScrollPane(tabla), BorderLayout.CENTER); // Tabla con scroll en el centro
        frame.add(panelFiltro, BorderLayout.SOUTH); // Panel de filtro abajo

        // Se hace visible la ventana para que el usuario pueda interactuar con ella.
        frame.setVisible(true);
    }
}