<template>
    <div class="container">
        <h3>UFC Fighters</h3>
        <dashboard></dashboard>
        <item-grid></item-grid>
    </div>
</template>

<script>
    import ItemGrid from './ItemGrid'
    import Dashboard from './Dashboard'

    export default {
        name: 'main',
        components: {
            ItemGrid,
            Dashboard
        },
        created() {
            this.$store.dispatch('fetchFighters')
        }
    }
</script>
