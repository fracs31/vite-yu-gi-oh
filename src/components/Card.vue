<!-- JavaScript -->
<script>

//Esporto
export default {
    //Props
    props: {
        imgSrc: String, //immagine
        fullName: String, //nome
        archetype: String, //archetipo
    }
};

</script>

<!-- Template -->
<template>
    <!-- Carta -->
    <div class="card">
        <!-- Immagine della carta -->
        <div class="card__img">
            <!-- Immagine -->
            <img class="card__img--img" v-bind:src="imgSrc" v-bind:alt="fullName">
        </div>
        <!-- Nome della carta -->
        <div class="card__name">
            <!-- Nome -->
            <h3 class="card__name--name">
                {{ fullName }}
            </h3>
        </div>
        <!-- Archetipo della carta -->
        <div class="card__archetype">
            <!-- Archetipo -->
            <h4 class="card__archetype--archetype">
                {{ archetype }}
            </h4>
        </div>
    </div>
</template>

<!-- CSS -->
<style scoped>
    /* Carta */
    .card {
        background-color: #D48F38;
        width: 100%;
        height: 100%;
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