# 🧠 Guía: Gestión de Issues, Calidad y Mejora Continua

Este documento responde preguntas clave sobre prácticas de desarrollo colaborativo en GitHub y metodologías ágiles.

---

## ❓ ¿Qué significa Given / When / Then y por qué ayuda a la calidad?

El formato **Given / When / Then** (*Dado / Cuando / Entonces*) se usa para describir escenarios de comportamiento en pruebas o requisitos.

**Ejemplo:**
> **Given** que el usuario está en la página de inicio  
> **When** hace clic en "Iniciar sesión"  
> **Then** debería ver el formulario de login

**Por qué ayuda a la calidad:**
- Hace que las pruebas sean más claras y comprensibles.  
- Facilita la comunicación entre los miembros del equipo.  
- Reduce errores al definir de forma precisa el comportamiento esperado.  

---

## ❓ ¿Para qué sirven labels y assignees?

En GitHub, los **labels** y **assignees** ayudan a mantener la organización del trabajo:

- **Labels:** son etiquetas que **clasifican los issues o pull requests** por tipo o prioridad (ejemplo: `bug`, `docs`, `enhancement`).  
- **Assignees:** indican **quién está a cargo** de resolver una tarea o issue.

💡 Usarlos correctamente mejora la **distribución del trabajo**, la **colaboración** y el **seguimiento del progreso** del equipo.

---

## ❓ ¿Qué diferencia hay entre referenciar un issue y cerrarlo con `closes #id`?

- **Referenciar un issue:** solo **menciona o relaciona** otro issue.  
  ```bash
  Relacionado con #12
