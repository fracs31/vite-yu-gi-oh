<!-- JavaScript -->
<script>
</script>

<!-- Template -->
<template>
    <!-- Main -->
    <main class="main-content">
        <!-- Container -->
        <div class="container">
            <!-- Filtro -->
            <div class="filter">
                <!-- Select -->
                <select class="select">
                    <!-- Opzione -->
                    <option value="Alien">Alien</option>
                </select>
            </div>
            <!-- Contenuto -->
            <div class="content">
                <!-- Numero risultati -->
                <div class="number">
                    <h2 class="number__title">
                        Found 39 cards
                    </h2>
                </div>
                <!-- Risultato della ricerca -->
                <div class="result">
                    <!-- Lista -->
                    <ul class="list">
                        <!-- Elemento della lista -->
                        <li class="list-item">
                            <!-- Carta -->
                            <div class="card">
                                <!-- Immagine della carta -->
                                <div class="card__img">
                                    <!-- Immagine -->
                                    <img class="card__img--img" src="../assets/img/card-test.png" alt="Test">
                                </div>
                                <!-- Nome della carta -->
                                <div class="card__name">
                                    <!-- Nome -->
                                    <h3 class="card__name--name">
                                        Dark Master - Zorc
                                    </h3>
                                </div>
                                <!-- Archetipo della carta -->
                                <div class="card__archetype">
                                    <!-- Archetipo -->
                                    <h4 class="card__archetype--archetype">
                                        Archetipo
                                    </h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<!-- CSS -->
<style scoped>
    /* Main */
    .main-content {
        background-color: #D48F38;
    }
    /* Filtro */
    .filter {
        padding: 35px 20px;
    }
    /* Select */
    .select {
        background-color: white;
        font-size: 16px;
        width: 150px;
        border-radius: 8px;
        padding: 10px;
        cursor: pointer;
    }
    /* Contenuto */
    .content {
        background-color: white;
        padding-top: 70px;
        padding-left: 70px;
        padding-right: 70px;
        padding-bottom: 10px;
    }
    /* Numero dei risultati */
    .number {
        background-color: #212529;
        color: white;
        padding: 15px;
    }
    /* Lista */
    .list {
        display: flex;
        flex-wrap: wrap;
        gap: 25px 35px;
    }
    /* Carta */
    .card {
        background-color: #D48F38;
        width: 240px;
    }
    /* Immagine della carta utilizzata */
    .card__img--img {
        width: 100%;
        object-fit: contain;
    }
    /* Nome della carta utilzzato */
    .card__name--name {
        color: white;
        text-transform: uppercase;
        text-align: center;
        padding: 10px 0px;
        font-size: 20px;
    }
    /* Archetipo della carta utilizzato */
    .card__archetype--archetype {
        color: black;
        text-align: center;
        padding: 10px 0px;
        font-size: 18px;
    }   
</style>