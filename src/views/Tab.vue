<template>
    <div>
        <v-tab :active="0">
            <v-tab-pane :title="'tab1'" :index="0"> 
                第一个tab
            </v-tab-pane>  
            <v-tab-pane :title="'tab2'" :index="1"> 
                第二个tab
            </v-tab-pane>  
            <v-tab-pane :title="'tab3'" :index="2"> 
                第三个tab
            </v-tab-pane>  
        </v-tab>
    </div>
</template>
<script>
export default {
    // mounted
}
</script>
