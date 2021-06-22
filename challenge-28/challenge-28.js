  /*
  En HTML:
  - Crear un formulario con una entrada de texto que recibirá un código postal y un
  botón de enviar;
  - Crear una estructura HTML para recibir la información de la dirección:
  "Dirección, barrio, estado, ciudad y código postal". Esta información será
  rellenado con los datos de la solicitud realizada en JS.
  - Cree un área que recibirá mensajes con el estado de la solicitud:
  "Cargando, éxito o error".

  En JS:
  - El código postal puede ser introducido por el usuario con cualquier tipo de carácter, pero
  debe ser aclarado y enviado sólo los números para la solicitud de abajo;
  - Al enviar este formulario, se debe hacer una petición Ajax a la URL:
  "https://viacep.com.br/ws/[zip]/json/", donde [zip] será el código postal pasado
  en la entrada creada en el HTML;
  - Esta solicitud mostrará un código postal en JSON. Rellenar los campos de la pantalla
  con los datos recibidos.
  - Mientras se obtienen los datos, en el área de estado de los mensajes, debe aparecer
  el mensaje: "Buscando información para ZIP [código postal]..."
  - Si no hay datos para el código postal introducido, aparecerá el mensaje:
  "No hemos podido encontrar la dirección del código postal [ZIP Code]".
  - Si hay una dirección para el código postal introducido, muestra el mensaje:
  "Dirección referida al código postal [ZIP Code]:"
  - Utiliza la librería DOM creada anteriormente para facilitar la manipulación y
  añadir la información en pantalla.
  */
