<!-- JavaScript -->
<script>
import Card from "./Card.vue"; //importo la carta
import Filter from "./Filter.vue"; //importo il filtro
import axios from "axios"; //importo axios
import store from "../store.js"; //importo lo store

//Esporto
export default {
    //Componenti
    components: {
        Card, //carta
        Filter, //filtro
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
            axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
                //Parametri
                params: {
                    num: this.store.stop, //numero di elementi da mostrare
                    offset: this.store.start, //numero da cui partire,
                    fname: this.store.fname, //nome della carta
                }
            })
            .then((res) => {
                const info = res.data.data; //informazioni prese dall'API
                this.store.data = []; //resetto l'array di carte
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
            }).catch((error) => {
                console.log(error); //stampo l'errore
                this.store.data = []; //azzero l'array delle carte
                this.store.fname = ""; //azzero la ricerca
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
            <Filter v-on:search="fetchCards()"></Filter>
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
        width: calc((100% / 4) - (35px * (3 / 4)));
    }
</style>