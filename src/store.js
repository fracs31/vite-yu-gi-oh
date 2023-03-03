import { reactive } from "vue"; //importo reactive da Vue

//Creo lo store
const store = reactive({
    start: 0, //numero da cui si parte a cercare le carte
    stop: 12, //numero in cui ci si ferma a cercare le carte
    data: [], //dati presi dall'API
});

export default store; //esporto lo store