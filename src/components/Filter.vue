<!-- JavaScript -->
<script>

</script>

<!-- Template -->
<template>
    <!-- Filtro -->
    <div class="filter">
        <!-- Input -->
        <input class="input" type="text" placeholder="Inserire il nome della carta">
        <!-- Select -->
        <select class="select">
            <!-- Opzione -->
            <option value="Alien">Alien</option>
        </select>
    </div>
</template>

<!-- CSS -->
<style scoped>
    /* Filtro */
    .filter {
        padding: 35px 20px;
        display: flex;
        gap: 15px;
    }
    /* Input */
    .input {
        flex-grow: 1;
        font-size: 16px;
        padding: 10px;
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
</style>