# Password Strength Meter

## Descripción

Este proyecto consiste en un componente React llamado `PasswordStrengthMeter` que evalúa en tiempo real la fortaleza de una contraseña utilizando reglas definidas previamente.

El proyecto fue desarrollado aplicando la metodología **TDD (Test Driven Development)** utilizando:

* React
* Vite
* Vitest
* React Testing Library

Además, se incluye una barra visual de fortaleza y cobertura de tests con Vitest.

---

# Tecnologías utilizadas

* React
* Vite
* Vitest
* React Testing Library
* user-event
* jsdom

---

# Instalación

Clonar el repositorio:

```bash
git clone git@github.com:JuanGualim/Lab8_web.git
```

Entrar al proyecto:

```bash
cd password-strength-meter
```

Instalar dependencias:

```bash
npm install
```

---

# Ejecutar el proyecto

```bash
npm run dev
```

Luego abrir el navegador en la URL indicada por Vite.

---

# Ejecutar tests

```bash
npm test
```

---

# Ejecutar coverage

```bash
npm run coverage
```

El reporte HTML se genera en:

```txt
coverage/index.html
```

---

# Reglas de fortaleza

La contraseña se evalúa según las siguientes reglas:

| Condición                                  | Resultado    |
| ------------------------------------------ | ------------ |
| Contraseña vacía                           | `vacía`      |
| Menos de 8 caracteres                      | `débil`      |
| 8 o más caracteres sin números ni símbolos | `media`      |
| 8 o más caracteres con al menos un número  | `fuerte`     |
| 8 o más caracteres con número y símbolo    | `muy fuerte` |

---

# Arquitectura

El proyecto separa:

* Lógica pura de cálculo de fortaleza
* Componente React

## Archivos principales

```txt
src/
├── components/
│   ├── PasswordStrengthMeter.jsx
│   └── PasswordStrengthMeter.test.jsx
├── utils/
│   ├── passwordStrength.js
│   └── passwordStrength.test.js
```

---

# Testing

Se implementaron tests para:

## Lógica pura

* contraseña vacía
* contraseña débil
* contraseña media
* contraseña fuerte
* contraseña muy fuerte
* edge cases

## Componente React

* renderizado del input
* renderizado del estado inicial
* actualización dinámica del texto
* limpieza del input
* barra visual de fortaleza
* accesibilidad utilizando label

---

# Flujo TDD aplicado

El desarrollo siguió el flujo:

1. Escribir tests primero
2. Ejecutar tests fallando
3. Realizar commits con tests en rojo
4. Implementar la mínima funcionalidad necesaria
5. Ejecutar tests hasta obtener verde
6. Refactorizar manteniendo tests pasando

---

# Scripts disponibles

| Script             | Descripción                       |
| ------------------ | --------------------------------- |
| `npm run dev`      | Ejecuta el proyecto en desarrollo |
| `npm test`         | Ejecuta Vitest en modo watch      |
| `npm run coverage` | Genera reporte de coverage        |

