<template>
    <div class="col-md-3 dashboard">
        <h5>DASHBOARD</h5>
        <table class="table table-bordered">
            <tr>
                <td class="col-md-5">Number of Fighters</td>
                <td>{{ fighterCount }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Dashboard',
        computed: {...mapGetters(['fighterCount'])}
    }
</script>
