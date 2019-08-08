<template>
    <div class="content">
        <div class="content-item">
            <v-button>default</v-button>
            <v-button size="medium">medium</v-button>
            <v-button size="small">small</v-button>
            <v-button size="mini">mini</v-button>
        </div>
        <div class="content-item">
            <v-button >default</v-button>
            <v-button type='primary'>primary</v-button>
            <v-button type='success'>success</v-button>
            <v-button type='info'>info</v-button>
            <v-button type='warning'>warning</v-button>
            <v-button type='danger'>danger</v-button>
        </div>
        <div class="content-item"> 
            <v-button plain>default</v-button>
            <v-button type='primary' plain>primary</v-button>
            <v-button type='success' plain>success</v-button>
            <v-button type='info' plain>info</v-button>
            <v-button type='warning' plain>warning</v-button>
            <v-button type='danger' plain>danger</v-button>
        </div>
          <div class="content-item">
            <v-button round>default</v-button>
            <v-button type='primary' round>primary</v-button>
            <v-button type='success' round>success</v-button>
            <v-button type='info' round>info</v-button>
            <v-button type='warning' round>warning</v-button>
            <v-button type='danger' round>danger</v-button>
        </div>
         <div class="content-item">
            <v-button disabled>default</v-button>
            <v-button type='primary' disabled>primary</v-button>
            <v-button type='success' disabled>success</v-button>
            <v-button type='info' disabled>info</v-button>
            <v-button type='warning' disabled>warning</v-button>
            <v-button type='danger' disabled>danger</v-button>
        </div>
    </div>
</template>
<style lang="scss">
    .content{
        width:80%;
        margin:30px auto;
    }
    .content-item{
        margin-bottom:30px
    }
</style>

