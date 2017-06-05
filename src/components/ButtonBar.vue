<template>
    <div class="btn-group">
        <button type="button" class="btn btn-sm btn-success" @click="selectFighter()">edit</button>
        <button type="button" class="btn btn-sm btn-danger" @click="deleteFighter()">delete</button>
    </div>
</template>

<script>
    export default {
        name: 'button-bar',
        props: ['fighter'],
        methods: {
            selectFighter() {
                this.$store.commit('SELECT_FIGHTER', this.fighter)
                this.$root.$emit('show::modal', 'modal1')
            },
            deleteFighter() {
                this.$store.dispatch('deleteFighter', this.fighter)
            }
        }
    }
</script>
