<template>
    <div>
        <div>this is template body</div>
        <p class="ita">Welcome to Toto's home, loaded from <strong>{{ req }}</strong></p>
        <router-link to="/toto">go to toto's home</router-link>
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
