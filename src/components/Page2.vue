<template>
    <div class="text-h5">Titulo Page 2</div>
    <v-card class="mt-2">
        <v-card-item>
            <v-card-title>Page 2</v-card-title>

            <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
            This is content
        </v-card-text>
    </v-card>
    <v-card class="mt-5" v-for="i in 10">
        <v-card-text>
            This is content {{ i }}
        </v-card-text>
    </v-card>
  
  
</template>