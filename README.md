Automatización del flujo de compra en Demoblaze
Playwright + TypeScript

📂 Estructura del proyecto
page-objects/   → Home, Producto y Carrito  
tests/e2e/      → Test principal  
utils/          → Datos del usuario y producto  
Otros archivos  → Config y setup de Playwright

▶️ Cómo ejecutarlo
Instalar dependencias
  npm install
  npm init playwright@latest   # solo si faltan los browsers

Ejecutar tests
  npx playwright test

Modo visual
  npx playwright test --headed

Ver reporte
  npx playwright show-report

💡 Notas
Implementé POM para mantener el test más limpio.
El flujo automatizado cubre: ingresar → seleccionar producto → agregar al carrito → completar formulario → verificar compra.
