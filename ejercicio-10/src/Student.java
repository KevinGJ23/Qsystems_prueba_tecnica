import java.util.List;

// Definimos la clase principal, que es la plantilla o "molde" para crear objetos estudiante.
public class Student {

    // --- Atributos de la Clase (Propiedades o Variables de Instancia) ---

    // Los atributos son 'private'. Esto es la base del Encapsulamiento:
    // solo los métodos dentro de esta misma clase (Student) pueden acceder a ellos directamente.
    private String nombre;
    private int id;
    private List<Double> notas; // Usamos List<Double> para poder manejar muchas notas.

    // --- Constructor ---

    // El constructor es un método especial que se llama al crear un nuevo objeto (Ej: new Student(...)).
    // Su trabajo es inicializar (dar valores iniciales) a todos los atributos del nuevo objeto.
    public Student(String nombre, int id, List<Double> notas) {
        this.nombre = nombre; // 'this.' distingue el atributo de la clase del parámetro del método.
        this.id = id;
        this.notas = notas;
    }

    // --- Método de Negocio (Comportamiento de la Clase) ---

    /**
     * Este es el método que contiene la lógica principal.
     * Calcula y retorna el promedio de las notas que tiene este objeto Student.
     * Es 'public' para que otras clases (como Main) puedan usarlo.
     * @return El promedio de notas o 0.0 si el estudiante aún no tiene notas cargadas.
     */
    public double getPromedio() {
        // Validación inicial: Si la lista de notas es nula o está vacía, el promedio es 0.
        if (notas == null || notas.isEmpty()) {
            return 0.0;
        }

        double suma = 0;
        // Bucle 'for-each': Sumamos cada nota que está en la lista de 'notas'.
        for (double nota : notas) {
            suma += nota;
        }

        // El promedio se calcula dividiendo la suma total por la cantidad de notas.
        return suma / notas.size();
    }

    // --- Métodos Getters (Interfaz Pública para Acceder a Datos Privados) ---

    // Los Getters son métodos públicos que permiten a otras clases LEER
    // los atributos privados, respetando el Encapsulamiento.

    public String getNombre() {
        return nombre;
    }

    public int getId() {
        return id;
    }

    public List<Double> getNotas() {
        return notas;
    }

    // Los Setters (métodos para MODIFICAR los atributos) se omiten
    // porque en este ejercicio no es necesario cambiar los datos después de la creación.
}
