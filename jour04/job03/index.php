<!DOCTYPE html>
<html>
<head>
    <title>Tri des données Pokemon</title>
    <script src="script.js"></script>
</head>
<body>
    <form id="filterForm">
        <label for="id">ID:</label>
        <input type="text" id="id" name="id">

        <label for="name">Nom:</label>
        <input type="text" id="name" name="name">

        <label for="type">Type:</label>
        <select id="type" name="type">
            <option value="">Tous les types</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <!-- Ajoutez d'autres options de type ici -->
        </select>

        <input type="button" value="Filtrer" onclick="filterPokemon()">
    </form>

    <div id="results"></div>
</body>
</html>
