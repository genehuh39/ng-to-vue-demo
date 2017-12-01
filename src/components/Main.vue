<template>
    <div class="container">
        <h3>UFC Fighters</h3>
        <dashboard></dashboard>
        <item-grid></item-grid>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import ItemGrid from './ItemGrid'
    import Dashboard from './Dashboard'

    export default {
        name: 'main',
        components: {
            ItemGrid,
            Dashboard
        },
        methods: {
            ...mapActions([
                'fetchFighters'
            ])
        },
        created() {
            this.fetchFighters()
        }
    }
</script>
