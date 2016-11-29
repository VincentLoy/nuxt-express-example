<template>
    <div>
        <div>this is template body</div>
        <p class="ita">loaded TOTO from <strong>{{ req }}</strong></p>
        <router-link to="/">homepage</router-link>
    </div>
</template>
<style>
    body{
        background-color: #f9f9f9;
        text-align: center;
    }

    p.ita {
        padding: 10px;
        font-style: italic;
    }
</style>
<script>
    export default {
        data ({ req }) {
            return {
                msg: 'hello vue',
                req: req ? 'server' : 'client'
            }
        }
    }
</script>
