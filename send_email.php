<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Verificar método de solicitud
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener y validar datos JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Datos JSON inválidos']);
    exit;
}

// Validar campos requeridos
$requiredFields = ['nombre', 'correo', 'asunto'];
foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "El campo $field es requerido"]);
        exit;
    }
}

// Validar formato de email
if (!filter_var($data['correo'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Formato de correo electrónico inválido']);
    exit;
}

// Sanitizar datos
$nombre = htmlspecialchars(trim($data['nombre']));
$correo = filter_var($data['correo'], FILTER_SANITIZE_EMAIL);
$telefono = isset($data['telefono']) ? htmlspecialchars(trim($data['telefono'])) : 'No proporcionado';
$asunto = htmlspecialchars(trim($data['asunto']));

// Configurar correo
$to = 'axfeljimenez@gmail.com';
$emailSubject = 'Nuevo mensaje de contacto de ' . $nombre;
$from = "$nombre <$correo>";

// Plantilla HTML del email
$emailMessage = <<<HTML
<html>
<head>
    <title>Nuevo mensaje de contacto</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a1a2e; color: white; padding: 15px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #777; }
        .detail { margin-bottom: 10px; }
        .detail strong { color: #1a1a2e; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Nuevo mensaje de contacto</h2>
        </div>
        <div class="content">
            <div class="detail"><strong>Nombre:</strong> $nombre</div>
            <div class="detail"><strong>Correo:</strong> $correo</div>
            <div class="detail"><strong>Teléfono:</strong> $telefono</div>
            <div class="detail"><strong>Mensaje:</strong></div>
            <div>{$asunto}</div>
        </div>
        <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto del sitio web</p>
        </div>
    </div>
</body>
</html>
HTML;

// Cabeceras del email
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    "From: $from",
    "Reply-To: $correo",
    'X-Mailer: PHP/' . phpversion()
];

// Intentar enviar el correo
try {
    $mailSent = mail($to, $emailSubject, $emailMessage, implode("\r\n", $headers));
    
    if ($mailSent) {
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado con éxito']);
    } else {
        throw new Exception('Error al enviar el correo');
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error en el servidor al enviar el mensaje']);
}
?>