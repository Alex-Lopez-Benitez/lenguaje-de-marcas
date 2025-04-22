<?php
$servername = "localhost";
$username = "root";  
$password = "";      
$dbname = "world"; 
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");

$sql = "SELECT c.Name AS CountryName, cy.Name AS CapitalName 
        FROM country c 
        LEFT JOIN city cy ON c.Capital = cy.ID 
        ORDER BY c.Name";

$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Países y Capitales - World Database</title>
</head>
<body>
    <h1>Listado de Países y sus Capitales</h1>
    
    <table>
        <thead>
            <tr>
                <th>País</th>
                <th>Capital</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result && $result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row["CountryName"]) . "</td>";
                    echo "<td>" . htmlspecialchars($row["CapitalName"] ?? "N/A") . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='2'>No se encontraron países o hubo un error en la consulta</td></tr>";
            }
            ?>
        </tbody>
    </table>
    
    <?php
    $conn->close();
    ?>
</body>
</html>