<!-- JavaScript -->
<script>
import Card from "./Card.vue"; //importo la carta
import axios from "axios"; //importo axios
import store from "../store.js"; //importo lo store

//Esporto
export default {
    //Componenti
    components: {
        Card, //carta
    },
    //Dati
    data() {
        return {
            store, //store
        }
    },
    //Metodi
    methods: {
        //Metodo per cercare le carte
        fetchCards() {
            //Effettuo la chiamata alla API
            axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=" + this.store.stop + "&offset=" + this.store.start)
            .then((res) => {
                const info = res.data.data; //informazioni prese dall'API
                //Ciclo
                for (let i = 0; i < info.length; i++) {
                    //Creo un oggetto
                    let input = {
                        imgSrc: info[i].card_images[0].image_url, //immagine presa dall'API
                        fullName: info[i].name, //nome preso dall'API
                        archetype: info[i].archetype, //archetipo preso dall'API
                    };
                    this.store.data.push(input); //inserisco l'oggetto dentro l'array di dati
                }
            });
        }
    },
    //Created
    created() {
        this.fetchCards(); //cerco le carte
    }
}

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
                    <!-- Sottotitolo -->
                    <h2 class="number__title">
                        Found 39 cards
                    </h2>
                </div>
                <!-- Risultato della ricerca -->
                <div class="result">
                    <!-- Lista -->
                    <ul class="list">
                        <!-- Elemento della lista -->
                        <li class="list-item" v-for="(element) in store.data">
                            <!-- Carta -->
                            <Card v-bind:imgSrc="element.imgSrc" v-bind:fullName="element.fullName" v-bind:archetype="element.archetype"></Card>
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
    /* Elementi della lista */
    .list-item {
        flex-basis: calc((100% / 4) - (35px * (3 / 4)));
    }
</style>